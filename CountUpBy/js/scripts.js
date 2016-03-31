$(document).ready(function() {
  $("form#countInput").submit(function(event){
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());

    for (var total = 0; total <= countTo; total += countBy){
      $("#output").append(total + " ");
    }

    event.preventDefault();
  });
});


//
// $("form#friendName").submit(function(event) {
//   var name1 = $("input#name1").val();
//   var name2 = $("input#name2").val();
//   var name3 = $("input#name3").val();
//   var names = [name1, name2, name3];
//
//   names.forEach(function(name) {
//     alert('Hey ' + name + '!');
//   })
// });      $(".output").append(total + " ");
