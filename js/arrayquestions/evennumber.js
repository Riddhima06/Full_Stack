// use the .filter() method to create a new array with only the even numbers from the original array.

function findEven() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
  });

  document.getElementById("result").innerText = evenNumbers;
}
