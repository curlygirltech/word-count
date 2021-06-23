var count = document.getElementById('count');
var input = document.getElementById('input');

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
function wordCounter(text) {
  var text = input.value;
  var wordCount = 0;
  for (var i = 0; i <= text.length; i++) {
    if (text.charAt(i) == ' ') {
      wordCount++;
    }
  }
  count.innerText = wordCount;
}