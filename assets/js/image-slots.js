(function () {
  "use strict";

  /*
   * Canonical image-slot loader.
   * Preloads the exact production image before revealing the slot.
   * If the image exists, the real image is revealed without showing the placeholder first.
   * If it does not exist, the approved placeholder remains visible.
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

  function initSlot(slot) {
    var url = resolveUrl(slot);
    if (!url) return;

    var img = slot.querySelector("[data-image-renderer]");
    if (!img) {
      img = document.createElement("img");
      img.setAttribute("data-image-renderer", "");
      img.alt = slot.getAttribute("data-image-alt") || "";
      img.decoding = "async";
      img.loading = slot.getAttribute("data-image-loading") || "lazy";
      slot.appendChild(img);
    }

    /* Keep the placeholder as the initial state only while the asset is unknown. */
    slot.classList.add("image-checking");
    slot.classList.remove("has-real-image", "image-load-failed");
    slot.setAttribute("data-image-status", "checking");
    slot.setAttribute("data-image-loaded", "false");

    var probe = new Image();

    probe.onload = function () {
      img.src = url;

      /* Wait for the actual renderer element to decode before revealing it. */
      var reveal = function () {
        slot.classList.remove("image-checking", "image-load-failed");
        slot.classList.add("has-real-image");
        slot.setAttribute("data-image-loaded", "true");
        slot.setAttribute("data-image-status", "ready");
        img.removeAttribute("aria-hidden");
      };

      if (img.decode) {
        img.decode().then(reveal).catch(reveal);
      } else {
        reveal();
      }

      probe.onload = null;
      probe.onerror = null;
    };

    probe.onerror = function () {
      slot.classList.remove("image-checking", "has-real-image");
      slot.classList.add("image-load-failed");
      slot.setAttribute("data-image-loaded", "false");
      slot.setAttribute("data-image-status", "placeholder");
      img.removeAttribute("src");
      img.setAttribute("aria-hidden", "true");
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
