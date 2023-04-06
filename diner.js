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
    prompt(`I'll be back when it's decided.`);
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
    prompt(`I'll be back when it's decided.`);
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
    prompt(`I'll be back when it's decided.`);
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

