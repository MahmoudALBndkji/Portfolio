/**
 * Home page only: certificate carousel, typed headline, click sound.
 * Loaded with defer after main.js (see index.html).
 */
(function () {
  "use strict";

  window.buttonAudio = new Audio();
  window.buttonAudio.src = "assets/audios/mouseClick.mp3";

  if (typeof Swiper !== "undefined" && document.querySelector(".certificateSwiper")) {
    new Swiper(".certificateSwiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 800,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 60,
    });
  }

  if (typeof Typed !== "undefined" && document.querySelector(".auto-type")) {
    new Typed(".auto-type", {
      strings: [
        "Software Enginnering",
        "Mobile Applicatoin Developer",
        "Flutter Developer",
        "Android Developer",
        "IOS Developer",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });
  }
})();
