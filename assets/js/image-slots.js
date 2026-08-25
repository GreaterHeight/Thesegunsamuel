(function () {
  "use strict";

  /*
   * SEGUN SAMUEL — CANONICAL IMAGE SLOT LOADER
   *
   * There is one image-swap system for the site.
   *
   * 1. Resolve the exact filename from data-image-slot.
   * 2. Preload the image off-screen.
   * 3. If it loads, attach it to the slot and decode it.
   * 4. Only then reveal the real image.
   * 5. If it fails, reveal nothing new and retain the approved placeholder.
   *
   * This prevents:
   *   placeholder -> real image flash
   * and prevents:
   *   broken image glyphs.
   */

  function resolveUrl(slot) {
    var explicit = slot.getAttribute("data-image-src");
    if (explicit) return explicit;

    var file = slot.getAttribute("data-image-slot");
    if (!file) return null;

    var base = slot.getAttribute("data-image-base") ||
      "/Thesegunsamuel/assets/images/";

    return base.replace(/\/?$/, "/") + file;
  }

  function getRenderer(slot) {
    var img = slot.querySelector("[data-image-renderer]");
    if (img) return img;

    img = document.createElement("img");
    img.setAttribute("data-image-renderer", "");
    img.alt = slot.getAttribute("data-image-alt") || "";
    img.decoding = "async";
    img.loading = "eager";
    img.setAttribute("aria-hidden", "true");
    slot.appendChild(img);
    return img;
  }

  function revealRealImage(slot, img, url) {
    img.src = url;

    var reveal = function () {
      slot.classList.remove("image-checking", "image-load-failed");
      slot.classList.add("has-real-image");
      slot.setAttribute("data-image-loaded", "true");
      slot.setAttribute("data-image-status", "ready");
      img.removeAttribute("aria-hidden");
    };

    if (typeof img.decode === "function") {
      img.decode().then(reveal).catch(reveal);
    } else {
      reveal();
    }
  }

  function retainPlaceholder(slot, img) {
    slot.classList.remove("image-checking", "has-real-image");
    slot.classList.add("image-load-failed");
    slot.setAttribute("data-image-loaded", "false");
    slot.setAttribute("data-image-status", "placeholder");

    img.removeAttribute("src");
    img.setAttribute("aria-hidden", "true");
  }

  function initSlot(slot) {
    if (slot.getAttribute("data-image-status") === "ready") return;

    var url = resolveUrl(slot);
    if (!url) return;

    var img = getRenderer(slot);

    slot.classList.add("image-checking");
    slot.classList.remove("has-real-image", "image-load-failed");
    slot.setAttribute("data-image-status", "checking");
    slot.setAttribute("data-image-loaded", "false");

    var probe = new Image();
    probe.decoding = "async";

    probe.onload = function () {
      revealRealImage(slot, img, url);
      probe.onload = null;
      probe.onerror = null;
    };

    probe.onerror = function () {
      retainPlaceholder(slot, img);
      probe.onload = null;
      probe.onerror = null;
    };

    probe.src = url;
  }

  function init() {
    document.querySelectorAll("[data-image-slot]").forEach(initSlot);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
}());
