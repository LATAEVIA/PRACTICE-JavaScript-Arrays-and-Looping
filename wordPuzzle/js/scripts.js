$(document).ready(function() {
  $("form#sentence").submit(function(event) {

    $("#result").text("");
    var sentenceString = $("#phraseIn").val();
    var arraySplitString = sentenceString.split('');

    for (var index = 0; index <= arraySplitString.length; index +=1) {
      if (arraySplitString [index] === 'a','e','i','o','u') {
        arraySplitString[index] = arraySplitString[index].replace(/a/gi, '-').replace(/e/gi, '-').replace(/i/gi, '-').replace(/o/gi, '-').replace(/u/gi, '-')

        var together = arraySplitString.join('')
        $('#result').text(together);
      }
    }
    event.preventDefault();
  });
});
