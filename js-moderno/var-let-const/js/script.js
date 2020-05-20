'use strict'; // O javascript acusa mais erros

console.log('Hello');

// var tem escopo abrangente
// let tem escopo reduzido

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('var' + i);
  }

  /*
  com var eu tenho acesso a variável do tipo 'var'
  fora do escopo do for.
  */

  i = 20;
  console.log(i);
}
function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('let' + i);
  }

  /*
  com let eu NÃO tenho acesso a variável do tipo 'let'
  fora do escopo do for.
  */

  i = 20;
  console.log(i);
}

// Chamando funções
withVar();
withLet();

/*
const - não é possível reatribuir valores, logo
  não é possível usar em arrays e vetores.
*/

const c = 10;
c = 20;

/*
É possivel mudar o valor de um vetor internamente 
  ex. 'd.push(1)';
*/
const d = [];
console.log(d);

d.push(1);
console.log(d);
