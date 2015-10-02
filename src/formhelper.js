window.formHelper = function(btr) {
  var current_date, day_of_week, next_button, previous_button, target_date;
  current_date = document.getElementById('current_date');
  current_date.value = btr.currentDate.format();
  target_date = document.getElementById('target_date');
  target_date.value = btr.targetDate.format();
  previous_button = document.getElementById('previous');
  next_button = document.getElementById('next');
  day_of_week = document.getElementById('day-of-week');
  day_of_week.textContent = btr.currentDate.weekday();
  current_date.addEventListener('change', function() {
    if (btr) {
      btr.update(target_date.value, this.value);
      return day_of_week.textContent = moment(this.value).weekday();
    }
  });
  target_date.addEventListener('change', function() {
    if (btr) {
      return btr.update(this.value, current_date.value);
    }
  });
  next_button.addEventListener('click', function(event) {
    if (btr) {
      btr.update(target_date.value, btr.currentDate.add(1, 'days'));
      document.getElementById('current_date').value = btr.currentDate.format();
      return day_of_week.textContent = btr.currentDate.weekday();
    }
  });
  return previous_button.addEventListener('click', function(event) {
    if (btr) {
      btr.update(target_date.value, btr.currentDate.subtract(1, 'days'));
      document.getElementById('current_date').value = btr.currentDate.format();
      return day_of_week.textContent = btr.currentDate.weekday();
    }
  });
};
