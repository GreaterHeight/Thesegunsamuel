(function () {
  "use strict";

  function initMobileNav() {
    document.querySelectorAll(".ss-nav-toggle").forEach(function (toggle) {
      if (toggle.dataset.mobileNavBound === "true") return;
      toggle.dataset.mobileNavBound = "true";

      var header = toggle.closest("[data-global-nav], .ss-global-header, .site-header");
      var nav = header ? header.querySelector(".ss-primary-nav") : null;
      if (!nav) return;

      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        var open = nav.classList.toggle("ss-mobile-open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        document.body.classList.toggle("ss-nav-open", open);
      });
    });

    /* Compatibility with any older page using the non-ss naming. */
    document.querySelectorAll(
      '[data-menu-toggle], [data-mobile-menu-toggle], .menu-toggle, .hamburger, .nav-toggle'
    ).forEach(function (toggle) {
      if (toggle.classList.contains("ss-nav-toggle")) return;
      if (toggle.dataset.mobileNavBound === "true") return;
      toggle.dataset.mobileNavBound = "true";

      var targetSelector = toggle.getAttribute("data-menu-target") ||
        toggle.getAttribute("aria-controls");
      var menu = targetSelector ? document.getElementById(targetSelector) :
        document.querySelector(".ss-primary-nav, .ss-mobile-nav, .mobile-nav, .site-mobile-nav, [data-mobile-menu]");

      if (!menu) return;

      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        var open = menu.classList.toggle("ss-mobile-open") || menu.classList.contains("is-open");
        menu.classList.toggle("is-open", open);
        toggle.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        document.body.classList.toggle("ss-nav-open", open);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav, { once: true });
  } else {
    initMobileNav();
  }
}());
