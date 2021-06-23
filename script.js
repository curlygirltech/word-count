// var count = document.getElementById('count');
// var input = document.getElementById('input');

var input = document.querySelectorAll('textarea')[0];
var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
var sentences = input.value.split(/[.|!|?]+/g);

input.addEventListener('keyup', function(e) {

  // word counter logic
  wordCounter(e.target.value);
  // sentence count logic

  // reading time calculation

  // keyword finding logic

});

// Step 1) removing all the stop words
var nonStopWords = [];
var stopWords = ["a", "the", "at", "to", ...];
for (var i = 0; i < words.length; i++) {
  // filtering out stop words and numbers
  if (stopWords.indexOf(words[i].toLowerCase()) === -1 && isNaN(words[i])) {
    nonStopWords.push(words[i].toLowerCase());
  }
}
// Step 2) forming an object with keywords and their count
var keywords = {};
for (var i = 0; i < nonStopWords.length; i++) {
  // checking if the word(property) already exists
  // if it does increment the count otherwise set it to one
  if (nonStopWords[i] in keywords) {
    keywords[nonStopWords[i]] += 1;
  } else {
    keywords[nonStopWords[i]] = 1;
  }
}
// check if a string is a word
function isWord(str) {
  var alphaNumericFound = false;
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
    (code > 64 && code < 91) || // upper alpha (A-Z)
    (code > 96 && code < 123)) { // lower alpha (a-z)
      alphaNumericFound = true;
      return alphaNumericFound;
    }
  }
  return alphaNumericFound;
}
function wordCounter(text) {
  var text = input.value.split(' ');
  var wordCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ' && isWord(text[i])) {
      wordCount++;
    }
  }
  count.innerText = wordCount;
}