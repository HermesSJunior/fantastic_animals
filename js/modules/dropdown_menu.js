import outsideClick from './outsideclick.js';

export default function initDropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function clickHandle(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, clickHandle);
    });
  });
}
