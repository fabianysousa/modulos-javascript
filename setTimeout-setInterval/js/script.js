// setTimeout
// utilizado para postergar a execução de uma função
// tempo de atraso configurável em milissegundos

// setInterval
// semelhante ao setTimeout, mas repete a excução a cada x milissegundos
// pode ser cancelada com clearInterval, porém guardando a referência em uma variável)

/* Exemplo: contador que mostra números de um em um a cada segundo e, 
quando o número for um multiplo de 5, mostra +0,5 apos meio segundo. 
Criar botão para cancelar execução */

window.addEventListener('load', function () {
  const timer = document.querySelector('#timer');
  let count = 0;
  const interval = setInterval(() => {
    timer.textContent = count++;
    if (count === 10) {
      this.textInterval(interval);
      return;
    }
    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + ',5';
      }, 500);
    }
  }, 1000);
});
