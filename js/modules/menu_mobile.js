import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuList = document.querySelector(menuList);
    this.menuButton = document.querySelector(menuButton);
    this.activeClass = 'active';

    // Define touchstart and click how default if the user don't define
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.toOpenMenu = this.toOpenMenu.bind(this);
  }

  toOpenMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => this.menuButton.addEventListener(event, this.toOpenMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
