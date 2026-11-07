const TRANSITION_STORAGE_KEY = "rappid-rocxx-page-transition";
const TRANSITION_DURATION = 700;
const TRANSITION_EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

function createCurtain(className) {
  const curtain = document.createElement("div");
  curtain.className = `page-transition-curtain ${className}`;
  curtain.setAttribute("aria-hidden", "true");

  const brand = document.createElement("div");
  brand.className = "page-transition-brand";

  const mark = document.createElement("img");
  mark.className = "page-transition-mark";
  mark.src = "/brand-logo.png";
  mark.alt = "";

  const wordmark = document.createElement("span");
  wordmark.className = "page-transition-wordmark";
  wordmark.textContent = "Rappid RocxX";

  const subtitle = document.createElement("span");
  subtitle.className = "page-transition-subtitle";
  subtitle.textContent = "T E C H N O L O G I E S";

  brand.append(mark, wordmark, subtitle);

  const line = document.createElement("span");
  line.className = "page-transition-line";

  curtain.append(brand, line);
  document.body.append(curtain);
  return curtain;
}

export function initializePageTransitions() {
  let navigating = false;
  let navigationTimer;
  let leavingForDestination = false;

  window.addEventListener("pagehide", () => {
    window.clearTimeout(navigationTimer);
    if (!leavingForDestination) {
      sessionStorage.removeItem(TRANSITION_STORAGE_KEY);
    }
  });

  window.addEventListener("pageshow", (event) => {
    navigating = false;
    leavingForDestination = false;
    window.clearTimeout(navigationTimer);

    if (event.persisted) {
      sessionStorage.removeItem(TRANSITION_STORAGE_KEY);
      document.querySelectorAll(".page-transition-curtain").forEach((curtain) => {
        curtain.remove();
      });
    }
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const pendingTransition = sessionStorage.getItem(TRANSITION_STORAGE_KEY);
  if (pendingTransition) {
    sessionStorage.removeItem(TRANSITION_STORAGE_KEY);
    const [destinationPath, startedAt] = pendingTransition.split("|");
    const transitionAge = Date.now() - Number(startedAt);

    if (
      destinationPath === window.location.pathname &&
      transitionAge >= 0 &&
      transitionAge < 5000
    ) {
      const curtain = createCurtain("is-arriving");
      window.requestAnimationFrame(() => {
        curtain.animate(
          [{ transform: "translateY(0%)" }, { transform: "translateY(-101%)" }],
          { duration: TRANSITION_DURATION, easing: TRANSITION_EASING, fill: "forwards" },
        );
      });
      window.setTimeout(() => curtain.remove(), TRANSITION_DURATION + 150);
    }
  }

  document.addEventListener("click", (event) => {
    if (
      navigating ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const source = event.target;
    const link = source instanceof Element ? source.closest("a") : null;
    if (
      !link ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self")
    ) {
      return;
    }

    const destination = new URL(link.href, window.location.href);
    if (
      destination.origin !== window.location.origin ||
      destination.pathname === window.location.pathname
    ) {
      return;
    }

    event.preventDefault();
    navigating = true;
    sessionStorage.setItem(
      TRANSITION_STORAGE_KEY,
      `${destination.pathname}|${Date.now()}`,
    );

    const curtain = createCurtain("");
    curtain.classList.add("is-covering");
    curtain.animate(
      [{ transform: "translateY(101%)" }, { transform: "translateY(0%)" }],
      { duration: TRANSITION_DURATION, easing: TRANSITION_EASING, fill: "forwards" },
    );
    navigationTimer = window.setTimeout(() => {
      leavingForDestination = true;
      window.location.assign(destination.href);
    }, TRANSITION_DURATION);
  });
}
