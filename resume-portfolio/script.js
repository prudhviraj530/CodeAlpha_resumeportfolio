// Simple example: highlight skills on hover
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#f0f8ff";
  });
  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "";
  });
});