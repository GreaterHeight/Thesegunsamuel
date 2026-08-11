document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("[data-global-nav]");
  if (!header) return;

  const menuButton = header.querySelector(".ss-nav-toggle");
  const nav = header.querySelector(".ss-primary-nav");

  // Mobile menu
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      const open = nav.classList.toggle("ss-mobile-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      document.body.classList.toggle("ss-nav-open", open);
    });
  }

  // Dropdowns: click on desktop and mobile.
  header.querySelectorAll(".ss-nav-group-toggle").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      const group = button.closest(".ss-nav-group");
      const isOpen = group.classList.contains("ss-open");

      header.querySelectorAll(".ss-nav-group.ss-open").forEach(function (item) {
        item.classList.remove("ss-open");
        const toggle = item.querySelector(".ss-nav-group-toggle");
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
        const toggle = item.querySelector(".ss-nav-group-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
    }
  });

  // Highlight the current primary section.
  const current = window.location.pathname.replace(/\/+$/, "") || "/";
  header.querySelectorAll("a[href]").forEach(function (link) {
    try {
      const target = new URL(link.href, window.location.href).pathname.replace(/\/+$/, "") || "/";
      if (target === current) {
        link.classList.add("ss-current");
        const group = link.closest(".ss-nav-group");
        if (group) group.querySelector(".ss-nav-group-toggle").classList.add("ss-current");
      }
    } catch (_) {}
  });

  // Close mobile menu after navigation.
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

  // Cart count remains global.
  function updateCartCount() {
    try {
      const cart = JSON.parse(localStorage.getItem("segun_cart") || "[]");
      const count = cart.reduce(function (sum, item) { return sum + (Number(item.qty) || 0); }, 0);
      header.querySelectorAll("[data-cart-count]").forEach(function (node) {
        node.textContent = count;
      });
    } catch (_) {}
  }

  updateCartCount();
  window.addEventListener("storage", updateCartCount);
});
