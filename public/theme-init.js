try {
  const savedTheme = localStorage.getItem("kw-theme");

  document.documentElement.dataset.theme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "light";
} catch {
  document.documentElement.dataset.theme = "light";
}
