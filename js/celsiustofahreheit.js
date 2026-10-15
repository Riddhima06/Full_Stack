function convert() {
  var celsius = document.getElementById("celsius").value;
  var fahrenheit = (celsius * 9) / 5 + 32;

  alert("Fahrenheit: " + fahrenheit);
  console.log(fahrenheit);
}
