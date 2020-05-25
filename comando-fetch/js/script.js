// Fetch: utilizado para requisições HTTP.

// Promise: resolve problemas de callback hell
// resolvida: then
// rejeitada: catch

window.addEventListener('load', function () {
  doFetch();
  doFetchAsync();

  divisionPromise(12, 6).then((result) => {
    console.log(result);
  });

  executeDivisionPromise();
  executeDivisionPromiseAsyncAwait();
});

/*
fetch('https://api.github.com/users/rrgomide').then((resource) => {
  //console.log(resource); // dados binários
  resource.json().then((data) => {
    console.log(data);
  }); // dados
});
*/
function doFetch() {
  fetch('https://api.github.com/users/rrgomide')
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((error) => {
      console.log('Erro na requisição');
    });
}

// estrutura async/await:
async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/rrgomide');
  const json = await res.json();
  console.log(json);
}

function showData(data) {
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
}
// promise
// dividir 2 numeros

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b == 0) {
      reject('Não é possivel dividir por 0');
    }
    resolve(a / b);
  });
}

function executeDivisionPromise() {
  divisionPromise(12, 0)
    .then((result) => {
      console.log(result);
    })
    .catch((errorMessage) => {
      console.log('Falha na divisão ' + errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
  const division = await divisionPromise(12, 2);
  console.log(division);
}
