const sum = (a, b = 10) => a + b;
console.log(sum(2)); // 12
// só pode usar default paramet no final

const sum2 = (a = 10, b) => a + b;
console.log(sum2(null, 8)); // 8
// se for usar default paramet no inicio, tem usar nos 2
