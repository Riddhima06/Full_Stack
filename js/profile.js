function generateProfile() {
  var firstName = "Riddhima";
  var favoriteNumber = 7;
  var isStudent = true;

  var profile = `My name is ${firstName}, my favorite number is ${favoriteNumber}, and I am a student: ${isStudent}.`;

  document.getElementById("result").textContent = profile;
}
