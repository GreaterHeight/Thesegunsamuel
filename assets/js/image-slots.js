(function () {
  "use strict";

  /*
   * Segun Samuel Universal Image Slot System
   *
   * Contract:
   *   data-image-slot="exact-filename.ext"
   *   data-image-base="/Thesegunsamuel/assets/images/"
   *
   * Existing generated image -> display it.
   * Missing generated image -> preserve the approved placeholder.
   *
   * The loader deliberately does not create or replace placeholder artwork.
   * Placeholder presentation belongs to the page/component CSS.
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

  function showRealImage(slot, img, url) {
    slot.classList.add("has-real-image");
    slot.classList.remove("image-load-failed");
    slot.setAttribute("data-image-loaded", "true");
    slot.setAttribute("data-image-status", "ready");

    img.src = url;
    img.removeAttribute("aria-hidden");
  }

  function keepPlaceholder(slot, img) {
    slot.classList.remove("has-real-image");
    slot.classList.add("image-load-failed");
    slot.setAttribute("data-image-loaded", "false");
    slot.setAttribute("data-image-status", "placeholder");

    if (img) {
      img.removeAttribute("src");
      img.setAttribute("aria-hidden", "true");
    }
  }

  function ensureImageElement(slot) {
    var img = slot.querySelector("[data-image-renderer]");
    if (!img) {
      img = document.createElement("img");
      img.setAttribute("data-image-renderer", "");
      img.alt = slot.getAttribute("data-image-alt") || "";
      img.decoding = "async";
      img.loading = slot.getAttribute("data-image-loading") || "lazy";
      slot.appendChild(img);
    }
    return img;
  }

  function initSlot(slot) {
    var url = resolveUrl(slot);
    if (!url) return;

    var img = ensureImageElement(slot);

    slot.setAttribute("data-image-status", "checking");
    slot.setAttribute("data-image-loaded", "false");

    var probe = new Image();
    probe.onload = function () {
      showRealImage(slot, img, url);
      probe.onload = null;
      probe.onerror = null;
    };
    probe.onerror = function () {
      keepPlaceholder(slot, img);
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
