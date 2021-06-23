var input = document.querySelectorAll("textarea")[0];
(characterCount = document.querySelector("#characterCount")),
  (wordCount = document.querySelector("#wordCount")),
  (sentenceCount = document.querySelector("#sentenceCount")),
  (paragraphCount = document.querySelector("#paragraphCount")),
  (keywordsDiv = document.querySelectorAll(".keywords")[0]),
  (topKeywords = document.querySelector("#topKeywords"));
(readingTime = document.querySelector("#readingTime")),
  (bigramCount = document.querySelector("#bigramCount"));

var sentences = input.value.split(/[.|!|?]+/g);

input.addEventListener("keyup", function () {
  // word counter logic
  characterCount.innerHTML = input.value.length;
  let isWord = input.value.match(/\b[-?(\w+)?]+\b/gi);
  console.log(isWord);
  if (isWord) {
    wordCount.innerHTML = isWord.length;
  } else {
    wordCount.innerHTML = 0;
  }

  // sentence count logic
  if (isWord) {
    let sentences = input.value.split(/[.|!|?]+/g);
    console.log(sentences);
    sentenceCount.innerHTML = sentences.length - 1;
  } else {
    sentenceCount.innerHTML = 0;
  }
  
  // paragragh count logic
  if (isWord) {
    let paragraphs = input.value.replace(/\n$/gm, "").split(/\n/);
    console.log(paragraphs);
    paragraphCount.innerHTML = paragraphs.length;
  } else {
    paragraphCount.innerHTML = 0;
  }

  //bigram count logic
  
  
  // reading time calculation
  if (isWord) {
    var seconds = Math.floor((words.length * 60) / 275);
    // need to convert seconds to minutes and hours
    if (seconds > 59) {
      var minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      readingTime.innerHTML = minutes + "m " + seconds + "s";
    } else {
      readingTime.innerHTML = seconds + "s";
    }
  } else {
    readingTime.innerHTML = "0s";
  }
});

// Step 1) removing all the stop words
// var nonStopWords = [];
// var stopWords = ["a", "the", "at", "to", ...];
// for (var i = 0; i < words.length; i++) {
//   // filtering out stop words and numbers
//   if (stopWords.indexOf(words[i].toLowerCase()) === -1 && isNaN(words[i])) {
//     nonStopWords.push(words[i].toLowerCase());
//   }
// }
// // Step 2) forming an object with keywords and their count
// var keywords = {};
// for (var i = 0; i < nonStopWords.length; i++) {
//   // checking if the word(property) already exists
//   // if it does increment the count otherwise set it to one
//   if (nonStopWords[i] in keywords) {
//     keywords[nonStopWords[i]] += 1;
//   } else {
//     keywords[nonStopWords[i]] = 1;
//   }
// }
// // check if a string is a word
// function isWord(str) {
//   var alphaNumericFound = false;
//   for (var i = 0; i < str.length; i++) {
//     var code = str.charCodeAt(i);
//     if ((code > 47 && code < 58) || // numeric (0-9)
//     (code > 64 && code < 91) || // upper alpha (A-Z)
//     (code > 96 && code < 123)) { // lower alpha (a-z)
//       alphaNumericFound = true;
//       return alphaNumericFound;
//     }
//   }
//   return alphaNumericFound;
// }
// function wordCounter(text) {
//   var text = input.value.split(' ');
//   var wordCount = 0;
//   for (var i = 0; i < text.length; i++) {
//     if (text[i] !== ' ' && isWord(text[i])) {
//       wordCount++;
//     }
//   }
//   count.innerText = wordCount;
// }
