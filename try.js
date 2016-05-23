function add(x) {
	var sum = 0;
	for(i = 1; i <= x; i++) {
		sum += i;
	}
	return sum;
}
console.log(add(10));


function reverseWord(word) {
	var storeWord = '';
	for(i = word.length - 1; i >= 0; i--) {
		storeWord += word[i];
	}
	return storeWord;
}
console.log(reverseWord('abcdefg'));

function longestWord(sentence) {
	var splitter = sentence.split(" ");
	var longWord = '';

	for(i = 0; i < splitter.length; i++) {
		if (longWord.length < splitter[i].toString().length) {
			longWord = splitter[i].toString();
		}
	}
	return longWord;
}

console.log(longestWord('The quick brown fox jumpster over the lazy dog.'));



// String.prototype.replaceAt=function(index, character) {
//     return this.substr(0, index) + character + this.substr(index+character.length);
// };

function replaceLetters(longWord) {
	// var alphabets = 'abcdefghijklmnopqrstuvwxyz';

	// for(asciiAlphabet = 97; asciiAlphabet <= 122; asciiAlphabet++) {
	// 	console.log(String.fromCharCode(i));
	// }
	var str;
	var newString = '';
	var newWord = longWord;

	for(i = 0; i < longWord.length; i++) {
		switch(longWord[i]) {
			case 'a':
				console.log('Uppercase the a!');
				newWord = newWord.replace(longWord[i], "a".toUpperCase());
				break;
			case 'e':
				newWord = newWord.replace(longWord[i], "e".toUpperCase());
				break;
			case 'i':
				newWord = newWord.replace(longWord[i], "i".toUpperCase());
				break;
			case 'o':
				newWord = newWord.replace(longWord[i], "o".toUpperCase());
				break;
			case 'u':
				newWord = newWord.replace(longWord[i], "u".toUpperCase());
				break;
		}

		if (newWord.charCodeAt(i) == 97 || newWord.charCodeAt(i) == 101) { //|| newWord.charCodeAt(i) == 105 || newWord.charCodeAt(i) == 111 || newWord.charCodeAt(i) == 117) {
			console.log('Here!');
			str = newWord.charCodeAt(i);
			console.log(str);
			newString += String.fromCharCode(str);
			console.log(newString);
		} else {
			console.log('Not Here!');
			str = newWord.charCodeAt(i) + 1;
			newString += String.fromCharCode(str);
		}
	}

	return newString;
}

console.log(replaceLetters('abcdefghijklmnop'));

// var str = "T";
// console.log(str.charCodeAt(0));

// console.log(String.fromCharCode(97));



// console.log(replaceLetters('Lazcy Morgznne aeiousdf'));

/**
 * SOLUTION
 */
// function Words(longWord) {
//        var returnStr = '';
//        var acceptableChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//        var vowels = "AEIOU";

//        for (var i = 0; i < longWord.length; i++) {
//            if (acceptableChar.indexOf(longWord.substring(i, i + 1).toUpperCase()) >= 0) {

//                if (vowels.indexOf(longWord.substring(i, i + 1).toUpperCase()) >= 0) {
//                    returnStr += longWord.substring(i, i + 1).toUpperCase();
//                }
//                else if (longWord.substring(i, i + 1) == "z")
//                {
//                    returnStr += "a";
//                }
//                else if (longWord.substring(i, i + 1) == "Z")
//                {
//                    returnStr += "A";
//                }
//                else {
//                    returnStr += String.fromCharCode(longWord.charCodeAt(i) + 1);
//                }

//            }
//            else {
//                returnStr += longWord.substring(i, i + 1);
//            }

//        }

//        return returnStr;
//    }
