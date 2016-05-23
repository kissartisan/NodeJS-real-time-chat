var mongo = require('mongodb').MongoClient,
		client = require('socket.io').listen(8000).sockets; // Listen to port 8000

// Connect to the database
mongo.connect('mongodb://localhost:27017/chat', function(err, db) {
	if (err) {
		throw err;
	}

	// Setup the connection
	client.on('connection', function(socket) {

		var col = db.collection('messages');
		// Function to send a status
		var sendStatus = function(s) {
			socket.emit('status', s);
		};

		// Emit all messsages
		// Limit it to 100 & sort it in reverse
		col.find().limit(100).sort({_id: 1}).toArray(function(err, res) {
			if (err) throw err;

			// If I do, socket.emit() only, it only calls one connection
			// Emit to all persons
			socket.emit('output', res);
		});

		// Define the name of the incoming input
		// socket.on('nameOfYourChoice')
		socket.on('input', function(data) {
			var name = data.name, message = data.message;
			var whitespacePattern = /^\s*$/;

			// Use .test() to use the matching pattern (PERL expression)
			if (whitespacePattern.test(name) || whitespacePattern.test(message)) {
				// sendStatus === string
				sendStatus('Name and message is required');
			} else {
				col.insert({name: name, message: message}, function() {
					// Emit latest message to ALL clients after a successful send
					client.emit('output', [data]);

					// sendStatus === string
					sendStatus({
						message: "Message sent",
						clear: true,
					});
				});
			}

		});
	});
});