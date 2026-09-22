(() => {
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
