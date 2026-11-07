const FESTIVALS = {
  "2026-11-08": { name: "Diwali", theme: "diwali" },
  "2026-12-25": { name: "Christmas", theme: "christmas" },
  "2026-12-31": { name: "New Year's Eve", theme: "new-year" },
  "2027-01-01": { name: "New Year", theme: "new-year" },
  "2027-01-15": { name: "Pongal", theme: "pongal" },
  "2027-01-26": { name: "Republic Day", theme: "tricolour" },
  "2027-03-10": { name: "Eid-ul-Fitr", theme: "eid" },
  "2027-03-23": { name: "Holi", theme: "holi" },
  "2027-03-26": { name: "Good Friday", theme: "good-friday" },
  "2027-05-17": { name: "Eid-ul-Adha", theme: "eid" },
  "2027-08-15": { name: "Independence Day", theme: "tricolour" },
  "2027-09-04": { name: "Vinayagar Chaturthi", theme: "ganesh" },
  "2027-09-12": { name: "Onam", theme: "onam" },
  "2027-10-02": { name: "Gandhi Jayanti", theme: "tricolour" },
  "2027-10-09": { name: "Dussehra", theme: "dussehra" },
  "2027-10-29": { name: "Diwali", theme: "diwali" },
  "2027-12-25": { name: "Christmas", theme: "christmas" },
  "2027-12-31": { name: "New Year's Eve", theme: "new-year" },
  "2028-01-01": { name: "New Year", theme: "new-year" },
  "2028-01-15": { name: "Pongal", theme: "pongal" },
  "2028-01-26": { name: "Republic Day", theme: "tricolour" },
  "2028-02-27": { name: "Eid-ul-Fitr", theme: "eid" },
  "2028-03-11": { name: "Holi", theme: "holi" },
  "2028-03-30": { name: "Good Friday", theme: "good-friday" },
  "2028-05-06": { name: "Eid-ul-Adha", theme: "eid" },
  "2028-08-15": { name: "Independence Day", theme: "tricolour" },
  "2028-08-23": { name: "Vinayagar Chaturthi", theme: "ganesh" },
  "2028-09-01": { name: "Onam", theme: "onam" },
  "2028-09-27": { name: "Dussehra", theme: "dussehra" },
  "2028-10-02": { name: "Gandhi Jayanti", theme: "tricolour" },
  "2028-10-17": { name: "Diwali", theme: "diwali" },
  "2028-12-25": { name: "Christmas", theme: "christmas" },
  "2028-12-31": { name: "New Year's Eve", theme: "new-year" },
  "2029-01-01": { name: "New Year", theme: "new-year" },
  "2029-01-14": { name: "Pongal", theme: "pongal" },
  "2029-01-26": { name: "Republic Day", theme: "tricolour" },
  "2029-02-15": { name: "Eid-ul-Fitr", theme: "eid" },
  "2029-03-01": { name: "Holi", theme: "holi" },
  "2029-03-30": { name: "Good Friday", theme: "good-friday" },
  "2029-04-24": { name: "Eid-ul-Adha", theme: "eid" },
  "2029-08-15": { name: "Independence Day", theme: "tricolour" },
  "2029-08-22": { name: "Onam", theme: "onam" },
  "2029-09-11": { name: "Vinayagar Chaturthi", theme: "ganesh" },
  "2029-10-02": { name: "Gandhi Jayanti", theme: "tricolour" },
  "2029-10-16": { name: "Dussehra", theme: "dussehra" },
  "2029-11-05": { name: "Diwali", theme: "diwali" },
  "2029-12-25": { name: "Christmas", theme: "christmas" },
  "2029-12-31": { name: "New Year's Eve", theme: "new-year" },
};

function getLocalDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getFestivalForDate(date) {
  return FESTIVALS[getLocalDateKey(date)] ?? null;
}

function millisecondsUntilLocalMidnight(date) {
  const nextLocalMidnight = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1,
  );
  return nextLocalMidnight.getTime() - date.getTime() + 25;
}

function createFestivalEffects() {
  const effects = document.createElement("div");
  effects.className = "festival-effects";
  effects.setAttribute("aria-hidden", "true");

  const fireworkPositions = [
    { left: "18%", top: "23%" },
    { left: "78%", top: "18%" },
    { left: "52%", top: "42%" },
  ];

  fireworkPositions.forEach(({ left, top }, burstIndex) => {
    const burst = document.createElement("span");
    burst.className = "festival-firework";
    burst.style.setProperty("--firework-left", left);
    burst.style.setProperty("--firework-top", top);
    burst.style.setProperty("--firework-delay", `${burstIndex * 1.7}s`);

    for (let index = 0; index < 20; index += 1) {
      const particle = document.createElement("span");
      particle.className = "festival-firework-particle";
      particle.style.setProperty("--particle-angle", `${index * 18}deg`);
      burst.append(particle);
    }

    effects.append(burst);
  });

  for (let index = 0; index < 42; index += 1) {
    const paper = document.createElement("span");
    paper.className = "festival-confetti";
    paper.style.setProperty("--confetti-left", `${(index / 42) * 100}%`);
    paper.style.setProperty("--confetti-delay", `${-Math.random() * 10}s`);
    paper.style.setProperty("--confetti-duration", `${8 + Math.random() * 7}s`);
    paper.style.setProperty("--confetti-drift", `${Math.random() * 180 - 90}px`);
    paper.style.setProperty("--confetti-spin", `${360 + Math.random() * 720}deg`);
    effects.append(paper);
  }

  return effects;
}

export function initializeFestivalMode() {
  let midnightTimer;
  let effects;

  const syncFestival = () => {
    window.clearTimeout(midnightTimer);
    const now = new Date();
    const festival = getFestivalForDate(now);

    if (festival) {
      document.body.dataset.festival = festival.theme;
      if (!effects?.isConnected) {
        effects = createFestivalEffects();
        document.body.append(effects);
      }
    } else {
      delete document.body.dataset.festival;
      effects?.remove();
      effects = null;
    }

    midnightTimer = window.setTimeout(
      syncFestival,
      millisecondsUntilLocalMidnight(now),
    );
  };

  syncFestival();
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") syncFestival();
  });
}
