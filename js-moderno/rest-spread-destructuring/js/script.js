window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});

// Spread: espalha elementos do vetor (spread)
// contatenar 2 objetos [Mr + Ms]
function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );

  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );
  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'Oi' }];
  console.log(marriedPeople);
}

// Rest: agrupa elementos em funções (rest).
// criar função de soma infinita
function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Destructuring:
// Pesmite uma melhor escrita e legibilidade de código.
// Compatível com arrays e objetos.
// criar variáveis a partir do objeto.
function doDestructuring() {
  const first = people.results[0];

  // repetitivo
  // const username = first.login.username;
  // const password = first.login.password;

  // Usando destructuring
  const { username, passaword } = first.login;

  console.log(username);
  console.log(passaword);
}
