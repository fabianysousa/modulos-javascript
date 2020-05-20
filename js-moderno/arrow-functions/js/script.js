var a;
var b;

function sum(a, b) {
  return a + b;
}

// função anônima
const sum2 = function (a, b) {
  return a + b;
};

// arrow function
const sum3 = (a, b) => {
  return a + b;
};

// arrow function reduzida
const sum4 = (a, b) => a + b;

console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));

// arrow function só pode usar com apenas um comando
