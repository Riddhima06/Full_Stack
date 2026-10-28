let arr = [1, 2, 3, 4, 5];
console.log(arr);

//Map
let newArr = arr.map((n) => n * n);
console.log(newArr);

//Filter
let filteredArr = arr.filter((n) => n % 2 === 0);
console.log(filteredArr);

//Find
let found = arr.find((n) => n > 3);
console.log(found);

//total
let total = arr.reduce((sum, n) => sum + n, 0);
console.log(total);
