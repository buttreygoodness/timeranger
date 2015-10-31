
/**
 * Class for determining time ranges and applying corresponding changes to the dom.
 * @param {Object} config configuration file containing directives.
 */
var BusterTimeSeries;

BusterTimeSeries = (function() {
  function BusterTimeSeries(config) {
    this.config = config;
  }

  BusterTimeSeries.prototype.init = function() {
    this.targetDate = this.targetDate || moment(this.config.targetDate);
    this.currentDate = this.currentDate || moment();
    this.evergreen_day_before = this.config.evergreen_day_before || false;
    this.evergreen_day_of = this.config.evergreen_day_of || false;
    return this.getTimeDifference();
  };

  BusterTimeSeries.prototype.update = function(target_date, current_date) {
    this.targetDate = moment(target_date) || this.targetDate;
    this.currentDate = moment(current_date) || this.currentDate;
    return this.getTimeDifference();
  };

  BusterTimeSeries.prototype.setImageElement = function(image_uri) {
    var el;
    console.log(image_uri);
    if (!this.config.imageElement) {
      return;
    }
    el = document.getElementById(this.config.imageElement);
    el.setAttribute('src', image_uri);
    return el.setAttribute('source', image_uri);
  };

  BusterTimeSeries.prototype.setVideoElement = function(video_uri) {
    var el;
    if (!this.config.videoElement) {
      return;
    }
    el = document.getElementById(this.config.videoElement);
    if (window.gwd) {
      el.setAttribute('sources', video_uri);
      return setTimeout(function() {
        el.src = el.childNodes[0].src;
        return el.load();
      }, 1000);
    } else {
      return el.setAttribute('src', video_uri);
    }
  };

  BusterTimeSeries.prototype.getTimeDifference = function() {
    var this_week, week_after, week_before;
    week_before = this.currentDate.isBefore(this.targetDate, 'week');
    this_week = this.currentDate.isSame(this.targetDate, 'week');
    week_after = this.currentDate.isAfter(this.targetDate, 'week');
    console.log(this.currentDate);
    console.log(this.targetDate);
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
    console.log('week before image');
    weeks_before = this.currentDate.diff(this.targetDate, 'weeks');
    this.setImageElement(this.config.images[weeks_before + '_weeks'] || this.config.images.outside_weeks_before);
    return this.setVideoElement(this.config.videos[weeks_before + '_weeks'] || this.config.videos.outside_weeks_before);
  };

  BusterTimeSeries.prototype.setThisWeekImage = function() {
    var days_before, temp_target_date;
    days_before = this.currentDate.diff(this.targetDate, 'days');
    console.log('this week image', this.currentDate.isoWeekday(), this.targetDate.isoWeekday(), days_before);
    temp_target_date = moment(this.config.targetDate);
    if (this.currentDate.isAfter(this.targetDate, 'day') || this.currentDate.isAfter(temp_target_date.add(this.config.targetShowDuration, 'minutes'))) {
      return this.setWeekAfterImage(false);
    }
    if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday()) {
      this.setVideoElement(this.config.videos.tonight);
      this.setImageElement(this.config.images.tonight);
      return;
    }
    this.setVideoElement(this.config.videos[days_before + '_days'] || this.config.videos.outside_days_before || this.config.videos.outside_weeks_before);
    return this.setImageElement(this.config.images[days_before + '_days'] || this.config.images.outside_days_before);
  };

  BusterTimeSeries.prototype.setWeekAfterImage = function(evergreen) {
    var weeks_after;
    console.log('week after image');
    weeks_after = this.currentDate.diff(this.targetDate, 'weeks');
    if (evergreen !== false) {
      if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday() && this.evergreen_day_of) {
        this.setVideoElement(this.config.videos.evergreen_day_of);
        return this.setImageElement(this.config.images.evergreen_day_of);
      }
      if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday() - 1 && this.evergreen_day_before) {
        this.setVideoElement(this.config.videos.evergreen_day_before);
        return this.setImageElement(this.config.images.evergreen_day_before);
      }
    }
    this.setVideoElement(this.config.videos[weeks_after + '_weeks_after'] || this.config.videos.evergreen_weeks_after);
    return this.setImageElement(this.config.images[weeks_after + '_weeks_after'] || this.config.images.evergreen_weeks_after);
  };

  return BusterTimeSeries;

})();

window.BusterTimeSeries = BusterTimeSeries;
