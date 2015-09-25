var BusterTimeSeries, moment;

moment = require('moment');

if (!('contains' in String.prototype)) {
  String.prototype.contains = function(str, startIndex) {
    return ''.indexOf.call(this, str, startIndex) !== -1;
  };
}

BusterTimeSeries = (function() {
  function BusterTimeSeries(config1) {
    this.config = config1;
  }

  BusterTimeSeries.prototype.init = function() {
    this.targetDate = this.targetDate || moment(config.targetDate);
    this.currentDate = this.currentDate || moment();
    this.element = document.getElementById(config.element);
    return this.getOffset();
  };

  BusterTimeSeries.prototype.update = function(target_date, current_date) {
    this.targetDate = moment(target_date) || this.targetDate;
    this.currentDate = moment(current_date) || this.currentDate;
    console.log(this.targetDate, this.currentDate);
    return this.getOffset();
  };

  BusterTimeSeries.prototype.getOffset = function() {
    var days, hours, offsetString, weeks;
    offsetString = this.targetDate.fromNow();
    weeks = this.targetDate.diff(this.currentDate, 'weeks');
    days = this.targetDate.diff(this.currentDate, 'days');
    hours = this.targetDate.diff(this.currentDate, 'hours');
    return this.getTimeDifference();
  };

  BusterTimeSeries.prototype.getTimeDifference = function() {
    var day_after, day_before, this_week, today, week_after, week_before;
    week_before = this.currentDate.isBefore(this.targetDate, 'week');
    this_week = this.currentDate.isSame(this.targetDate, 'week');
    week_after = this.currentDate.isAfter(this.targetDate, 'week');
    day_before = this.currentDate.isBefore(this.targetDate, 'day');
    day_after = this.currentDate.isAfter(this.targetDate, 'day');
    today = this.currentDate.isSame(this.targetDate, 'day');
    console.log('week_before = ' + week_before);
    console.log('today = ' + today);
    console.log('day_before = ' + day_before);
    console.log('day_after = ' + day_after);
    console.log('this_week = ' + this_week);
    return console.log('week_after = ' + week_after);
  };

  BusterTimeSeries.prototype.setWeekBeforeImage = function() {};

  BusterTimeSeries.prototype.setThisWeekImage = function() {};

  BusterTimeSeries.prototype.setWeekAfterImage = function() {};

  BusterTimeSeries.prototype.setDayBeforeImage = function() {};

  BusterTimeSeries.prototype.setTodayImage = function() {};

  BusterTimeSeries.prototype.setDayAfterImage = function() {};

  BusterTimeSeries.prototype.getImage = function(weeks, days, hours) {
    console.log(weeks, days, hours);
    if (weeks === 0 && days === 0) {
      return this.config.images[hours + '_hours_behind'] || this.config.images.today;
    }
    if (weeks > 0) {
      return this.config.images[weeks + '_weeks_ahead'] || this.config.images.evergreen_ahead;
    }
    if (days > 0) {
      return this.config.images[days + '_days_ahead'] || this.config.images.evergreen_ahead;
    }
    if (hours > 0) {
      return this.config.images[hours + '_hours_ahead'] || this.config.images.evergreen_ahead;
    }
    if (weeks < 0) {
      return this.config.images[weeks + '_weeks_behind'] || this.config.images.evergreen_behind;
    }
    if (days < 0) {
      return this.config.images[days + '_days_behind'] || this.config.images.evergreen_behind;
    }
    if (hours < 0) {
      return this.config.images[hours + '_hours_behind'] || this.config.images.evergreen_behind;
    }
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
      console.log(target_date);
      return btr.update(target_date.value, this.value);
    }
  });
  return target_date.addEventListener('change', function() {
    console.log('target_date changed', this.value);
    if (btr) {
      return btr.update(this.value, current_date.value);
    }
  });
};
