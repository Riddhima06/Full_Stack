function checkPalindrome() {
  let word = document.getElementById("word").value.toLowerCase();
  let reverse = word.split("").reverse().join("");

  if (word === reverse) {
    document.getElementById("result").innerText = "It is a palindrome";
  } else {
    document.getElementById("result").innerText = "It is not a palindrome";
  }
}
