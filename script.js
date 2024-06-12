$(document).ready(function () {
  $(".container").mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}


$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".year-of-dating").addClass("open");
    })
    .mouseleave(function () {
      $(".year-of-dating").removeClass("open");
    });
});
