(function () {
  "use strict";
  // Easy selector helper function
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  // Easy event listener function
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  // Easy on scroll event listener
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };
  // Navbar links active state on scroll
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);
  // Scrolls to an element with header offset
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };
  // Toggle .header-scrolled class to #header when page is scrolled
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }
  // Back to top button
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }
  // Mobile nav toggle
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });
  // Mobile nav dropdowns activate
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );
  // Scrool with ofset on links with a class name .scrollto
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();
        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );
  // Scroll with ofset on page load with hash links in the url
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });
  // Orginal Preloader
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }
  // Initiate  glightbox
  const glightbox = GLightbox({
    selector: ".glightbox",
  });
  //  Porfolio isotope and filter
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });
      let portfolioFilters = select("#portfolio-flters li", true);
      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });
  // Initiate portfolio lightbox
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });
  // Portfolio details slider
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  // Animation on scroll
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

// Init swiper slider with 1 slide at once in desktop view
new Swiper(".slides-1", {
  speed: 800,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Init swiper slider with 3 slides at once in desktop view
new Swiper(".slides-3", {
  speed: 800,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
// Close NavBar When Width Bigger Tablet or More
const closeNavMobile = (size) =>
  size.matches
    ? document.querySelector(".mobile-nav-toggle.bi-x").click()
    : null;
window
  .matchMedia("(min-width: 992px)")
  .addEventListener("change", closeNavMobile);

// // PreLoader
// onload = () => {
//   vanish();
// };
// let vanish = () => {
//   document.querySelector(".loader-container").classList.add("fade-out");
// };

// Header Component Details Project
// document.querySelector(".header").innerHTML = `
// <div class="container d-flex align-items-center">
//   <a href="main_page.html">
//     <h1 class="logo me-auto" title="logo">
//       <img src="assets/img/hero_scetion/leftTag.png" alt="" />
//       <a href="main_page.html" style="color: #209dd8">Mahmoud</a>
//       <a href="main_page.html">
//         <img src="assets/img/hero_scetion/rightTag.png" alt="" />
//       </a>
//     </h1>
//   </a>
//   <nav id="navbar" class="navbar" aria-label="Navbar">
//     <ul>
//       <li title="Home" onclick="buttonAudio.play();">
//         <a class="nav-link scrollto active" href="main_page.html#hero"
//           >Home</a
//         >
//       </li>
//       <li title="About" onclick="buttonAudio.play();">
//         <a
//           class="nav-link scrollto"
//           href="main_page.html#about"
//           style="color: #209dd8"
//           >About</a
//         >
//       </li>
//       <li title="Projects" onclick="buttonAudio.play();">
//         <a
//           class="nav-link scrollto"
//           href="main_page.html#portfolio"
//           style="color: #209dd8"
//           >Projects</a
//         >
//       </li>
//       <li title="Tools" onclick="buttonAudio.play();">
//         <a
//           class="nav-link scrollto"
//           href="main_page.html#tools"
//           style="color: #209dd8"
//           >Tools</a
//         >
//       </li>
//       <li title="Contact" onclick="buttonAudio.play();">
//         <a
//           class="nav-link scrollto"
//           href="main_page.html#contact"
//           style="color: #209dd8"
//           >Contact</a
//         >
//       </li>
//       <li title="Download CV" id="list-download-cv">
//         <a
//           class="nav-link scrollto"
//           href="https://www.mediafire.com/file/6zcf96vqyeoiw22/CV_-_Mahmoud_AL_Bndkji.pdf/file"
//           target="_blank"
//           >Download CV</a
//         >
//       </li>
//     </ul>
//     <i class="bi bi-list mobile-nav-toggle" style="color: #209dd8"></i>
//   </nav>
// </div>`;

// Footer Component Details Project
document.querySelector(".footer").innerHTML = `
<div class="container footer-bottom clearfix">
  <div class="copyright">
    <span class="reserved"> &copy; Copyright </span>
    <strong><span>Mahmoud AL-Bndkji</span></strong>
  </div>
  <div class="developed">
    Developed with <span title="Thanks For Browsing">&#10084;</span>
  </div>
</div>`;

