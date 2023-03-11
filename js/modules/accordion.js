export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeAccordion = 'active';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeAccordion);
    item.nextElementSibling.classList.toggle(this.activeAccordion);
  }

  // to add events in accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // to start function
  init() {
    if (this.accordionList.length) {
      // to active the first item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
