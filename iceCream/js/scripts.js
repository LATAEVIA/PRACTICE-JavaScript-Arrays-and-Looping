$(document).ready(function() {
  var iceCreams = ['strawberry', 'butter pecan', 'more strawberry'];
  $("#iclist").hide();
  $(".btn").click(function(event){
    $("#iclist").show();
  });

  iceCreams.forEach(function(iceCream) {
    $('#favOne').text(iceCreams [0]);
    $('#favTwo').text(iceCreams[1]);
    $('#favThree').text(iceCreams[2]);
  });
});
