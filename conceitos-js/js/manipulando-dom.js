// querySelector()
// acessa elementos um-a-um
// elementos, classes e id's

var firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// querySelector()
// acessa elementos agrupados do DOM
// retorno do tipo NodeList
// p/ converter array comum, use Array.from
// elementos, classes e id's

var allParagraph = document.querySelectorAll('title');
console.log(allParagraph);
