export default class DateObject {
  constructor(officeHour, activeClass) {
    this.officeHour = document.querySelector(officeHour);
    this.activeClass = activeClass;
  }

  dataOfficeHour() {
    this.weekDays = this.officeHour.dataset.week.split(',').map(Number);
    this.weekHours = this.officeHour.dataset.hour.split(',').map(Number);
  }

  currentDate() {
    this.nowDate = new Date();
    this.nowDay = this.nowDate.getDay();
    this.nowHour = this.nowDate.getUTCHours() - 3;
  }

  isWorking() {
    const weekWorking = this.weekDays.indexOf(this.nowDay) !== -1;
    const hourWorking = (this.nowHour >= this.weekHours[0] && this.nowHour < this.weekHours[1]);
    return weekWorking && hourWorking;
  }

  activeWorking() {
    if (this.isWorking()) {
      this.officeHour
        .classList.add(this.activeClass);
    }
  }

  init() {
    if (this.officeHour
    ) {
      this.dataOfficeHour();
      this.currentDate();
      this.activeWorking();
    }
    return this;
  }
}
