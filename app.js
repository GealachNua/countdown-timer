const timerDayEl = document.querySelector('.timer__day');
const timerHourEl = document.querySelector('.timer__hour');
const timerMinEl = document.querySelector('.timer__min');
const timerSecEl = document.querySelector('.timer__sec');
const messageEl = document.querySelector('.message');
const timerEl = document.querySelector('.timer');

function getTimeDifference(start, end) {
  const milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  // Vvolgorde hier onder van seconds, minutes en hours is hier belangrijk
  // Omgedraaid werken ze verkeerd doordat de waardes gewijzigd zijn..
  seconds -= (minutes * 60);
  minutes -= (hours * 60);
  hours -= (days * 24);
  return {
    deltaDays: days,
    deltaHours: hours,
    deltaMin: minutes,
    deltaSec: seconds,
  };
}

const timer = setInterval(() => {
  const startDate = new Date();
  const endDate = new Date('October 27, 2018 18:00:00z');
  if ((endDate - startDate) > 0) {
    const timeDifferenceObj = getTimeDifference(startDate, endDate);
    timerDayEl.textContent = ((timeDifferenceObj.deltaDays < 10) ? '0' : '') + timeDifferenceObj.deltaDays;
    timerHourEl.textContent = ((timeDifferenceObj.deltaHours < 10) ? '0' : '') + timeDifferenceObj.deltaHours;
    timerMinEl.textContent = ((timeDifferenceObj.deltaMin < 10) ? '0' : '') + timeDifferenceObj.deltaMin;
    timerSecEl.textContent = ((timeDifferenceObj.deltaSec < 10) ? '0' : '') + timeDifferenceObj.deltaSec;
  } else {
    timerEl.classList.add('hidden');
    messageEl.classList.remove('hidden');
    clearInterval(timer);
  }
}, 1000);
