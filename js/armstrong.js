const isArmstrong = (num) => {
  const digits = num.toString().split("");
  const power = digits.length;

  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), power),
    0,
  );

  return sum === num;
};

console.log(isArmstrong(153));
console.log(isArmstrong(9474));
console.log(isArmstrong(123));
