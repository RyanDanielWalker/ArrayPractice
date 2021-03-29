$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault()
    const answer1 = $("#question1").val();
    const answer2 = $("#question2").val();
    const answer3 = $("#question3").val();

    const favoriteThings = [answer1, answer2, answer3]

    console.log('fav things:', favoriteThings)

  })
})