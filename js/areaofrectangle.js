function calculateArea(width, height) {
  return width * height;
}

function showArea() {
  let width = Number(document.getElementById("width").value);
  let height = Number(document.getElementById("height").value);

  let area = calculateArea(width, height);

  document.getElementById("result").innerText = "Area: " + area;
}
