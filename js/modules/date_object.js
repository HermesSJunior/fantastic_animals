export default class DateObject {
  constructor(dataWeek, activeClass) {
    this.officeWeek = document.querySelector(dataWeek);
    this.activeClass = activeClass;
  }

  officeWeek() {
    this.daysWeek = this.officeWeek.dataset.week.split(',').map(Number);
    this.hoursDay = this.officeWeek.dataset.hour.split(',').map(Number);
  }

  dateNow() {
    this.dateNow = new Date();
    this.nowDay = this.dateNow.getDay();
    this.nowHours = this.dateNow.getUTCHours() - 3;
  }

  isWorking() {
    const weekOpen = this.daysWeek.indexOf(this.nowDay) !== -1;
    const hoursOpen = (this.nowHours >= this.hoursDay[0] && this.nowHours < this.hoursDay[1]);
    return weekOpen && hoursOpen;
  }

  activeWork() {
    if (this.isWorking()) {
      this.officeWeek.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.dataWeek) {
      this.officeWeek();
      this.dateNow();
      this.activeWork();
    }
    return this;
  }
}
