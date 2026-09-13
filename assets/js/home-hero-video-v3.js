
/* Segun Samuel Hero V3 — resilient autoplay + reduced-motion handling */
(() => {
  const video = document.querySelector(".ss-home-hero-video__video");
  if (!video) return;

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const sync = () => {
    if (motionQuery.matches) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    video.setAttribute("autoplay", "");
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Poster remains available if browser policy blocks autoplay.
      });
    }
  };

  sync();

  if (typeof motionQuery.addEventListener === "function") {
    motionQuery.addEventListener("change", sync);
  } else if (typeof motionQuery.addListener === "function") {
    motionQuery.addListener(sync);
  }

  video.addEventListener("error", () => {
    video.style.display = "none";
  });
})();
