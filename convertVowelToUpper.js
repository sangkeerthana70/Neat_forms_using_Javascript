/*
window.onload = function() {
	
	var result = translateUpper("apple");
	console.log(result);
};*/

function translateUpper(str) {
	var vowelArray = ["a","e","i","o","u"];
	var result = [];
	for (var i=0; i<str.length; i++) {
		if (vowelArray.indexOf(str[i]) !== -1) {	
			result.push(str[i].toUpperCase());
			console.log(result);//["A", "p"]
//convertVowelToUpperInString.js:17 (3) ["A", "p", "p"]
//convertVowelToUpperInString.js:17 (4) ["A", "p", "p", "l"]
//convertVowelToUpperInString.js:13 (5) ["A", "p", "p", "l", "E"]
		}
		else {
			result.push(str[i].toLowerCase());
			console.log(result);
		}	
	}
	return result.join("");// join() method converts the array into string.

translateUpper(apple);	
}