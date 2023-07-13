const p = document.querySelector("p");
let colorP = "";

function toggle() {
  colorP = colorP === "red" ? "black" : "red";

  p.style.color = colorP;
}
