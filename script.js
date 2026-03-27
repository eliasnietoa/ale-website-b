const currentPage = document.body.dataset.page || "home";

const pageAliases = {
  home: "home",
  about: "about",
  artist: "about",
  portfolio: "portfolio",
  performance: "portfolio",
  egypt: "portfolio",
  global: "portfolio",
  "global-presence": "portfolio",
  "service-live-performance": "services",
  "service-acting": "services",
  "service-event-creator": "services",
  "service-creative-direction": "services",
  "service-teaching": "services",
  academy: "academy",
  "cairo-experience": "academy",
  services: "services",
  booking: "booking",
  press: "press",
  shop: "shop",
};

const activePage = pageAliases[currentPage] || currentPage;

const navConfig = [
  {
    key: "about",
    label: "About",
    href: "./about.html",
    drawer: [
      {
        label: "Identity",
        links: [
          {
            href: "./about.html",
            title: "Presence, Work, and Vision",
            desc: "Biography, roles, and the wider identity system.",
          },
          {
            href: "./global-presence.html",
            title: "Global Presence",
            desc: "International cities, movement, and scale.",
          },
          {
            href: "./egypt.html",
            title: "Egypt Chapter",
            desc: "Television, media, and the Cairo years.",
          },
        ],
      },
    ],
  },
  {
    key: "portfolio",
    label: "Portfolio",
    href: "./portfolio.html",
    drawer: [
      {
        label: "Selected Work",
        links: [
          {
            href: "./portfolio.html",
            title: "Portfolio Hub",
            desc: "Performance, acting, teaching, and archive paths.",
          },
          {
            href: "./performance.html",
            title: "Live Performance",
            desc: "Stage, silhouette, and performance-led imagery.",
          },
          {
            href: "./egypt.html",
            title: "Acting and Screen",
            desc: "Television presence and cinematic work.",
          },
        ],
      },
    ],
  },
  {
    key: "services",
    label: "Services",
    href: "./services.html",
    drawer: [
      {
        label: "Ways to Work With Badra",
        links: [
          {
            href: "./services.html",
            title: "Services Overview",
            desc: "The complete booking ecosystem in one place.",
          },
          {
            href: "./service-live-performance.html",
            title: "Live Performance",
            desc: "Headline stage presence for events and festivals.",
          },
          {
            href: "./service-acting.html",
            title: "Acting",
            desc: "Cinematic, elegant work for screen and camera.",
          },
          {
            href: "./service-event-creator.html",
            title: "Event Creator",
            desc: "Immersive experiences shaped around presence and concept.",
          },
          {
            href: "./service-creative-direction.html",
            title: "Creative Direction",
            desc: "Sharp visual leadership for content, image, and product worlds.",
          },
          {
            href: "./service-teaching.html",
            title: "Teaching",
            desc: "Warm mentorship, workshops, and premium intensives.",
          },
        ],
      },
    ],
  },
  {
    key: "academy",
    label: "Academy",
    href: "./academy.html",
    drawer: [
      {
        label: "Learning Paths",
        links: [
          {
            href: "./academy.html",
            title: "Academy",
            desc: "Study, structure, and premium educational entry points.",
          },
          {
            href: "./cairo-experience.html",
            title: "Cairo Experience",
            desc: "Residency, atmosphere, and city-rooted access.",
          },
        ],
      },
    ],
  },
  {
    key: "shop",
    label: "Shop",
    href: "./shop.html",
    drawer: [
      {
        label: "Objects and Access",
        links: [
          {
            href: "./shop.html",
            title: "Shop Preview",
            desc: "A quiet route into objects, tools, and future drops.",
          },
        ],
      },
    ],
  },
  {
    key: "press",
    label: "Press",
    href: "./press.html",
    drawer: [
      {
        label: "Media",
        links: [
          {
            href: "./press.html",
            title: "In the Press",
            desc: "Editorial mentions, archive, and long-form visibility.",
          },
          {
            href: "mailto:hello@badra.world?subject=Press%20Request",
            title: "Press Contact",
            desc: "Request articles, assets, and media access.",
          },
        ],
      },
    ],
  },
];

const renderDrawer = (item) => {
  if (!item.drawer) return "";

  const sections = item.drawer
    .map(
      (section) => `
        <div class="nav-drawer__section">
          <p class="nav-drawer__label">${section.label}</p>
          <div class="nav-drawer__links">
            ${section.links
              .map(
                (link) => `
                  <a class="nav-drawer__link" href="${link.href}">
                    <strong>${link.title}</strong>
                    <span>${link.desc}</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");

  return `
    <div class="nav-drawer">
      <div class="nav-drawer__inner shell">
        ${sections}
      </div>
    </div>
  `;
};

const renderDesktopNav = () =>
  navConfig
    .map(
      (item) => `
        <div class="nav-item ${activePage === item.key ? "is-current" : ""}">
          <a class="nav-link" href="${item.href}" ${activePage === item.key ? 'aria-current="page"' : ""}>${item.label}</a>
          ${renderDrawer(item)}
        </div>
      `
    )
    .join("");

const renderMobileNav = () => `
  <div class="mobile-nav" id="mobile-nav" aria-hidden="true">
    <div class="mobile-nav__panel">
      <div class="mobile-nav__header">
        <p class="mobile-nav__eyebrow">Navigation</p>
        <button class="mobile-nav__close" type="button" aria-label="Close menu">Close</button>
      </div>
      <div class="mobile-nav__sections">
        ${navConfig
          .map(
            (item) => `
              <section class="mobile-nav__section">
                <a class="mobile-nav__section-title ${activePage === item.key ? "is-current" : ""}" href="${item.href}" ${activePage === item.key ? 'aria-current="page"' : ""}>${item.label}</a>
                <div class="mobile-nav__links">
                  ${item.drawer
                    .flatMap((section) => section.links)
                    .map(
                      (link) => `
                        <a href="${link.href}">
                          <strong>${link.title}</strong>
                          <span>${link.desc}</span>
                        </a>
                      `
                    )
                    .join("")}
                </div>
              </section>
            `
          )
          .join("")}
        <a class="mobile-nav__cta" href="./booking.html">Work With Badra</a>
      </div>
    </div>
  </div>
`;

const headerRoot = document.querySelector(".site-header");

if (headerRoot) {
  headerRoot.innerHTML = `
    <div class="site-header__shell">
      <a class="brand" href="./index.html" aria-label="Badra home">
        <img class="brand__mark" src="./Logo/I am Badra-Logo-1,I am Badra-Logo-2,I am Badra-Logo-3/I am Badra-Logo-4.svg" alt="I am Badra" />
        <span class="brand__word">BADRA</span>
      </a>
      <div class="site-header__desktop">
        <nav class="site-nav" aria-label="Primary">
          ${renderDesktopNav()}
        </nav>
        <a class="nav-cta ${activePage === "booking" ? "is-current" : ""}" href="./booking.html">Work With Badra</a>
      </div>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
    </div>
    ${renderMobileNav()}
  `;
}

const footerMessages = {
  home: {
    eyebrow: "Badra",
    note: "Booking, media, performance, and a wider world of work.",
    label: "Private access",
    quote: "Not seen. Felt.",
  },
  about: {
    eyebrow: "About",
    note: "Identity, presence, and professional range in one view.",
    label: "Presence and vision",
    quote: "The icon is the work.",
  },
  artist: {
    eyebrow: "Artist",
    note: "Image, authorship, and stage identity framed as one system.",
    label: "The sovereign profile",
    quote: "Presence before explanation.",
  },
  portfolio: {
    eyebrow: "Portfolio",
    note: "Performance, screen, movement, and archive paths.",
    label: "Selected work",
    quote: "Presence leaves evidence.",
  },
  performance: {
    eyebrow: "Performance",
    note: "Stage language, movement, and editorial proof held in tension.",
    label: "Stage language",
    quote: "Silhouette before detail.",
  },
  egypt: {
    eyebrow: "Egypt",
    note: "Cairo remains the origin chapter of the visible mythology.",
    label: "Origin chapter",
    quote: "Memory holds the light.",
  },
  global: {
    eyebrow: "Global",
    note: "International circulation without flattening the ritual core.",
    label: "World stage",
    quote: "Distance without dilution.",
  },
  "global-presence": {
    eyebrow: "Global",
    note: "International circulation without flattening the ritual core.",
    label: "World stage",
    quote: "Distance without dilution.",
  },
  services: {
    eyebrow: "Services",
    note: "Five distinct entry points with their own scope and tone.",
    label: "Work with Badra",
    quote: "Luxury needs clarity.",
  },
  "service-live-performance": {
    eyebrow: "Live Performance",
    note: "Flagship bookings shaped around stage authority and memory.",
    label: "Stage focus",
    quote: "A focal point, not a backdrop.",
  },
  "service-acting": {
    eyebrow: "Acting",
    note: "Screen-led work for productions that need intimacy and control.",
    label: "Screen presence",
    quote: "Closer frame, sharper force.",
  },
  "service-event-creator": {
    eyebrow: "Event Creator",
    note: "Concept, atmosphere, and presence designed as one authored world.",
    label: "World-building",
    quote: "The experience itself is the work.",
  },
  "service-creative-direction": {
    eyebrow: "Creative Direction",
    note: "Visual systems, campaigns, and product worlds with a stronger point of view.",
    label: "Image systems",
    quote: "Direction sharpens desire.",
  },
  "service-teaching": {
    eyebrow: "Teaching",
    note: "Warm mentorship with rigor, structure, and private access.",
    label: "Transmission",
    quote: "Elegance can still instruct.",
  },
  academy: {
    eyebrow: "Academy",
    note: "Training, access, and quieter educational routes.",
    label: "Study and access",
    quote: "Discipline made visible.",
  },
  "cairo-experience": {
    eyebrow: "Cairo",
    note: "Residency and ritual rather than packaged tourism.",
    label: "Cultural immersion",
    quote: "Return to the source.",
  },
  shop: {
    eyebrow: "Shop",
    note: "Objects, online learning, and future releases.",
    label: "Objects and classes",
    quote: "A quieter route inward.",
  },
  press: {
    eyebrow: "Press",
    note: "Selected mentions, editorial access, and media pathways.",
    label: "Editorial archive",
    quote: "Mystery protects the image.",
  },
  booking: {
    eyebrow: "Booking",
    note: "Private inquiries, event requests, and collaborations.",
    label: "Private inquiry",
    quote: "Access begins with intention.",
  },
};

const footerCopy = footerMessages[currentPage] || footerMessages[activePage] || footerMessages.home;
const footerRoot = document.querySelector(".site-footer");

if (footerRoot) {
  footerRoot.innerHTML = `
    <div class="shell footer-shell">
      <div class="footer-rail">
        <p class="footer-kicker">${footerCopy.eyebrow}</p>
        <a class="footer-contact" href="mailto:hello@badra.world">hello@badra.world</a>
      </div>
      <div class="footer-center">
        <img class="footer-mark" src="./Logo/I am Badra-Logo-1,I am Badra-Logo-2,I am Badra-Logo-3/I am Badra-Logo-2.svg" alt="I am Badra" />
        <p class="footer-label">${footerCopy.label}</p>
        <p class="footer-quote">${footerCopy.quote}</p>
        <p class="footer-note">${footerCopy.note}</p>
      </div>
      <nav class="footer-nav" aria-label="Footer">
        <a href="./about.html">About</a>
        <a href="./global-presence.html">Global Presence</a>
        <a href="./portfolio.html">Portfolio</a>
        <a href="./performance.html">Performance</a>
        <a href="./services.html">Services</a>
        <a href="./service-live-performance.html">Live Performance</a>
        <a href="./service-acting.html">Acting</a>
        <a href="./service-event-creator.html">Event Creator</a>
        <a href="./service-creative-direction.html">Creative Direction</a>
        <a href="./service-teaching.html">Teaching</a>
        <a href="./academy.html">Academy</a>
        <a href="./cairo-experience.html">Cairo Experience</a>
        <a href="./shop.html">Shop</a>
        <a href="./press.html">Press</a>
        <a href="./booking.html">Work With Badra</a>
      </nav>
      <div class="footer-separator"></div>
    </div>
    <div class="shell footer-meta">
      <span>Badra</span>
      <span>Global artist, actress, performer</span>
    </div>
  `;
}

const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenuButton = document.querySelector(".mobile-nav__close");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const setMenuState = (open) => {
  document.body.classList.toggle("menu-open", open);
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(open));
  }
  if (mobileNav) {
    mobileNav.setAttribute("aria-hidden", String(!open));
  }
};

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    setMenuState(!document.body.classList.contains("menu-open"));
  });

  if (closeMenuButton) {
    closeMenuButton.addEventListener("click", () => setMenuState(false));
  }

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  mobileNav.addEventListener("click", (event) => {
    if (event.target === mobileNav) {
      setMenuState(false);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}

const reveals = [...document.querySelectorAll(".reveal")];
const hero = document.querySelector(".hero");

reveals.forEach((node, index) => {
  node.style.setProperty("--reveal-delay", `${Math.min(index % 6, 4) * 45}ms`);

  if (node.getBoundingClientRect().top < window.innerHeight * 0.92) {
    node.classList.add("is-visible");
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -12% 0px",
    }
  );

  reveals.forEach((node) => observer.observe(node));
} else {
  reveals.forEach((node) => node.classList.add("is-visible"));
}

const syncScene = () => {
  if (headerRoot) {
    headerRoot.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  if (hero && !prefersReducedMotion.matches) {
    const shift = Math.min(window.scrollY * 0.08, 20);
    hero.style.setProperty("--hero-shift", `${shift.toFixed(2)}px`);
  }
};

let isTicking = false;

const queueSceneSync = () => {
  if (isTicking) return;

  isTicking = true;
  window.requestAnimationFrame(() => {
    syncScene();
    isTicking = false;
  });
};

syncScene();

window.addEventListener("scroll", queueSceneSync, { passive: true });
window.addEventListener("resize", queueSceneSync);

if ("addEventListener" in prefersReducedMotion) {
  prefersReducedMotion.addEventListener("change", () => {
    if (prefersReducedMotion.matches && hero) {
      hero.style.removeProperty("--hero-shift");
    }

    syncScene();
  });
}
