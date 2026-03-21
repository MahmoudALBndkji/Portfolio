/**
 * Home page only: certificate carousel, typed headline, click sound.
 * Loaded with defer after main.js (see index.html).
 */
(function () {
  "use strict";

  window.buttonAudio = new Audio();
  window.buttonAudio.src = "assets/audios/mouseClick.mp3";

  if (typeof Swiper !== "undefined" && document.querySelector(".certificateSwiper")) {
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    new Swiper(".certificateSwiper", {
      loop: true,
      speed: reduceMotion ? 0 : 800,
      autoplay: reduceMotion
        ? false
        : {
            delay: 3000,
            disableOnInteraction: false,
          },
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 60,
    });
  }

  if (typeof Typed !== "undefined" && document.querySelector(".auto-type")) {
    new Typed(".auto-type", {
      strings: [
        "Software Engineering",
        "Mobile Developer",
        "Flutter Developer",
        "Android Developer",
        "iOS Developer",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });
  }
})();
