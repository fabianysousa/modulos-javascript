console.log('Hello! World');

var a = 7;
var b = 7;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

/*
if (a > b) console.log(a + ' é maior que ' + b);
else if (a < b) console.log(a + ' é menor que ' + b);
else console.log(a + ' é igual a ' + b);
*/

var r = '';
// prettier-ignore
switch (dia) {
  case 1: r = 'Domingo'; break;
  case 2: r = 'Segunda'; break;
  case 3: r = 'Terça'; break;
  case 4: r = 'Quarta'; break;
  case 5: r = 'Quinta'; break;
  case 6: r = 'Sexta'; break;
  case 7: r = 'Sabado'; break;

  default: r = 'Dia invalido';
}
