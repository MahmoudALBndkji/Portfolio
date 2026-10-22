/**
 * Portfolio project detail pages: loads shared layout + content from
 * assets/data/portfolio-details.json. Each *_details.html sets
 * window.__PORTFOLIO_DETAIL_ID__ then loads this script before main.js.
 * Text is rendered in English with its Arabic in data-ar / data-ar-*
 * (project Arabic comes from data.ar); i18n.js swaps it.
 */
(function () {
  "use strict";

  var CV_HREF = "assets/cv/Mahmoud-AL-Bndkji-CV.pdf";
  var CV_FILE_NAME = "CV - Mahmoud AL Bndkji.pdf";

  /* Store button labels shared by every project */
  var STORE_AR = {
    "Download on the": "حمّله من",
    "Get It On": "احصل عليه من",
    "Get It From": "احصل عليه من",
    "Explore On": "تصفّحه على",
    "Get Source Code": "الكود المصدري على",
    "Web Browser": "متصفح الويب",
  };

  var DOWNLOAD_AR = {
    Download: "تحميل",
    "Download For Android": "تحميل لنظام Android",
  };

  function escapeHtml(s) {
    if (s == null) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** data-ar="…" for an element's Arabic innerHTML (empty when none) */
  function arText(s) {
    return s == null || s === "" ? "" : ' data-ar="' + escapeHtml(s) + '"';
  }

  /** data-ar-<name>="…" for an Arabic attribute value */
  function arAttr(name, s) {
    return s == null || s === ""
      ? ""
      : " data-ar-" + name + '="' + escapeHtml(s) + '"';
  }

  function tr(en, ar) {
    return window.portfolioI18n ? window.portfolioI18n.pick(en, ar) : en;
  }

  var LANG_SWITCH_HTML =
    '<button type="button" class="lang-switch" title="العربية" data-ar-title="English" aria-label="Switch to Arabic" data-ar-aria-label="التبديل إلى الإنجليزية">' +
    '<span class="lang-switch__thumb" aria-hidden="true"></span>' +
    '<span class="lang-switch__opt lang-switch__opt--en" lang="en" aria-hidden="true">EN</span>' +
    '<span class="lang-switch__opt lang-switch__opt--ar" lang="ar" aria-hidden="true">ع</span>' +
    "</button>";

  var THEME_SWITCHER_HTML =
    '<div class="theme-switcher" id="theme-switcher" role="group" aria-label="Color theme"' +
    arAttr("aria-label", "سمة الألوان") +
    ">" +
    '<button type="button" class="theme-switcher__btn" data-set-theme="system" title="Match system theme"' +
    arAttr("title", "مطابقة سمة النظام") +
    ' aria-pressed="false">' +
    '<i class="bi bi-circle-half" aria-hidden="true"></i><span class="visually-hidden"' +
    arText("النظام") +
    ">System</span></button>" +
    '<button type="button" class="theme-switcher__btn" data-set-theme="light" title="Light theme"' +
    arAttr("title", "السمة الفاتحة") +
    ' aria-pressed="false">' +
    '<i class="bi bi-sun-fill" aria-hidden="true"></i><span class="visually-hidden"' +
    arText("فاتح") +
    ">Light</span></button>" +
    '<button type="button" class="theme-switcher__btn" data-set-theme="dark" title="Dark theme"' +
    arAttr("title", "السمة الداكنة") +
    ' aria-pressed="false">' +
    '<i class="bi bi-moon-stars-fill" aria-hidden="true"></i><span class="visually-hidden"' +
    arText("داكن") +
    ">Dark</span></button>" +
    "</div>";

  var BACK_TO_TOP_HTML =
    '<a onclick="buttonAudio.play();" href="#" title="Up"' +
    arAttr("title", "للأعلى") +
    ' class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>';

  function navItem(href, en, ar, extraLi) {
    return (
      '<li title="' +
      en +
      '"' +
      arAttr("title", ar) +
      (extraLi || ' onclick="buttonAudio.play();"') +
      ">" +
      '<a class="nav-link scrollto' +
      (href === "index.html#hero" ? " active" : "") +
      '" href="' +
      escapeHtml(href) +
      '"' +
      (href === CV_HREF ? ' download="' + escapeHtml(CV_FILE_NAME) + '"' : "") +
      arText(ar) +
      ">" +
      en +
      "</a>" +
      "</li>"
    );
  }

  function storeButtonMarkup(btn) {
    var cls =
      {
        apple: "market-btn apple-btn",
        google: "market-btn google-btn",
        github: "market-btn github-btn",
        drive: "market-btn googl-drive-btn",
        website: "market-btn website-btn",
        microsoft: "market-btn microsoft-btn",
      }[btn.variant] || "market-btn website-btn";
    var sub = escapeHtml(btn.subtitle || "");
    var tit = escapeHtml(btn.title || "");
    return (
      '<a href="' +
      escapeHtml(btn.href) +
      '" target="_blank" class="' +
      cls +
      '" role="button">' +
      '<span class="market-button-subtitle"' +
      arText(STORE_AR[btn.subtitle]) +
      ">" +
      sub +
      "</span>" +
      '<span class="market-button-title"' +
      arText(STORE_AR[btn.title]) +
      ">" +
      tit +
      "</span>" +
      "</a>"
    );
  }

  function renderChrome(data) {
    var ar = data.ar || {};
    return (
      '<header id="header" class="header fixed-top header-inner-pages" aria-label="Header"' +
      arAttr("aria-label", "الترويسة") +
      ">" +
      '<div class="container d-flex align-items-center">' +
      '<a href="index.html">' +
      '<h1 class="logo me-auto" title="logo"' +
      arAttr("title", "الشعار") +
      ">" +
      '<img src="assets/img/hero_scetion/leftTag.png" alt="" loading="lazy" />' +
      '<a href="index.html">Mahmoud</a>' +
      '<a href="index.html">' +
      '<img src="assets/img/hero_scetion/rightTag.png" alt="" loading="lazy" />' +
      "</a>" +
      "</h1>" +
      "</a>" +
      '<div class="header-actions">' +
      '<nav id="navbar" class="navbar" aria-label="Navbar"' +
      arAttr("aria-label", "التنقل الرئيسي") +
      ">" +
      '<div class="mobile-nav-backdrop" aria-hidden="true"></div>' +
      '<ul id="primary-navigation">' +
      navItem("index.html#hero", "Home", "الرئيسية") +
      navItem("index.html#about", "About", "نبذة عني") +
      navItem("index.html#portfolio", "Projects", "المشاريع") +
      navItem("index.html#tools", "Tools", "الأدوات") +
      navItem("index.html#contact", "Contact", "تواصل") +
      navItem(
        CV_HREF,
        "Download CV",
        "تحميل السيرة الذاتية",
        ' id="list-download-cv"'
      ) +
      "</ul>" +
      '<button type="button" class="mobile-nav-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="' +
      tr("Open menu", "فتح القائمة") +
      '">' +
      '<span class="mobile-nav-toggle__box" aria-hidden="true">' +
      '<span class="mobile-nav-toggle__bar"></span>' +
      '<span class="mobile-nav-toggle__bar"></span>' +
      '<span class="mobile-nav-toggle__bar"></span>' +
      "</span></button></nav>" +
      LANG_SWITCH_HTML +
      THEME_SWITCHER_HTML +
      "</div>" +
      "</div>" +
      "</header>" +
      '<main id="main">' +
      '<section id="breadcrumbs" class="breadcrumbs">' +
      '<div class="container">' +
      "<ol>" +
      '<li title="Home"' +
      arAttr("title", "الرئيسية") +
      '><a href="index.html#hero"' +
      arText("الرئيسية") +
      ">Home</a></li>" +
      "<li" +
      arText(ar.breadcrumbLabel) +
      ">" +
      escapeHtml(data.breadcrumbLabel) +
      "</li>" +
      "</ol>" +
      "<h2" +
      arText(ar.pageHeading) +
      ">" +
      escapeHtml(data.pageHeading) +
      "</h2>" +
      "</div>" +
      "</section>" +
      '<section id="portfolio-details" class="portfolio-details" aria-label="Portfolio Details"' +
      arAttr("aria-label", "تفاصيل المشروع") +
      ">" +
      '<div class="container">' +
      '<div class="row gy-4">' +
      '<div class="col-lg-8">' +
      /* Images only: keep the slider LTR so a language switch can't break it */
      '<div class="portfolio-details-slider swiper" dir="ltr">' +
      '<div class="swiper-wrapper align-items-center">' +
      renderSlides(data.gallery || [], ar.gallery || []) +
      "</div>" +
      '<div class="swiper-pagination"></div>' +
      "</div>" +
      "</div>" +
      '<div class="col-lg-4">' +
      '<div class="portfolio-info">' +
      (data.category
        ? '<p class="project-chip"' +
          arText(ar.category) +
          ">" +
          escapeHtml(data.category) +
          "</p>"
        : "") +
      "<h3" +
      arText("معلومات المشروع") +
      ">Project information</h3>" +
      "<ul>" +
      renderInfoList(data, ar) +
      "</ul>" +
      "</div>" +
      renderTechBlock(data, ar) +
      "</div>" +
      "</div>" +
      "</div>" +
      "</section>" +
      "</main>" +
      '<footer id="footer" class="footer" aria-label="Footer"' +
      arAttr("aria-label", "التذييل") +
      "></footer>" +
      '<div id="preloader"></div>' +
      BACK_TO_TOP_HTML
    );
  }

  function renderSlides(gallery, galleryAr) {
    return gallery
      .map(function (item, i) {
        var title = escapeHtml(item.title);
        var src = escapeHtml(item.src);
        var alt = escapeHtml(item.alt || item.title);
        return (
          '<div class="swiper-slide">' +
          '<a onclick="buttonAudio.play();" title="' +
          title +
          '"' +
          arAttr("title", galleryAr[i]) +
          ' href="' +
          src +
          '" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link">' +
          '<img src="' +
          src +
          '" alt="' +
          alt +
          '"' +
          arAttr("alt", galleryAr[i]) +
          ' loading="lazy" /></a>' +
          "</div>"
        );
      })
      .join("");
  }

  /** <strong>Label </strong>:&nbsp; value — label and value each carry their Arabic */
  function infoItem(labelEn, labelAr, valueHtml, valueArHtml, liAttrs) {
    return (
      "<li" +
      (liAttrs || "") +
      "><strong" +
      arText(labelAr) +
      ">" +
      labelEn +
      "</strong>:&nbsp; " +
      "<span" +
      arText(valueArHtml) +
      ">" +
      valueHtml +
      "</span>" +
      "</li>"
    );
  }

  function renderInfoList(data, ar) {
    var html = "";
    html += infoItem(
      "Category ",
      "الفئة ",
      escapeHtml(data.category),
      ar.category && escapeHtml(ar.category)
    );
    html += infoItem(
      "My work period ",
      "فترة عملي على المشروع ",
      escapeHtml(data.projectDate),
      ar.projectDate && escapeHtml(ar.projectDate)
    );

    if (data.analyzing) {
      var an = data.analyzing;
      html +=
        "<li>" +
        "<strong" +
        arText("تحليل المشروع ") +
        ">" +
        escapeHtml(an.labelStrong || "Project Analyzing ") +
        "</strong>:&nbsp;" +
        '<a title="' +
        escapeHtml(an.linkTitle || "") +
        '"' +
        arAttr("title", "تحليل المشروع") +
        ' href="' +
        escapeHtml(an.href) +
        '" target="_blank">' +
        '<i class="bi bi-' +
        escapeHtml(an.icon || "diagram-3") +
        '" title="Diagram"' +
        arAttr("title", "مخطط") +
        ' style="font-size: 20px"></i>' +
        "<span" +
        arText("المخططات") +
        ">" +
        escapeHtml(an.linkText || "Diagrams") +
        "</span>" +
        "</a>" +
        "</li>";
    }

    html += infoItem(
      "Description ",
      "الوصف ",
      data.descriptionHtml || "",
      ar.descriptionHtml,
      ' id="description"'
    );

    if (data.teamMembers != null && data.teamMembers !== "") {
      html += infoItem(
        "Team members",
        "أعضاء الفريق",
        escapeHtml(data.teamMembers),
        null
      );
    }

    if (data.projectUrl && data.projectUrl.href) {
      var pu = data.projectUrl;
      html +=
        "<li>" +
        "<strong" +
        arText("رابط المشروع ") +
        ">Project URL </strong>:&nbsp;" +
        '<a title="' +
        escapeHtml(pu.title || "Source Code") +
        '"' +
        arAttr("title", "الكود المصدري") +
        ' href="' +
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
      var dbTitle = db.title || "Download";
      var dbText = db.text || "Download";
      html +=
        '<a class="btn-get-started" href="' +
        escapeHtml(db.href) +
        '" target="_blank" title="' +
        escapeHtml(dbTitle) +
        '"' +
        arAttr("title", DOWNLOAD_AR[dbTitle]) +
        arText(DOWNLOAD_AR[dbText]) +
        ">" +
        escapeHtml(dbText) +
        "</a>";
    }

    if (data.storeButtons && data.storeButtons.length) {
      html +=
        '<li class="store-buttons">' +
        data.storeButtons.map(storeButtonMarkup).join("") +
        "</li>";
    }

    return html;
  }

  function renderTechBlock(data, ar) {
    var tech = data.technologies;
    if (!tech || !tech.length) return "";
    var techAr = ar.technologies || [];
    var title =
      data.technologiesTitle || "Languages and Technologies used";
    var items = tech
      .map(function (t, i) {
        return (
          "<li><strong" +
          (techAr[i] !== t ? arText(techAr[i]) : "") +
          ">" +
          escapeHtml(t) +
          "</strong></li>"
        );
      })
      .join("");
    return (
      '<div class="portfolio-info">' +
      "<h3" +
      arText(ar.technologiesTitle) +
      ">" +
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
    var ar = data.ar || {};
    var titleEl = document.querySelector("title");
    if (data.metaTitle) {
      document.title = data.metaTitle;
      if (titleEl && ar.metaTitle) titleEl.setAttribute("data-ar", ar.metaTitle);
    }
    var mDesc = document.querySelector('meta[name="description"]');
    if (mDesc && data.metaDescription) {
      mDesc.setAttribute("content", data.metaDescription);
      if (ar.metaDescription)
        mDesc.setAttribute("data-ar-content", ar.metaDescription);
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
        '<footer id="footer" class="footer" aria-label="Footer"' +
          arAttr("aria-label", "التذييل") +
          "></footer>" +
          '<div id="preloader"></div>' +
          BACK_TO_TOP_HTML
      );
    }
  }

  function applyLanguage() {
    if (window.portfolioI18n) window.portfolioI18n.apply(document);
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
      applyLanguage();
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
          showError(
            root,
            tr("Unknown project id", "معرّف مشروع غير معروف") + ' "' + id + '".'
          );
          ensureShellForMainJs();
          applyLanguage();
          loadMainJs();
          return;
        }
        applyHeadMeta(data);
        root.outerHTML = renderChrome(data);
        if (window.__portfolioTheme && window.__portfolioTheme.refresh) {
          window.__portfolioTheme.refresh();
        }
        applyLanguage();
        loadMainJs();
      })
      .catch(function (err) {
        showError(
          root,
          tr(
            "Could not load project data. Open this site via http(s), not file:// — ",
            "تعذّر تحميل بيانات المشروع. افتح الموقع عبر http(s) وليس file:// — "
          ) + (err && err.message ? err.message : "error")
        );
        ensureShellForMainJs();
        applyLanguage();
        loadMainJs();
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
