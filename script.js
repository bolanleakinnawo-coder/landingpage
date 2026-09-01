// ---------- Countdown timer ----------
const k = "offerEnd";
const d = 72 * 60 * 60 * 1000;

let e = sessionStorage.getItem(k) || Date.now() + d;

sessionStorage.setItem(k, e);

setInterval(() => {
  let r = Math.max(0, e - Date.now()),
    h = Math.floor(r / 36e5),
    m = Math.floor((r % 36e5) / 6e4),
    s = Math.floor((r % 6e4) / 1e3);

  document.getElementById("timer").textContent =
    `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}, 1000);

(function countdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  let totalSeconds = 20 * 60; // starts at 20:00

  function render() {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    el.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  render();
  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds -= 1;
      render();
    }
  }, 1000);
})();

// ---------- Social proof popup rotation ----------
(function proofPopup() {
  const popup = document.getElementById("proof-popup");
  const nameEl = document.getElementById("proof-name");
  const avatarEl = document.getElementById("proof-avatar");
  if (!popup || !nameEl || !avatarEl) return;

  const people = [
    "Adaeze from Umuahia",
    "Amara from Port Harcourt",
    "Dayo from Lagos",
    "Chinedu from Enugu",
    "Fatima from Abuja",
    "Tobi from Ibadan",
    "Ngozi from Onitsha",
  ];

  let index = 0;

  function showNext() {
    const person = people[index % people.length];
    index += 1;

    nameEl.textContent = person;
    avatarEl.textContent = person.charAt(0);

    popup.classList.add("is-visible");

    setTimeout(() => {
      popup.classList.remove("is-visible");
    }, 4500);
  }

  // First appearance shortly after load, then repeat on an interval
  setTimeout(showNext, 1800);
  setInterval(showNext, 9000);
})();

// ---------- CTA buttons ----------
document.querySelectorAll("[data-cta]").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
});
