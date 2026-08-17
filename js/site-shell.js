/* Segun Samuel — shared site shell
 * Injects the canonical global navigation for legacy utility/experience pages
 * that expose <nav data-site-nav></nav>.
 */
(function () {
  "use strict";

  function init() {
    var mount = document.querySelector("[data-site-nav]");
    if (!mount || mount.dataset.siteShellReady === "true") return;

    mount.dataset.siteShellReady = "true";
    mount.outerHTML = `
<header class="site-header ss-global-header" data-global-nav="">
  <div class="container ss-nav-container">
    <a aria-label="SegunSamuel Home" class="brand ss-brand" href="/Thesegunsamuel/index.html">
      <img class="ss-brand-mark" src="/Thesegunsamuel/assets/images/segunsamuel-logo.png" alt="" aria-hidden="true">
      <span class="ss-brand-wordmark">SEGUN <span>SAMUEL</span></span>
    </a>
    <button aria-expanded="false" aria-label="Open navigation" class="ss-nav-toggle" type="button">
      <span></span><span></span><span></span>
    </button>
    <nav aria-label="Primary navigation" class="ss-primary-nav">
      <a href="/Thesegunsamuel/index.html">HOME</a>
      <div class="ss-nav-group">
        <button class="ss-nav-group-toggle" type="button" aria-haspopup="true" aria-expanded="false">LEARN <span aria-hidden="true">⌄</span></button>
        <div class="ss-nav-dropdown">
          <a href="/Thesegunsamuel/courses/">COURSES</a>
          <a href="/Thesegunsamuel/learning-paths/">LEARNING PATHS</a>
          <a href="/Thesegunsamuel/masterclasses/">MASTERCLASSES</a>
        </div>
      </div>
      <div class="ss-nav-group">
        <button class="ss-nav-group-toggle" type="button" aria-haspopup="true" aria-expanded="false">THINK <span aria-hidden="true">⌄</span></button>
        <div class="ss-nav-dropdown">
          <a href="/Thesegunsamuel/frameworks/">FRAMEWORKS</a>
          <a href="/Thesegunsamuel/models/">MODELS &amp; PRINCIPLES</a>
          <a href="/Thesegunsamuel/books/">BOOKS</a>
          <a href="/Thesegunsamuel/articles/">INSIGHTS</a>
        </div>
      </div>
      <div class="ss-nav-group">
        <button class="ss-nav-group-toggle" type="button" aria-haspopup="true" aria-expanded="false">APPLY <span aria-hidden="true">⌄</span></button>
        <div class="ss-nav-dropdown">
          <a href="/Thesegunsamuel/case-studies/">CASE STUDIES</a>
          <a href="/Thesegunsamuel/application/">APPLICATIONS</a>
          <a href="/Thesegunsamuel/events/">EVENTS</a>
        </div>
      </div>
      <a href="/Thesegunsamuel/podcast/">LISTEN</a>
      <a href="/Thesegunsamuel/explore/">EXPLORE</a>
    </nav>
    <div class="ss-nav-actions">
      <a class="ss-search-link" href="/Thesegunsamuel/search/" aria-label="Search the Segun Samuel knowledge ecosystem">SEARCH</a>
      <a href="/Thesegunsamuel/student/">STUDENT AREA</a>
      <a class="ss-cart-link" href="/Thesegunsamuel/cart/">CART <span data-cart-count>0</span></a>
    </div>
  </div>
</header>`;

    var header = document.querySelector("[data-global-nav]");
    if (!header) return;

    var menuButton = header.querySelector(".ss-nav-toggle");
    var nav = header.querySelector(".ss-primary-nav");

    if (menuButton && nav) {
      menuButton.addEventListener("click", function () {
        var open = nav.classList.toggle("ss-mobile-open");
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        document.body.classList.toggle("ss-nav-open", open);
      });
    }

    header.querySelectorAll(".ss-nav-group-toggle").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        var group = button.closest(".ss-nav-group");
        var isOpen = group.classList.contains("ss-open");

        header.querySelectorAll(".ss-nav-group.ss-open").forEach(function (item) {
          item.classList.remove("ss-open");
          var toggle = item.querySelector(".ss-nav-group-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          group.classList.add("ss-open");
          button.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".ss-nav-group")) {
        header.querySelectorAll(".ss-nav-group.ss-open").forEach(function (item) {
          item.classList.remove("ss-open");
          var toggle = item.querySelector(".ss-nav-group-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        });
      }
    });

    var current = window.location.pathname.replace(/\/+$/, "") || "/";
    header.querySelectorAll("a[href]").forEach(function (link) {
      try {
        var target = new URL(link.href, window.location.href).pathname.replace(/\/+$/, "") || "/";
        if (target === current) {
          link.classList.add("ss-current");
          var group = link.closest(".ss-nav-group");
          if (group) {
            var toggle = group.querySelector(".ss-nav-group-toggle");
            if (toggle) toggle.classList.add("ss-current");
          }
        }
      } catch (_) {}
    });

    header.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (nav) nav.classList.remove("ss-mobile-open");
        if (menuButton) {
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Open navigation");
        }
        document.body.classList.remove("ss-nav-open");
      });
    });

    function updateCartCount() {
      try {
        var cart = JSON.parse(localStorage.getItem("segun_cart") || "[]");
        var count = cart.reduce(function (sum, item) {
          return sum + (Number(item.qty) || 0);
        }, 0);
        header.querySelectorAll("[data-cart-count]").forEach(function (node) {
          node.textContent = count;
        });
      } catch (_) {}
    }

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("segun-cart-updated", updateCartCount);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
