window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

/*
map e filter são metodos IMUTAVEIS, eles não alteram,
mas sim geram um novo vetor
*/

// map: gera um novo array transformando os dados.
// Transformar array em objeto com nome e email
function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}

// filter: gera um novo array filtrando elementos com base em proposições.
// maiores de 18 anos
function doFilter() {
  const olderThan18 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThan18);
}

// forEach: percorre todos os elementos do array, aplicando lógica.
// incluir nova propriedade no objeto
function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

// reduce: realiza cáculo iterativo com base nos elementos.
// soma de todas as idades
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);
}

// find: encontra elementos com base em proposições(retorna elemento).
// primeiro usuário de Minas Gerais
function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}

// some: verifica se há pelo menos um elemento que atenda á proposição(return boolean).
// usuários de Amazonas
function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

// every: verifica se todos os elementos atendem á proposição(return boolean).
// nat = 'BR'
function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(every);
}

// sort: ordena os elementos com base em um critério.
// ordenar por nome e idade ASC e DESC
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
      // return a.name.length - a.name.length;
    });

  console.log(mappedNames);
}
