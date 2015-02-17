$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#place-name").val();
    var inputtedSeason = $("input#season").val();
    var inputtedNotes = $("input#notes").val();
    var inputtedRating = $("input#rating").val();
    var newPlace = { placeName: inputtedPlaceName, season: inputtedSeason, notes: inputtedNotes, rating: inputtedRating };

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + " in " +  newPlace.season + "</span></li>");

    $("input#place-name").val("");
    $("input#season").val("");
    $("input#notes").val("");
    $("input#rating").val("");


    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName + " in " + newPlace.season);
      $(".place-name").text(newPlace.placeName);
      $(".season").text(newPlace.season);
      $(".notes").text(newPlace.notes);
      $(".rating").text(newPlace.rating);
    });

  });

});
