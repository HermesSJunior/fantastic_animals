export default function initModal() {
  const buttonToOpen = document.querySelector('[data-modal="toOpen"]');
  const buttonToClose = document.querySelector('[data-modal="toClose"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('active');
  }

  function clickOutModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (buttonToOpen && buttonToClose && containerModal) {
    buttonToOpen.addEventListener('click', toggleModal);
    buttonToClose.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickOutModal);
  }
}
