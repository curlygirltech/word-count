var input = document.querySelectorAll("textarea")[0];
(characterCount = document.querySelector("#characterCount")),
  (wordCount = document.querySelector("#wordCount")),
  (sentenceCount = document.querySelector("#sentenceCount")),
  (paragraphCount = document.querySelector("#paragraphCount")),
  (keywordsDiv = document.querySelectorAll(".keywords")[0]),
  (topKeywords = document.querySelector("#topKeywords"));
(readingTime = document.querySelector("#readingTime")),
  (bigramCount = document.querySelector("#bigramCount"));


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
  if (isWord) {
    let bigram = [];
    for (let i = 0; i < isWord.length - 1; i++) {
      let word = isWord[i];
      let nextWord = isWord[i + 1];
      bigram.push(word + " " + nextWord);
    }

    bigramCount.innerHTML = bigram.length;
  } else {
    bigramCount.innerHTML = 0;
  }

  // reading time calculation
  if (isWord) {
    var seconds = Math.floor((isWord.length * 60) / 275);
    // convert seconds to minutes and hours
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
  
  //Find the top keywords 
  if (isWord) {
    let Counter = 0;
    let wordFrequency = {};
    let highestFrequency;

    for (let word of isWord) {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;

      if (wordFrequency[word] > Counter) {
        Counter = wordFrequency[word];
        highestFrequency = word;
      }
    }

  topKeywords.innerHTML = highestFrequency;
  } else {
  topKeywords.innerHTML = "N/A";
  }

});