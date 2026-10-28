let price = 100,
  quantity;
let total = price * Number.parseInt(quantity ?? 1);
console.log(total);

let obj = {
  name: "John",
  location: {
    city: "New York",
  },
};

console.log((obj.location.state ??= "UP"));
console.log(obj);
