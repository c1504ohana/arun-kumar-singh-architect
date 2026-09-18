(() => {
  const slideshow = document.querySelector("[data-home-slideshow]");

  if (!slideshow) {
    return;
  }

  const slides = [...slideshow.querySelectorAll(".home-hero__slide")];
  const previousButton = slideshow.querySelector("[data-slide-prev]");
  const nextButton = slideshow.querySelector("[data-slide-next]");
  const toggleButton = slideshow.querySelector("[data-slide-toggle]");
  const toggleLabel = slideshow.querySelector("[data-slide-toggle-label]");
  const status = slideshow.querySelector("[data-slide-status]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let currentIndex = 0;
  let timer;
  let isPaused = reduceMotion.matches;

  const formatIndex = (index) => String(index + 1).padStart(2, "0");
  const translate = (text) => window.siteI18n?.translate(text) || text;

  const updateControlLanguage = () => {
    const action = isPaused ? "Play" : "Pause";
    toggleLabel.textContent = translate(action);
    toggleButton.setAttribute("aria-label", translate(`${action} image slideshow`));
  };

  const loadSlide = (slide) => {
    if (!slide.dataset.src) {
      return;
    }

    slide.sizes = slide.dataset.sizes;
    slide.srcset = slide.dataset.srcset;
    slide.src = slide.dataset.src;
    delete slide.dataset.sizes;
    delete slide.dataset.srcset;
    delete slide.dataset.src;
  };

  const showSlide = (nextIndex) => {
    const resolvedIndex = (nextIndex + slides.length) % slides.length;
    const nextSlide = slides[resolvedIndex];

    const activateSlide = () => {
      currentIndex = resolvedIndex;

      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === currentIndex);
      });

      status.textContent = `${formatIndex(currentIndex)} / ${formatIndex(slides.length - 1)}`;
    };

    loadSlide(nextSlide);

    if (nextSlide.complete && nextSlide.naturalWidth > 0) {
      activateSlide();
    } else {
      nextSlide.addEventListener("load", activateSlide, { once: true });
    }
  };

  const stopTimer = () => {
    window.clearInterval(timer);
    timer = undefined;
  };

  const startTimer = () => {
    stopTimer();

    if (!isPaused) {
      timer = window.setInterval(() => showSlide(currentIndex + 1), 5500);
    }
  };

  const restartTimer = () => {
    startTimer();
  };

  previousButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    restartTimer();
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    restartTimer();
  });

  toggleButton.addEventListener("click", () => {
    isPaused = !isPaused;
    updateControlLanguage();
    startTimer();
  });

  slideshow.addEventListener("mouseenter", stopTimer);
  slideshow.addEventListener("mouseleave", startTimer);
  slideshow.addEventListener("focusin", stopTimer);
  slideshow.addEventListener("focusout", () => {
    window.setTimeout(() => {
      if (!slideshow.contains(document.activeElement)) {
        startTimer();
      }
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopTimer();
    } else {
      startTimer();
    }
  });

  reduceMotion.addEventListener("change", (event) => {
    isPaused = event.matches;
    updateControlLanguage();
    startTimer();
  });

  document.addEventListener("site-language-change", updateControlLanguage);

  showSlide(0);
  updateControlLanguage();
  startTimer();
})();
