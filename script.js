const siteConfig = {
  links: {
    twitch: "https://www.twitch.tv/mmarcitv",
    discord: "https://discord.gg/gs5EHumvWM",
    instagram: "https://www.instagram.com/marcls_setup/",
    tiktok: "https://www.tiktok.com/@mmarci_tv",
    youtube: "https://www.youtube.com/@MMarciTV",
    donation: "https://streamelements.com/mmarcitv/tip",
    email: "mailto:mmarcitv@gmail.com"
  }
};

document.querySelectorAll("[data-link]").forEach((element) => {
  const key = element.dataset.link;
  const url = siteConfig.links[key];

  if (!url || url === "#") {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      alert(`Bitte trage deinen ${key}-Link in der Datei script.js ein.`);
    });
  } else {
    element.href = url;
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("is-open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
