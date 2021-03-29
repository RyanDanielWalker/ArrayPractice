$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault()
    const answer1 = $("#question1").val();
    const answer2 = $("#question2").val();
    const answer3 = $("#question3").val();

    const favoriteThings = [answer1, answer2, answer3]
    console.log('fav things:', favoriteThings)

    const favoriteThingsReversed = [];
    favoriteThingsReversed.push(favoriteThings[2])
    favoriteThingsReversed.push(favoriteThings[1])
    favoriteThingsReversed.push(favoriteThings[0])
    console.log("fav thing1", favoriteThingsReversed)

    $('main').append('<ol/>')
    $('ol').append('<li id="favorite-thing1"/>')
    $('#favorite-thing1').text(favoriteThingsReversed[0])
    $('ol').append('<li id="favorite-thing2"/>')
    $('#favorite-thing2').text(favoriteThingsReversed[1])
  })
})