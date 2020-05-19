console.log('Olá, mundo!');

var title = document.querySelector('h1');
console.log(title);

title.textContent = 'Mudei';

var city = document.querySelector('#city');
console.log(city);

city.textContent = 'Quixada';

var personalDataArray = document.querySelectorAll('li');
console.log(personalDataArray);

personalDataArray = Array.from(personalDataArray);
console.log(personalDataArray);

var data = Array.from(document.querySelectorAll('.data'));
console.log(data);

for (var i = 0; i < data.length; i++) {
  var currentElement = data[i];
  currentElement.style.color = 'green';
}
console.log(currentElement);
