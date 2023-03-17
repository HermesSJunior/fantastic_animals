import NumbersAnimation from './numbers_animation.js';

export default function fetchAnimals(url, target) {
  // Create the div with total animal's information
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number_animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  // Fill each animal in DOM
  const numbersGrid = document.querySelector(target);
  function toFillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  // Animate the numbers each animal
  function toAnimateAnimalsNumbers() {
    const numbersAnimation = new NumbersAnimation('[data-number]', '.numbers', 'active');
    numbersAnimation.init();
  }

  // Get the animals through a json file and create each animal using toCreateAnimals
  async function toCreateAnimals() {
    try {
      // Fetch wait the response ans transform in json
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      // Before the json's transformation, active the functions to fill and animate numbers
      animalsJSON.forEach((animal) => toFillAnimals(animal));
      toAnimateAnimalsNumbers();
    } catch (error) {
      console.log(error);
    }
  }
  return toCreateAnimals();
}
