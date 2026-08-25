(function () {
  "use strict";

  function resolveUrl(slot) {
    var explicit = slot.getAttribute("data-image-src");
    if (explicit) return explicit;

    var file = slot.getAttribute("data-image-slot");
    if (!file) return null;

    var base = slot.getAttribute("data-image-base") ||
      "/Thesegunsamuel/assets/images/";

    return base.replace(/\/?$/, "/") + file;
  }

  function ensureRenderer(slot) {
    var img = slot.querySelector("[data-image-renderer]");
    if (!img) {
      img = document.createElement("img");
      img.setAttribute("data-image-renderer", "");
      img.alt = slot.getAttribute("data-image-alt") || "";
      img.decoding = "async";
      img.loading = "eager";
      img.setAttribute("aria-hidden", "true");
      slot.appendChild(img);
    }
    return img;
  }

  function fail(slot, img) {
    if (img) {
      img.removeAttribute("src");
      img.setAttribute("aria-hidden", "true");
    }
    slot.classList.remove("image-checking", "has-real-image");
    slot.classList.add("image-load-failed");
    slot.setAttribute("data-image-loaded", "false");
    slot.setAttribute("data-image-status", "placeholder");
  }

  function reveal(slot, img, url) {
    img.src = url;

    var done = function () {
      slot.classList.remove("image-checking", "image-load-failed");
      slot.classList.add("has-real-image");
      slot.setAttribute("data-image-loaded", "true");
      slot.setAttribute("data-image-status", "ready");
      img.setAttribute("aria-hidden", "false");
    };

    if (typeof img.decode === "function") {
      img.decode().then(done).catch(done);
    } else {
      done();
    }
  }

  function initSlot(slot) {
    if (slot.dataset.imageSystemReady === "true") return;
    slot.dataset.imageSystemReady = "true";

    var url = resolveUrl(slot);
    if (!url) {
      fail(slot, null);
      return;
    }

    var img = ensureRenderer(slot);

    /* The CSS already hides this slot on first paint. Keep it hidden while probing. */
    slot.classList.add("image-checking");
    slot.classList.remove("has-real-image", "image-load-failed");
    slot.setAttribute("data-image-loaded", "false");
    slot.setAttribute("data-image-status", "checking");

    var probe = new Image();
    probe.decoding = "async";

    probe.onload = function () {
      reveal(slot, img, url);
      probe.onload = null;
      probe.onerror = null;
    };

    probe.onerror = function () {
      fail(slot, img);
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
