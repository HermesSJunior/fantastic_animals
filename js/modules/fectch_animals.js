import NumbersAnimation from './numbers_animation.js';

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('number_animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numbersGrid = document.querySelector('.numbers_grid');
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numbersGrid.appendChild(divAnimal);
      });
      const numbersAnimation = new NumbersAnimation('[data-number]', '.numbers', 'active');
      numbersAnimation.init();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimals('./animalsAPI.json');
}
