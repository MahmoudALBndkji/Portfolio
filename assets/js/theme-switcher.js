/**
 * Light / dark / system theme. Default = system (prefers-color-scheme).
 * Persists choice in localStorage; head inline script applies saved value before paint.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-color-scheme-pref";
  var mql = window.matchMedia("(prefers-color-scheme: dark)");

  function getPreference() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === "light" || v === "dark" || v === "system") return v;
    } catch (e) {}
    return "system";
  }

  function setPreference(pref) {
    try {
      if (pref === "system") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, pref);
    } catch (e) {}
  }

  function resolvedScheme() {
    var pref = getPreference();
    if (pref === "light" || pref === "dark") return pref;
    return mql.matches ? "dark" : "light";
  }

  function applyDocumentScheme() {
    var pref = getPreference();
    var root = document.documentElement;
    if (pref === "light" || pref === "dark") {
      root.setAttribute("data-color-scheme", pref);
    } else {
      root.removeAttribute("data-color-scheme");
    }
    root.setAttribute("data-theme-pref", pref);
    updateMetaThemeColor();
    syncUi();
  }

  function updateMetaThemeColor() {
    var resolved = resolvedScheme();
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    var prop = resolved === "dark" ? "--theme-meta-dark" : "--theme-meta-light";
    var v = getComputedStyle(document.documentElement)
      .getPropertyValue(prop)
      .trim();
    meta.setAttribute(
      "content",
      v || (resolved === "dark" ? "#0f172a" : "#e8f4fb")
    );
  }

  function syncUi() {
    var pref = getPreference();
    var root = document.getElementById("theme-switcher");
    if (!root) return;
    var buttons = root.querySelectorAll("[data-set-theme]");
    buttons.forEach(function (btn) {
      var t = btn.getAttribute("data-set-theme");
      var active = t === pref;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function init() {
    applyDocumentScheme();
    mql.addEventListener("change", function () {
      if (getPreference() === "system") {
        updateMetaThemeColor();
      }
    });
  }

  /**
   * Detail pages inject #theme-switcher after fetch, so it is missing on DOMContentLoaded.
   * Delegate clicks from document so the control works on any page and after late inject.
   */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-set-theme]");
    if (!btn) return;
    var switcher = document.getElementById("theme-switcher");
    if (!switcher || !switcher.contains(btn)) return;
    var next = btn.getAttribute("data-set-theme");
    if (next !== "light" && next !== "dark" && next !== "system") return;
    setPreference(next);
    applyDocumentScheme();
    try {
      if (typeof buttonAudio !== "undefined" && buttonAudio && buttonAudio.play)
        buttonAudio.play();
    } catch (err) {}
  });

  window.__portfolioTheme = { refresh: applyDocumentScheme };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
