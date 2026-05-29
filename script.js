function setLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-mn][data-en]").forEach((el) => {
    el.textContent = el.dataset[lang];
  });

  document.getElementById("btn-mn").classList.toggle("active", lang === "mn");
  document.getElementById("btn-en").classList.toggle("active", lang === "en");

  localStorage.setItem("siteLang", lang);
}

setLang(localStorage.getItem("siteLang") || "mn");
