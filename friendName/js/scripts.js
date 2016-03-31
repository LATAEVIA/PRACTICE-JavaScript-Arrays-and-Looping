$(document).ready(function() {

  $("form#friendName").submit(function(event) {
    var name1 = $("input#name1").val();
    var name2 = $("input#name2").val();
    var name3 = $("input#name3").val();
    var names = [name1, name2, name3];

    names.forEach(function(name) {
      alert('Hey ' + name + '!');
    })
  });
});
