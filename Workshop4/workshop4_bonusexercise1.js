function replaceAllLI() {
  const items = document.querySelectorAll("li");

  items.forEach(function(li) {
    const replaced = document.createElement("a");
    replaced.textContent = "Replaced";
    replaced.style.color = "red";
    replaced.href = "#";

    li.replaceWith(replaced);
  });
}
