(function () {
  "use strict";

  function initMobileNav() {
    var toggles = document.querySelectorAll(
      '[data-menu-toggle], [data-mobile-menu-toggle], .menu-toggle, .hamburger, .nav-toggle'
    );

    toggles.forEach(function (toggle) {
      if (toggle.dataset.mobileNavBound === "true") return;
      toggle.dataset.mobileNavBound = "true";

      toggle.addEventListener("click", function (event) {
        event.preventDefault();

        var targetSelector =
          toggle.getAttribute("data-menu-target") ||
          toggle.getAttribute("aria-controls");

        var menu = targetSelector ? document.getElementById(targetSelector) : null;

        if (!menu) {
          menu = document.querySelector(
            '.ss-mobile-nav, .mobile-nav, .site-mobile-nav, [data-mobile-menu]'
          );
        }

        if (!menu) return;

        var open = !menu.classList.contains("is-open");
        menu.classList.toggle("is-open", open);
        toggle.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        document.body.classList.toggle("nav-open", open);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileNav, { once: true });
  } else {
    initMobileNav();
  }
}());
