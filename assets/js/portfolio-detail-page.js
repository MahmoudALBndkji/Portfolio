/**
 * Portfolio project detail pages: loads shared layout + content from
 * assets/data/portfolio-details.json. Each *_details.html sets
 * window.__PORTFOLIO_DETAIL_ID__ then loads this script before main.js.
 */
(function () {
  "use strict";

  var CV_HREF =
    "https://www.mediafire.com/file/6m5d0big9xfqwv3/CV_-_Mahmoud_AL_Bndkji%25282%2529.pdf/file";

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var THEME_SWITCHER_HTML =
    '<div class="theme-switcher" id="theme-switcher" role="group" aria-label="Color theme">' +
    '<button type="button" class="theme-switcher__btn" data-set-theme="system" title="Match system theme" aria-pressed="false">' +
    '<i class="bi bi-circle-half" aria-hidden="true"></i><span class="visually-hidden">System</span></button>' +
    '<button type="button" class="theme-switcher__btn" data-set-theme="light" title="Light theme" aria-pressed="false">' +
    '<i class="bi bi-sun-fill" aria-hidden="true"></i><span class="visually-hidden">Light</span></button>' +
    '<button type="button" class="theme-switcher__btn" data-set-theme="dark" title="Dark theme" aria-pressed="false">' +
    '<i class="bi bi-moon-stars-fill" aria-hidden="true"></i><span class="visually-hidden">Dark</span></button>' +
    "</div>";

  function storeButtonMarkup(btn) {
    var cls =
      {
        apple: "market-btn apple-btn",
        google: "market-btn google-btn",
        github: "market-btn github-btn",
        drive: "market-btn googl-drive-btn",
        website: "market-btn website-btn",
      }[btn.variant] || "market-btn website-btn";
    var sub = escapeHtml(btn.subtitle || "");
    var tit = escapeHtml(btn.title || "");
    return (
      '<a href="' +
      escapeHtml(btn.href) +
      '" target="_blank" class="' +
      cls +
      '" role="button">' +
      '<span class="market-button-subtitle">' +
      sub +
      "</span>" +
      '<span class="market-button-title">' +
      tit +
      "</span>" +
      "</a>"
    );
  }

  function renderChrome(data) {
    return (
      '<header id="header" class="header fixed-top header-inner-pages" aria-label="Header">' +
      '<div class="container d-flex align-items-center">' +
      '<a href="index.html">' +
      '<h1 class="logo me-auto" title="logo">' +
      '<img src="assets/img/hero_scetion/leftTag.png" alt="" loading="lazy" />' +
      '<a href="index.html">Mahmoud</a>' +
      '<a href="index.html">' +
      '<img src="assets/img/hero_scetion/rightTag.png" alt="" loading="lazy" />' +
      "</a>" +
      "</h1>" +
      "</a>" +
      '<div class="header-actions">' +
      '<nav id="navbar" class="navbar" aria-label="Navbar">' +
      '<div class="mobile-nav-backdrop" aria-hidden="true"></div>' +
      '<ul id="primary-navigation">' +
      '<li title="Home" onclick="buttonAudio.play();">' +
      '<a class="nav-link scrollto active" href="index.html#hero">Home</a>' +
      "</li>" +
      '<li title="About" onclick="buttonAudio.play();">' +
      '<a class="nav-link scrollto" href="index.html#about">About</a>' +
      "</li>" +
      '<li title="Projects" onclick="buttonAudio.play();">' +
      '<a class="nav-link scrollto" href="index.html#portfolio">Projects</a>' +
      "</li>" +
      '<li title="Tools" onclick="buttonAudio.play();">' +
      '<a class="nav-link scrollto" href="index.html#tools">Tools</a>' +
      "</li>" +
      '<li title="Contact" onclick="buttonAudio.play();">' +
      '<a class="nav-link scrollto" href="index.html#contact">Contact</a>' +
      "</li>" +
      '<li title="Download CV" id="list-download-cv">' +
      '<a class="nav-link scrollto" href="' +
      escapeHtml(CV_HREF) +
      '" target="_blank">Download CV</a>' +
      "</li>" +
      "</ul>" +
      '<button type="button" class="mobile-nav-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open menu">' +
      '<span class="mobile-nav-toggle__box" aria-hidden="true">' +
      '<span class="mobile-nav-toggle__bar"></span>' +
      '<span class="mobile-nav-toggle__bar"></span>' +
      '<span class="mobile-nav-toggle__bar"></span>' +
      "</span></button></nav>" +
      THEME_SWITCHER_HTML +
      "</div>" +
      "</div>" +
      "</header>" +
      '<main id="main">' +
      '<section id="breadcrumbs" class="breadcrumbs">' +
      '<div class="container">' +
      "<ol>" +
      '<li title="Home"><a href="index.html#hero">Home</a></li>' +
      "<li>" +
      escapeHtml(data.breadcrumbLabel) +
      "</li>" +
      "</ol>" +
      "<h2>" +
      escapeHtml(data.pageHeading) +
      "</h2>" +
      "</div>" +
      "</section>" +
      '<section id="portfolio-details" class="portfolio-details" aria-label="Portfolio Details">' +
      '<div class="container">' +
      '<div class="row gy-4">' +
      '<div class="col-lg-8">' +
      '<div class="portfolio-details-slider swiper">' +
      '<div class="swiper-wrapper align-items-center">' +
      renderSlides(data.gallery || []) +
      "</div>" +
      '<div class="swiper-pagination"></div>' +
      "</div>" +
      "</div>" +
      '<div class="col-lg-4">' +
      '<div class="portfolio-info">' +
      (data.category
        ? '<p class="project-chip">' + escapeHtml(data.category) + "</p>"
        : "") +
      "<h3>Project information</h3>" +
      "<ul>" +
      renderInfoList(data) +
      "</ul>" +
      "</div>" +
      renderTechBlock(data) +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>" +
      '<footer id="footer" class="footer" aria-label="Footer"></footer>' +
      '<div id="preloader"></div>' +
      '<a onclick="buttonAudio.play();" href="#" title="Up" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>'
    );
  }

  function renderSlides(gallery) {
    return gallery
      .map(function (item) {
        var title = escapeHtml(item.title);
        var src = escapeHtml(item.src);
        var alt = escapeHtml(item.alt || item.title);
        return (
          '<div class="swiper-slide">' +
          '<a onclick="buttonAudio.play();" title="' +
          title +
          '" href="' +
          src +
          '" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link">' +
          '<img src="' +
          src +
          '" alt="' +
          alt +
          '" loading="lazy" /></a>' +
          "</div>"
        );
      })
      .join("");
  }

  function renderInfoList(data) {
    var html = "";
    html +=
      "<li><strong>Category </strong>:&nbsp; " +
      escapeHtml(data.category) +
      "</li>";
    html +=
      "<li><strong>Project date </strong>:&nbsp; " +
      escapeHtml(data.projectDate) +
      "</li>";

    if (data.analyzing) {
      var an = data.analyzing;
      html +=
        "<li>" +
        "<strong>" +
        escapeHtml(an.labelStrong || "Project Analyzing ") +
        "</strong>:&nbsp;" +
        '<a title="' +
        escapeHtml(an.linkTitle || "") +
        '" href="' +
        escapeHtml(an.href) +
        '" target="_blank">' +
        '<i class="bi bi-' +
        escapeHtml(an.icon || "diagram-3") +
        '" title="Diagram" style="font-size: 20px"></i>' +
        "<span>" +
        escapeHtml(an.linkText || "Diagrams") +
        "</span>" +
        "</a>" +
        "</li>";
    }

    html +=
      '<li id="description"><strong>Description </strong>:&nbsp; ' +
      (data.descriptionHtml || "") +
      "</li>";

    if (data.teamMembers != null && data.teamMembers !== "") {
      html +=
        "<li><strong>Team members</strong>:&nbsp; " +
        escapeHtml(data.teamMembers) +
        "</li>";
    }

    if (data.projectUrl && data.projectUrl.href) {
      var pu = data.projectUrl;
      html +=
        "<li>" +
        "<strong>Project URL </strong>:&nbsp;" +
        '<a title="' +
        escapeHtml(pu.title || "Source Code") +
        '" href="' +
        escapeHtml(pu.href) +
        '" target="_blank">' +
        '<i class="bi bi-' +
        escapeHtml(pu.icon || "github") +
        '" title="GitHub" style="font-size: 20px"></i>' +
        "<span>" +
        escapeHtml(pu.text || "GitHub") +
        "</span>" +
        "</a>" +
        "</li>";
    }

    if (data.downloadButton && data.downloadButton.href) {
      var db = data.downloadButton;
      html +=
        '<a class="btn-get-started" href="' +
        escapeHtml(db.href) +
        '" target="_blank" title="' +
        escapeHtml(db.title || "Download") +
        '">' +
        escapeHtml(db.text || "Download") +
        "</a>";
    }

    if (data.storeButtons && data.storeButtons.length) {
      html += data.storeButtons.map(storeButtonMarkup).join("");
    }

    return html;
  }

  function renderTechBlock(data) {
    var tech = data.technologies;
    if (!tech || !tech.length) return "";
    var title =
      data.technologiesTitle || "Languages and Technologies used";
    var items = tech
      .map(function (t) {
        return "<li><strong>" + escapeHtml(t) + "</strong></li>";
      })
      .join("");
    return (
      '<div class="portfolio-info">' +
      "<h3>" +
      escapeHtml(title) +
      "</h3>" +
      "<ol>" +
      items +
      "</ol>" +
      "</div>"
    );
  }

  function upsertMeta(attrName, attrValue, content) {
    if (content == null || content === "") return;
    var el = document.querySelector(
      "meta[" + attrName + '="' + attrValue + '"]'
    );
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function absoluteUrl(path) {
    try {
      return new URL(path, window.location.href).href;
    } catch (e) {
      return path;
    }
  }

  function applyHeadMeta(data) {
    if (data.metaTitle) {
      document.title = data.metaTitle;
    }
    var mDesc = document.querySelector('meta[name="description"]');
    if (mDesc && data.metaDescription) {
      mDesc.setAttribute("content", data.metaDescription);
    }
    var mKey = document.querySelector('meta[name="keywords"]');
    if (mKey && data.metaKeywords) {
      mKey.setAttribute("content", data.metaKeywords);
    }
    var icon = data.favicon || "assets/img/logo/mainPage.png";
    document
      .querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]')
      .forEach(function (link) {
        link.setAttribute("href", icon);
      });

    var ogTitle = data.metaTitle || document.title;
    var ogDesc = data.metaDescription || "";
    var ogImgSrc =
      data.ogImage ||
      (data.gallery && data.gallery[0] && data.gallery[0].src) ||
      icon;
    upsertMeta("property", "og:type", "article");
    upsertMeta("property", "og:title", ogTitle);
    upsertMeta("property", "og:description", ogDesc);
    upsertMeta("property", "og:image", absoluteUrl(ogImgSrc));
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", ogTitle);
    upsertMeta("name", "twitter:description", ogDesc);
    upsertMeta("name", "twitter:image", absoluteUrl(ogImgSrc));
  }

  function showError(root, message) {
    root.innerHTML =
      '<div class="container py-5"><p class="text-danger">' +
      escapeHtml(message) +
      "</p></div>";
  }

  function ensureShellForMainJs() {
    if (!document.querySelector("footer#footer.footer")) {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<footer id="footer" class="footer" aria-label="Footer"></footer>' +
          '<div id="preloader"></div>' +
          '<a onclick="buttonAudio.play();" href="#" title="Up" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>'
      );
    }
  }

  function loadMainJs() {
    var s = document.createElement("script");
    s.src = "assets/js/main.js";
    document.body.appendChild(s);
  }

  function boot() {
    var root = document.getElementById("portfolio-detail-root");
    if (!root) {
      console.error("portfolio-detail-page: missing #portfolio-detail-root");
      return;
    }

    var id = window.__PORTFOLIO_DETAIL_ID__;
    if (!id) {
      showError(root, "Missing window.__PORTFOLIO_DETAIL_ID__.");
      ensureShellForMainJs();
      loadMainJs();
      return;
    }

    fetch("assets/data/portfolio-details.json", { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(function (db) {
        var data = db[id];
        if (!data) {
          showError(root, 'Unknown project id "' + id + '".');
          ensureShellForMainJs();
          loadMainJs();
          return;
        }
        applyHeadMeta(data);
        root.outerHTML = renderChrome(data);
        if (window.__portfolioTheme && window.__portfolioTheme.refresh) {
          window.__portfolioTheme.refresh();
        }
        loadMainJs();
      })
      .catch(function (err) {
        showError(
          root,
          "Could not load project data. Open this site via http(s), not file:// — " +
            (err && err.message ? err.message : "error")
        );
        ensureShellForMainJs();
        loadMainJs();
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
