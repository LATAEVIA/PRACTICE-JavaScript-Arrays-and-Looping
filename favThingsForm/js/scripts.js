$(document).ready(function() {
  $("form#favethings").submit(function(event) {
      var fav1 = $("input#fav1").val();
      var fav2 = $("input#fav2").val();
      var fav3 = $("input#fav3").val();
      var fav = [fav1, fav2, fav3];
      var newFav = [];
      newFav.push(fav[1],fav[0],fav[2]);
      // alert(newFav);
      event.preventDefault();
      $("#favTwo").empty().append(newFav[0]);
      $("#favOne").empty().append(newFav[1]);
      $("#favThree").empty().append(newFav[2]);
      $("#list").show();
  });
});
