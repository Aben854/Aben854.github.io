const INSTAGRAM_USERNAME = ""; // e.g. "yourhandle" — injects the official embed

const projects = [
  {
    tag: "Live demo",
    title: "Storefront Solutions",
    body: "Working capstone demo: specs, workflows, UAT, SQL KPIs, and uptime monitoring.",
    href: "https://storefrontsolutions.shop/",
    link: "Open demo",
  },
  {
    tag: "GitHub",
    title: "Point of Sale frontend",
    body: "Storefront UI for the live POS application.",
    href: "https://github.com/Aben854/PointofSaleFrontend",
    link: "View repo",
  },
  {
    tag: "GitHub",
    title: "Point of Sale backend API",
    body: "API layer behind checkout, inventory, and reporting.",
    href: "https://github.com/Aben854/PointofSaleBackendAPI",
    link: "View repo",
  },
  {
    tag: "GitHub",
    title: "Point of Sale API",
    body: "Additional API surface for the storefront stack.",
    href: "https://github.com/Aben854/PointofSaleAPI",
    link: "View repo",
  },
  {
    tag: "Python",
    title: "Currency converter",
    body: "Live FX from the Frankfurter API for real-time conversions.",
    href: "https://github.com/Aben854",
    link: "GitHub profile",
  },
  {
    tag: "Hackathon",
    title: "FinTech security framework",
    body: "Phone-serial verification plus AI-aware controls. Top 10 regional.",
    href: "https://github.com/Aben854",
    link: "GitHub profile",
  },
];

function renderCarousel() {
  const track = document.getElementById("project-carousel");
  if (!track) return;
  const cards = [...projects, ...projects]
    .map(
      (p) => `<article class="project">
        <span class="tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.body}</p>
        <a href="${p.href}" target="_blank" rel="noreferrer">${p.link} →</a>
      </article>`
    )
    .join("");
  track.innerHTML = cards;
}

function wireContact() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const reason = document.getElementById("reason").value;
    const message = document.getElementById("message").value.trim();
    const subject = `${reason} — ${name}`;
    const body = `From: ${name} <${email}>\nReason: ${reason}\n\n${message}`;
    const url = `mailto:asul.gw@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  });
}

function maybeInstagram() {
  if (!INSTAGRAM_USERNAME) return;
  const grid = document.getElementById("ig-grid");
  if (!grid) return;
  grid.outerHTML = `<iframe class="embed-frame" style="min-height:540px;border:0;width:100%"
    src="https://www.instagram.com/${encodeURIComponent(INSTAGRAM_USERNAME)}/embed"
    title="Instagram" loading="lazy"></iframe>`;
}

function buildHexField() {
  if (document.querySelector(".hex-field")) return;
  const field = document.createElement("div");
  field.className = "hex-field";
  field.setAttribute("aria-hidden", "true");

  const hexagons = [
    [7, 15, 86, 0],
    [22, 69, 48, 3],
    [43, 30, 64, 7],
    [61, 76, 104, 1],
    [78, 18, 58, 5],
    [91, 57, 82, 9],
    [12, 91, 54, 11],
    [70, 44, 42, 13],
  ];

  hexagons.forEach(([left, top, size, delay], index) => {
    const hex = document.createElement("span");
    hex.className = `floating-hex floating-hex-${index + 1}`;
    hex.style.setProperty("--hex-left", `${left}%`);
    hex.style.setProperty("--hex-top", `${top}%`);
    hex.style.setProperty("--hex-size", `${size}px`);
    hex.style.setProperty("--hex-delay", `-${delay}s`);
    field.appendChild(hex);
  });

  document.body.prepend(field);
}

buildHexField();
renderCarousel();
wireContact();
maybeInstagram();
