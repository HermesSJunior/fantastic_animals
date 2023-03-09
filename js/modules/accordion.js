export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-animation="accordion"] dt');
  const stateClass = 'active';

  function activeAccordion() {
    this.classList.toggle(stateClass);
    this.nextElementSibling.classList.toggle(stateClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(stateClass);
    accordionList[0].nextElementSibling.classList.add(stateClass);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
