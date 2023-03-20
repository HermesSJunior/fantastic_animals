import debounce from './debounce.js';

export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Get the distance each item site' scroll
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  // Verify the distance in each object site' scroll
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove the event scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
