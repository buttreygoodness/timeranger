
/**
 * Class for determining time ranges and applying corresponding changes to the dom.
 * @param {Object} config configuration file containing directives.
 */
var BusterTimeSeries;

BusterTimeSeries = (function() {
  function BusterTimeSeries(config) {
    this.config = config;
    console.log('BusterTimeSeries -----');
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
    if (window.Enabler) {
      return el.setAttribute('sources', Enabler.getUrl(video_uri));
    } else {
      return el.setAttribute('src', video_uri);
    }
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
    var _temp_days_before, days_before, weeks_before;
    days_before = this.currentDate.diff(this.targetDate, 'days');
    weeks_before = this.currentDate.diff(this.targetDate, 'weeks');
    _temp_days_before = days_before * -1;
    if (this.config.images) {
      this.setImageElement(this.config.images[(_temp_days_before + 1) + '_days_before'] || this.config.images.outside_week);
    }
    if (this.config.videos) {
      return this.setVideoElement(this.config.images[(_temp_days_before + 1) + '_days_before'] || this.config.videos.outside_week);
    }
  };

  BusterTimeSeries.prototype.setThisWeekImage = function() {
    var _temp_days_before, days_before, temp_target_date;
    days_before = this.currentDate.diff(this.targetDate, 'days');
    temp_target_date = moment(this.config.targetDate);
    if (this.currentDate.isSame(this.targetDate, 'day')) {
      if (this.config.images) {
        this.setImageElement(this.config.images.today);
      }
      if (this.config.videos) {
        this.setVideoElement(this.config.videos.today);
      }
      return;
    }
    if (days_before === -0) {
      if (this.config.images) {
        this.setImageElement(this.config.images.tomorrow);
      }
      if (this.config.videos) {
        this.setVideoElement(this.config.videos.tomorrow);
      }
      return;
    }
    if (this.currentDate.isAfter(this.targetDate, 'day')) {
      return this.setWeekAfterImage(false);
    }
    _temp_days_before = days_before * -1;
    if (this.config.images) {
      this.setImageElement(this.config.images[(_temp_days_before + 1) + '_days_before'] || this.config.images.inside_week);
    }
    if (this.config.videos) {
      return this.setVideoElement(this.config.videos[(_temp_days_before + 1) + '_days_before'] || this.config.videos.inside_week);
    }
  };

  BusterTimeSeries.prototype.setWeekAfterImage = function(evergreen) {
    var days_after, weeks_after;
    weeks_after = this.currentDate.diff(this.targetDate, 'weeks');
    days_after = this.currentDate.diff(this.targetDate, 'days');
    if (this.config.images) {
      if (this.config.images[days_after + '_days_after']) {
        evergreen = false;
      }
    }
    if (evergreen !== false) {
      if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday() && this.evergreen_day_of) {
        if (this.config.videos) {
          this.setVideoElement(this.config.videos.sustaining_today);
        }
        if (this.config.images) {
          this.setImageElement(this.config.images.sustaining_today);
        }
        return;
      }
      if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday() - 1 && this.evergreen_day_before) {
        if (this.config.videos) {
          this.setVideoElement(this.config.videos.sustaining_tomorrow);
        }
        if (this.config.images) {
          this.setImageElement(this.config.images.sustaining_tomorrow);
        }
        return;
      }
    }
    if (this.config.videos) {
      this.setVideoElement(this.config.videos[days_after + '_days_after'] || this.config.videos.sustaining_generic);
    }
    if (this.config.images) {
      return this.setImageElement(this.config.images[days_after + '_days_after'] || this.config.images.sustaining_generic);
    }
  };

  return BusterTimeSeries;

})();

window.BusterTimeSeries = BusterTimeSeries;
