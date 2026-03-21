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

  const HERO_MOBILE_HEADER_EXIT_PX = 20;
  const updateHeroMobileHeaderHidden = () => {
    const body = document.body;
    if (!selectHeader) {
      body.classList.remove("hero-mobile-header-hidden");
      return;
    }
    if (window.innerWidth > 991) {
      body.classList.remove("hero-mobile-header-hidden");
      selectHeader.removeAttribute("aria-hidden");
      selectHeader.removeAttribute("inert");
      return;
    }
    if (body.classList.contains("mobile-nav-open")) {
      body.classList.remove("hero-mobile-header-hidden");
      selectHeader.removeAttribute("aria-hidden");
      selectHeader.removeAttribute("inert");
      return;
    }
    const hero = select("#hero");
    if (!hero) {
      body.classList.remove("hero-mobile-header-hidden");
      selectHeader.removeAttribute("aria-hidden");
      selectHeader.removeAttribute("inert");
      return;
    }
    const bottom = hero.getBoundingClientRect().bottom;
    const hide = bottom > HERO_MOBILE_HEADER_EXIT_PX;
    body.classList.toggle("hero-mobile-header-hidden", hide);
    if (hide) {
      selectHeader.setAttribute("aria-hidden", "true");
      selectHeader.setAttribute("inert", "");
    } else {
      selectHeader.removeAttribute("aria-hidden");
      selectHeader.removeAttribute("inert");
    }
  };

  let heroHeaderRaf = null;
  const scheduleHeroMobileHeader = () => {
    if (heroHeaderRaf != null) return;
    heroHeaderRaf = requestAnimationFrame(() => {
      heroHeaderRaf = null;
      updateHeroMobileHeaderHidden();
    });
  };

  window.addEventListener("load", updateHeroMobileHeaderHidden);
  document.addEventListener("scroll", scheduleHeroMobileHeader, { passive: true });
  window.addEventListener("resize", updateHeroMobileHeaderHidden);

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
  const closeMobileNav = () => {
    const navbar = select("#navbar");
    const toggle = select(".mobile-nav-toggle");
    if (!navbar || !navbar.classList.contains("navbar-mobile")) return;
    navbar.classList.remove("navbar-mobile");
    if (toggle) {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
    document.body.classList.remove("mobile-nav-open");
    updateHeroMobileHeaderHidden();
  };

  const openMobileNav = () => {
    const navbar = select("#navbar");
    const toggle = select(".mobile-nav-toggle");
    if (!navbar || !toggle) return;
    /* Body class first so #header drops backdrop-filter/transform before the drawer mounts (fixed positioning uses viewport). */
    document.body.classList.add("mobile-nav-open");
    navbar.classList.add("navbar-mobile");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    updateHeroMobileHeaderHidden();
  };

  window.portfolioCloseMobileNav = closeMobileNav;

  on("click", ".mobile-nav-toggle", function (e) {
    e.preventDefault();
    const navbar = select("#navbar");
    if (navbar.classList.contains("navbar-mobile")) closeMobileNav();
    else openMobileNav();
  });

  on("click", ".mobile-nav-backdrop", function () {
    closeMobileNav();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeMobileNav();
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
          closeMobileNav();
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
  // Preloader: remove when fully loaded; failsafe so slow assets never block UI forever
  let preloader = select("#preloader");
  if (preloader) {
    const hidePreloader = () => {
      if (preloader && preloader.parentNode) preloader.remove();
    };
    window.addEventListener("load", hidePreloader);
    window.setTimeout(hidePreloader, 10000);
  }
  // Lightbox: single instance for both selectors (saves work & memory)
  if (
    typeof GLightbox !== "undefined" &&
    (document.querySelector(".glightbox") ||
      document.querySelector(".portfolio-lightbox"))
  ) {
    GLightbox({
      selector: ".glightbox, .portfolio-lightbox",
    });
  }
  // Portfolio isotope and filter (home page only)
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer && typeof Isotope !== "undefined") {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });
      let portfolioFilters = select("#portfolio-flters li", true);
      const reflowPortfolio = () => {
        portfolioIsotope.layout();
        if (typeof AOS !== "undefined") {
          AOS.refresh();
        }
      };
      portfolioContainer
        .querySelectorAll(".portfolio-item img")
        .forEach(function (img) {
          if (img.complete) return;
          img.addEventListener("load", reflowPortfolio, { once: true });
          img.addEventListener("error", reflowPortfolio, { once: true });
        });
      const syncFilterAria = (activeEl) => {
        portfolioFilters.forEach(function (el) {
          el.classList.remove("filter-active");
          el.setAttribute("aria-pressed", "false");
        });
        activeEl.classList.add("filter-active");
        activeEl.setAttribute("aria-pressed", "true");
      };
      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          syncFilterAria(this);
          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
      on(
        "keydown",
        "#portfolio-flters li",
        function (e) {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          this.click();
        },
        true
      );
    }
  });
  // Portfolio details slider (project detail pages only)
  if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".portfolio-details-slider")
  ) {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    new Swiper(".portfolio-details-slider", {
      speed: reduceMotion ? 0 : 400,
      loop: true,
      autoplay: reduceMotion
        ? false
        : {
            delay: 5000,
            disableOnInteraction: false,
          },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }
  // AOS: start after DOM is ready (faster than waiting for full load)
  function initAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 750,
        easing: "ease-in-out",
        once: true,
        mirror: false,
        offset: 24,
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAOS);
  } else {
    initAOS();
  }
})();

// Tools section swiper (home page only; .slides-1 removed — was unused in markup)
if (typeof Swiper !== "undefined" && document.querySelector(".slides-3")) {
  const reduceMotion3 = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  new Swiper(".slides-3", {
    speed: reduceMotion3 ? 0 : 800,
    loop: true,
    autoplay: reduceMotion3
      ? false
      : {
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
}

window.matchMedia("(min-width: 992px)").addEventListener("change", (e) => {
  if (e.matches && typeof window.portfolioCloseMobileNav === "function") {
    window.portfolioCloseMobileNav();
  }
});

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

// Footer (pages without <footer class="footer"> skip safely)
(function () {
  var footer = document.querySelector(".footer");
  if (!footer) return;
  footer.innerHTML =
    '<div class="container footer-bottom clearfix">' +
    '<nav class="footer-nav" aria-label="Quick links">' +
    '<a href="index.html#hero">Home</a>' +
    '<span class="footer-nav__sep" aria-hidden="true">·</span>' +
    '<a href="index.html#portfolio">Projects</a>' +
    '<span class="footer-nav__sep" aria-hidden="true">·</span>' +
    '<a href="index.html#contact">Contact</a>' +
    "</nav>" +
    '<div class="copyright">' +
    '<span class="reserved"> &copy; Copyright </span>' +
    "<strong><span>Mahmoud AL-Bndkji</span></strong>" +
    "</div>" +
    '<div class="developed">' +
    'Developed with <span title="Thanks For Browsing">&#10084;</span>' +
    "</div>" +
    "</div>";
})();

