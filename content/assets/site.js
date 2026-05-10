(() => {
  const mobileToggle = document.querySelector("[data-mobile-toggle]");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const playButton = document.querySelector("[data-load-embed]");
  const playContainer = document.querySelector("[data-embed-target]");

  if (playButton && playContainer) {
    playButton.addEventListener("click", () => {
      if (playContainer.querySelector("iframe")) {
        return;
      }

      const frame = document.createElement("iframe");
      frame.id = "game_drop";
      frame.src = "https://freakcircus.brushjjaemu.site/origina/index.html";
      frame.title = "Play The Freak Circus";
      frame.loading = "lazy";
      frame.allowFullscreen = true;
      frame.setAttribute("webkitallowfullscreen", "true");
      frame.setAttribute("mozallowfullscreen", "true");
      frame.setAttribute("msallowfullscreen", "true");
      frame.setAttribute("scrolling", "no");
      frame.setAttribute("allowtransparency", "true");
      frame.allow = "autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share";
      frame.setAttribute("frameborder", "0");

      playContainer.innerHTML = "";
      playContainer.appendChild(frame);
    });
  }
})();
