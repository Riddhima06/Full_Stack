//use the .reduce() method to calculate the total price of items in a shopping cart.

function calculateTotal() {
  let cart = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1200 },
    { name: "Bag", price: 800 },
  ];

  let total = cart.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);

  document.getElementById("result").innerText = "Total Price: ₹" + total;
}
