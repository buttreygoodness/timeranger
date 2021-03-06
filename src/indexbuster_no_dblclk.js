
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
    return el.setAttribute('src', video_uri);
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
    var days_before, weeks_before;
    days_before = this.currentDate.diff(this.targetDate, 'days');
    weeks_before = this.currentDate.diff(this.targetDate, 'weeks');
    if (weeks_before === -0 && days_before === -6) {
      if (this.config.images) {
        this.setImageElement(this.config.images.outside_weeks_before);
      }
      if (this.config.videos) {
        this.setVideoElement(this.config.videos.outside_weeks_before);
      }
      return;
    }
    if (this.config.images) {
      this.setImageElement(this.config.images[weeks_before + '_weeks'] || this.config.images.outside_weeks_before);
    }
    if (this.config.videos) {
      return this.setVideoElement(this.config.videos[weeks_before + '_weeks'] || this.config.videos.outside_weeks_before);
    }
  };

  BusterTimeSeries.prototype.setThisWeekImage = function() {
    var days_before, temp_target_date;
    days_before = this.currentDate.diff(this.targetDate, 'days');
    temp_target_date = moment(this.config.targetDate);
    if (this.currentDate.isSame(this.targetDate, 'day')) {
      if (this.config.images) {
        this.setImageElement(this.config.images.tonight);
      }
      if (this.config.videos) {
        this.setVideoElement(this.config.videos.tonight);
      }
      return;
    }
    if (this.currentDate.isAfter(this.targetDate, 'day')) {
      if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday()) {
        if (this.config.images) {
          this.setImageElement(this.config.images.tonight);
        }
        if (this.config.videos) {
          this.setVideoElement(this.config.videos.tonight);
        }
        return;
      } else {
        return this.setWeekAfterImage(false);
      }
    }
    if (this.config.images) {
      this.setImageElement(this.config.images[days_before + '_days'] || this.config.images.outside_days_before);
    }
    if (this.config.videos) {
      return this.setVideoElement(this.config.videos[days_before + '_days'] || this.config.videos.outside_days_before || this.config.videos.outside_weeks_before);
    }
  };

  BusterTimeSeries.prototype.setWeekAfterImage = function(evergreen) {
    var weeks_after;
    weeks_after = this.currentDate.diff(this.targetDate, 'weeks');
    if (evergreen !== false) {
      if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday() && this.evergreen_day_of) {
        if (this.config.videos) {
          this.setVideoElement(this.config.videos.evergreen_day_of);
        }
        if (this.config.images) {
          this.setImageElement(this.config.images.evergreen_day_of);
        }
        return;
      }
      if (this.currentDate.isoWeekday() === this.targetDate.isoWeekday() - 1 && this.evergreen_day_before) {
        if (this.config.videos) {
          this.setVideoElement(this.config.videos.evergreen_day_before);
        }
        if (this.config.images) {
          this.setImageElement(this.config.images.evergreen_day_before);
        }
        return;
      }
    }
    if (this.config.videos) {
      this.setVideoElement(this.config.videos[weeks_after + '_weeks_after'] || this.config.videos.evergreen_weeks_after);
    }
    if (this.config.images) {
      return this.setImageElement(this.config.images[weeks_after + '_weeks_after'] || this.config.images.evergreen_weeks_after);
    }
  };

  return BusterTimeSeries;

})();

window.BusterTimeSeries = BusterTimeSeries;
