var BusterTimeSeries, moment;

moment = require('moment');

BusterTimeSeries = (function() {
  function BusterTimeSeries(config1) {
    this.config = config1;
  }

  BusterTimeSeries.prototype.init = function() {
    this.targetDate = this.targetDate || moment(config.targetDate);
    this.currentDate = this.currentDate || moment();
    this.evergreen_day_before = config.evergreen_day_before || false;
    this.evergreen_day_of = config.evergreen_day_of || false;
    this.element = document.getElementById(config.element);
    return this.getTimeDifference();
  };

  BusterTimeSeries.prototype.update = function(target_date, current_date) {
    this.targetDate = moment(target_date) || this.targetDate;
    this.currentDate = moment(current_date) || this.currentDate;
    return this.getTimeDifference();
  };

  BusterTimeSeries.prototype.setElementImage = function(image_name) {
    return this.element.setAttribute('src', image_name);
  };

  BusterTimeSeries.prototype.getTimeDifference = function() {
    var this_week, week_after, week_before;
    week_before = this.currentDate.isBefore(this.targetDate, 'week');
    this_week = this.currentDate.isSame(this.targetDate, 'week');
    week_after = this.currentDate.isAfter(this.targetDate, 'week');
    if (week_before) {
      return this.setWeekBeforeImage();
    }
    if (this_week) {
      return this.setThisWeekImage();
    }
    if (week_after) {
      return this.setWeekAfterImage();
    }
  };

  BusterTimeSeries.prototype.setWeekBeforeImage = function() {
    var weeks_before;
    weeks_before = this.currentDate.diff(this.targetDate, 'weeks');
    return this.setElementImage(this.config.images[weeks_before + '_weeks'] || this.config.images.evergreen_weeks_before);
  };

  BusterTimeSeries.prototype.setThisWeekImage = function() {
    var days_before;
    days_before = this.currentDate.diff(this.targetDate, 'days');
    return this.setElementImage(this.config.images[days_before + '_days'] || this.config.images.evergreen_days_before);
  };

  BusterTimeSeries.prototype.setWeekAfterImage = function() {
    var weeks_after;
    weeks_after = this.currentDate.diff(this.targetDate, 'weeks');
    if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday() && this.evergreen_day_of) {
      return this.setElementImage(this.config.images.evergreen_day_of);
    }
    if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday() - 1 && this.evergreen_day_before) {
      return this.setElementImage(this.config.images.evergreen_day_before);
    }
    return this.setElementImage(this.config.images[weeks_after + '_weeks'] || this.config.images.evergreen_weeks_after);
  };

  return BusterTimeSeries;

})();

window.BusterTimeSeries = BusterTimeSeries;

window.formHelper = function() {
  var current_date, target_date;
  current_date = document.getElementById('current_date');
  current_date.value = btr.currentDate.format();
  target_date = document.getElementById('target_date');
  target_date.value = btr.targetDate.format();
  current_date.addEventListener('change', function() {
    if (btr) {
      return btr.update(target_date.value, this.value);
    }
  });
  return target_date.addEventListener('change', function() {
    if (btr) {
      return btr.update(this.value, current_date.value);
    }
  });
};
