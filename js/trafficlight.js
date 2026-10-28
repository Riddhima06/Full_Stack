let currentLight = "red";

function changeLight() {
  document.getElementById("red").classList.remove("red");
  document.getElementById("yellow").classList.remove("yellow");
  document.getElementById("green").classList.remove("green");

  if (currentLight === "red") {
    currentLight = "green";
  } else if (currentLight === "green") {
    currentLight = "yellow";
  } else {
    currentLight = "red";
  }

  document.getElementById(currentLight).classList.add(currentLight);
}
