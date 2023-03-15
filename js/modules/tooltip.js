export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // Bind of the classes' objects to callbacks
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move the tooltip based on your styles and the mouse position
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove the tooltip and the events of mouseleave and mousemove
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Create the tooltip box in the body
  tocreateTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Create a tooltip, add mousemove and mouseleave events to target
  onMouseOver({ currentTarget }) {
    // Create the tooltip box in a property
    this.tocreateTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Add mouseover's event in each tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
