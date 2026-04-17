const translations = {
  en: {
    subtitle: "Full-Stack Developer | Node, React, TypeScript, Rails",
    about: "Full-stack developer with experience building and shipping Rails apps, now focused on JS stack (Node.js, React, and TypeScript).",
    projects_heading: "Projects",
    toggle_label: "JP",
  },
  ja: {
    subtitle: "フルスタックエンジニア | Node, React, TypeScript, Rails",
    about: "Railsアプリのビルドとリリース経験を持つフルスタックエンジニア。現在はNode.js、React、TypeScriptを使ったJSスタックに注力しています。",
    projects_heading: "プロジェクト",
    toggle_label: "EN",
  },
};

function applyLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll("[data-en][data-ja]").forEach((el) => {
    el.textContent = el.getAttribute("data-" + lang);
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = t.toggle_label;

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

function detectLanguage() {
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "ja") return stored;
  const browser = (navigator.language || "en").toLowerCase();
  return browser.startsWith("ja") ? "ja" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLanguage();
  applyLanguage(lang);

  document.getElementById("lang-toggle").addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "en";
    applyLanguage(current === "en" ? "ja" : "en");
  });
});
