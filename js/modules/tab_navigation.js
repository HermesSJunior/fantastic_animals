export default class TabNavigation {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  // Actice tab with the index
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.animation;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  // Add the tab events
  addTabNavigationEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // To active the first item
      this.activeTab(0);
      this.addTabNavigationEvent();
    }
    return this;
  }
}
