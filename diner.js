/*Cree un menú Diner en JAVASCRIPT. Aquí están sus instrucciones para construir ese Diner.
> Bottega Diner
> Tenga el menú principal y un menú de acompañamientos
Obtiene un plato principal y dos opciones de acompañamiento a un costo regular.
- mostrarles todo el menú (imprimir)
- Un usuario selecciona un plato principal.
- "Camarera" hace un comentario basado en su selección:
    el comentario puede ser una comparación de los dos elementos o un comentario aleatorio
    extraído de una bóveda de comentarios.
- Dígales el precio
- repita las opciones anteriores para opciones adicionales (comentario y precio)
- totalice el costo

BONIFICACIÓN
Tenga menú de desayuno, almuerzo y cena. El desayuno tiene diferentes artículos, el almuerzo y la cena tienen los mismos artículos pero tienen precios diferentes.

BONIFICACIÓN: permite la personalización de artículos (cómo se preparan los artículos, decide las implicaciones de costos adicionales)*/

const mainMenu = {
  'Cheeseburger': 12,
  'Bacon Cheeseburger': 15,
  'HotDog': 10,
  'VeggieBurger': 12,
}

const sides = {
  'French Fries': 6,
  'Green Beans': 5,
  'Onion Rings': 5,
  'Side Salad': 7
}

alert("Hi there! Welcome to the Bottega Diner."); 
alert("My name is Sally and today I will be your waitress.");

const menuOne = (mainMenu) => {
  const choiceOne = prompt(`The menu is: ${Object.keys(mainMenu)[0]}, ${Object.keys(mainMenu)[1]}, ${Object.keys(mainMenu)[2]} and ${Object.keys(mainMenu)[3]}. What do you want to choose?`).trim().toLowerCase();

  if (choiceOne === Object.keys(mainMenu)[0].trim().toLowerCase()) {
    confirm(`Excellent Choice! That will be ${Object.values(mainMenu)[0]}$`);
    return Object.values(mainMenu)[0];
  }
  else if (choiceOne === Object.keys(mainMenu)[1].trim().toLowerCase()) {
    confirm(`Very good. That will be ${Object.values(mainMenu)[1]}$`);
    return Object.values(mainMenu)[1];
  }
  else if (choiceOne === Object.keys(mainMenu)[2].trim().toLowerCase()) {
    confirm(`Delicious!. That will be ${Object.values(mainMenu)[2]}$`);
    return Object.values(mainMenu)[2];
  }
  else if (choiceOne === Object.keys(mainMenu)[3].trim().toLowerCase()) {
    confirm(`Very healthy!. That will be ${Object.values(mainMenu)[3]}$`);
    return Object.values(mainMenu)[3];
  }
  else {
    prompt(`The menu is: ${Object.keys(mainMenu)}`).trim().toLowerCase();
  }
}

function sidesTwo(sides) {
  const choiceTwo = prompt(`Which would you like for your first side? ${Object.keys(sides)[0]}, ${Object.keys(sides)[1]}, ${Object.keys(sides)[2]} and ${Object.keys(sides)[3]}.`).trim().toLowerCase();

  if (choiceTwo === Object.keys(sides)[0].trim().toLowerCase()) {
    confirm(`Very good! That will be ${Object.values(sides)[0]}$`);
    return Object.values(sides)[0];
  }
  else if (choiceTwo === Object.keys(sides)[1].trim().toLowerCase()) {
    confirm(`Excellent Choice! That will be ${Object.values(sides)[1]}$`);
    return Object.values(sides)[1];
  }
  else if (choiceTwo === Object.keys(sides)[2].trim().toLowerCase()) {
    confirm(`Delicious! That will be ${Object.values(sides)[2]}$`);
    return Object.values(sides)[2];
  }
  else if (choiceTwo === Object.keys(sides)[3].trim().toLowerCase()) {
    confirm(`My favorite. That will be ${Object.values(sides)[3]}$`);
    return Object.values(sides)[3];
  }
  else {
    prompt(`Which would you like for your side? ${Object.keys(sides)}`).trim().toLowerCase();
  }
}

function sidesThree(sides) {
  const choiceThree = prompt(`Which would you like for your second side? ${Object.keys(sides)[0]}, ${Object.keys(sides)[1]}, ${Object.keys(sides)[2]} and ${Object.keys(sides)[3]}.`).trim().toLowerCase();

  if (choiceThree === Object.keys(sides)[0].trim().toLowerCase()) {
    confirm(`Very good! That will be ${Object.values(sides)[0]}$`);
    return Object.values(sides)[0];
  }
  else if (choiceThree === Object.keys(sides)[1].trim().toLowerCase()) {
    confirm(`Excellent Choice! That will be ${Object.values(sides)[1]}$`);
    return Object.values(sides)[1];
  }
  else if (choiceThree === Object.keys(sides)[2].trim().toLowerCase()) {
    confirm(`Delicious! That will be ${Object.values(sides)[2]}$`);
    return Object.values(sides)[2];
  }
  else if (choiceThree === Object.keys(sides)[3].trim().toLowerCase()) {
    confirm(`My favorite. That will be ${Object.values(sides)[3]}$`);
    return Object.values(sides)[3];
  }
  else {
    prompt(`Which would you like for your side? ${Object.keys(sides)}`).trim().toLowerCase();
  }
}

var total = 0;
const totalPrice = function() {

  total += menuOne(mainMenu);
  total += sidesTwo(sides);
  total += sidesThree(sides);
  confirm(`The bill is ${total}$.`);
  return total;
}

export default function() {
  console.log(totalPrice())
}

