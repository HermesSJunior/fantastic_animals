export default class NumbersAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    // Bind the this of the object to mutation's callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Receive a dom's element, with number in your text
  // Increments from 0 until the final number
  static toIncrementNumber(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Active toIncrementNumber for each selected number from dom
  toAnimateNumbers() {
    this.numbers.forEach((number) => this.constructor.toIncrementNumber(number));
  }

  // Function that is actived when mutations happened
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.toAnimateNumbers();
    }
  }

  // Add MutationObserver to verify when the class 'active' is added in target's element
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
