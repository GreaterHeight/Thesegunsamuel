document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-global-nav]");
  if (!header) return;

  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  header.querySelectorAll(".nav-dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const parent = btn.closest(".nav-dropdown");
      header.querySelectorAll(".nav-dropdown.open").forEach(x => {
        if (x !== parent) x.classList.remove("open");
      });
      parent.classList.toggle("open");
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".nav-dropdown")) {
      header.querySelectorAll(".nav-dropdown.open").forEach(x => x.classList.remove("open"));
    }
  });

  const path = window.location.pathname.replace(/\/+$/, "");
  header.querySelectorAll("a[href]").forEach(a => {
    try {
      const u = new URL(a.href, window.location.href);
      const target = u.pathname.replace(/\/+$/, "");
      if (target && target === path) a.classList.add("active");
    } catch (_) {}
  });
});
