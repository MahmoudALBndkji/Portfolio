/**
 * English / Arabic language switch.
 * English lives in the markup; an element's Arabic sits next to it in
 * data-ar (innerHTML) and data-ar-<attr> (title, alt, aria-label, content).
 * Persists the choice in localStorage; the head inline script sets lang/dir
 * before paint, this file swaps the text and animates the switch.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var ATTRS = ["title", "alt", "aria-label", "content"];
  var ATTR_SELECTOR = ATTRS.map(function (a) {
    return "[data-ar-" + a + "]";
  }).join(",");
  /* Thumb slide (see .lang-switch__thumb) finishes before the page swaps */
  var THUMB_SLIDE_MS = 280;

  var englishHtml = new WeakMap();
  var englishAttrs = new WeakMap();
  var lang = readLang();

  function readLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
    } catch (e) {
      return "en";
    }
  }

  function storeLang(next) {
    try {
      if (next === "ar") localStorage.setItem(STORAGE_KEY, "ar");
      else localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function reduceMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /** Pick the string for the current language (for text built in JS). */
  function pick(en, ar) {
    return lang === "ar" && ar != null ? ar : en;
  }

  /**
   * Swap every data-ar / data-ar-* under root to the current language.
   * English is captured from the DOM the first time an element is switched,
   * so elements that were never switched are already correct in English.
   */
  function apply(root) {
    var scope = root || document;
    var ar = lang === "ar";

    scope.querySelectorAll("[data-ar]").forEach(function (el) {
      if (ar) {
        if (!englishHtml.has(el)) englishHtml.set(el, el.innerHTML);
        el.innerHTML = el.getAttribute("data-ar");
      } else if (englishHtml.has(el)) {
        el.innerHTML = englishHtml.get(el);
      }
    });

    scope.querySelectorAll(ATTR_SELECTOR).forEach(function (el) {
      var saved = englishAttrs.get(el);
      if (!saved) {
        if (!ar) return;
        saved = {};
        ATTRS.forEach(function (a) {
          if (el.hasAttribute("data-ar-" + a)) saved[a] = el.getAttribute(a);
        });
        englishAttrs.set(el, saved);
      }
      Object.keys(saved).forEach(function (a) {
        var v = ar ? el.getAttribute("data-ar-" + a) : saved[a];
        if (v == null) el.removeAttribute(a);
        else el.setAttribute(a, v);
      });
    });
  }

  function setLang(next, onSwapped) {
    function swap() {
      lang = next;
      storeLang(next);
      var root = document.documentElement;
      root.setAttribute("lang", next);
      root.setAttribute("dir", next === "ar" ? "rtl" : "ltr");
      apply(document);
      if (onSwapped) onSwapped();
      document.dispatchEvent(
        new CustomEvent("portfolio:langchange", { detail: { lang: next } })
      );
    }

    if (reduceMotion()) {
      swap();
    } else if (document.startViewTransition) {
      /* Cross-fade the whole page from one layout direction to the other */
      document.startViewTransition(swap);
    } else {
      /* No View Transitions: quick fade out, swap, fade back in */
      var root = document.documentElement;
      root.classList.add("lang-fading");
      window.setTimeout(function () {
        swap();
        requestAnimationFrame(function () {
          root.classList.remove("lang-fading");
        });
      }, 160);
    }
  }

  /**
   * Header switches are injected late on detail pages, so delegate from
   * document (same approach as theme-switcher.js).
   */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-switch");
    if (!btn) return;
    if (btn.classList.contains("is-to-ar") || btn.classList.contains("is-to-en"))
      return;
    var next = lang === "ar" ? "en" : "ar";
    var pending = next === "ar" ? "is-to-ar" : "is-to-en";
    btn.classList.add(pending);
    try {
      if (typeof buttonAudio !== "undefined" && buttonAudio && buttonAudio.play)
        buttonAudio.play();
    } catch (err) {}
    window.setTimeout(
      function () {
        setLang(next, function () {
          btn.classList.remove(pending);
        });
      },
      reduceMotion() ? 0 : THUMB_SLIDE_MS
    );
  });

  window.portfolioI18n = {
    lang: function () {
      return lang;
    },
    pick: pick,
    apply: apply,
  };

  /* Deferred script: the DOM is parsed, so static pages can switch now */
  if (lang === "ar") apply(document);
})();
