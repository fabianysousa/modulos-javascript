console.log('Hello! World');

// Somatório com while
var numAtual = 1;
var somatorio = 0;

while (numAtual <= 10) {
  //somatorio = somatorio + numAtual;
  somatorio += numAtual;
  numAtual++;
}

console.log('A soma é ' + somatorio);

// Somatório com do while
var numAtual = 1;
var somatorio = 0;

do {
  somatorio += numAtual;
  numAtual++;
} while (numAtual <= 10);

console.log('A soma é ' + somatorio);

// Somatório com for

var somatorio = 0;

for (numAtual = 1; numAtual <= 10; numAtual++) {
  somatorio += numAtual;
}

console.log('A soma é ' + somatorio);
