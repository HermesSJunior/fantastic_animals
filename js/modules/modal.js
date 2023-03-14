export default class Modal {
  constructor(buttonToOpen, buttonToClose, containerModal) {
    this.buttonToOpen = document.querySelector(buttonToOpen);
    this.buttonToClose = document.querySelector(buttonToClose);
    this.containerModal = document.querySelector(containerModal);

    // Bind this in callback to do reference to class' object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  // Open or close modal
  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  // Add toggle's event in modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Close modal to outside click
  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // Add the events to modal's elements
  addModalEvents() {
    this.buttonToOpen.addEventListener('click', this.eventToggleModal);
    this.buttonToClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  init() {
    if (this.buttonToOpen && this.buttonToClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
