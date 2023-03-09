export default function initDateObject() {
  const officeWeek = document.querySelector('[data-week]');
  const daysWeek = officeWeek.dataset.week.split(',').map(Number);
  const hoursDay = officeWeek.dataset.hour.split(',').map(Number);
  const dateNow = new Date();
  const nowDay = dateNow.getDay();
  const nowHours = dateNow.getHours();
  const weekOpen = daysWeek.indexOf(nowDay) !== -1;
  const hoursOpen = (nowHours >= hoursDay[0] && nowHours < hoursDay[1]);

  if (weekOpen && hoursOpen) {
    officeWeek.classList.add('open');
  }
}
