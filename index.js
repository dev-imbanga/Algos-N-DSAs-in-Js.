const calculateSum = (input) => {
  let sum = 0
  for (let i = 0; i <= input; i++) {
    sum += i;
  }
  return sum;
};

console.log(calculateSum(2));