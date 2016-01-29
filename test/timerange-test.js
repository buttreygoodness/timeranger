var assert = chai.assert;

var config = {
  targetDate: '2016-02-26',
  targetShowDuration: 59,

  videoElement: 'videoID',
  imageElement: 'imageID',
  evergreen_day_before: true,
  evergreen_day_of: true,

  videos: {
    'outside_week': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_01.mp4',

    '18_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '17_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '16_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '15_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '14_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '13_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '12_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '11_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '10_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '9_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '8_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '7_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '6_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '5_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '4_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '3_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_02.mp4',
    '2_days_before': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_03.mp4',

    'tomorrow': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_04.mp4',
    'today': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_05.mp4',

    '1_days_after': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_06.mp4',
    '2_days_after': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_07.mp4',
    '3_days_after': 'https://s3-us-west-2.amazonaws.com/nfl-combine-2016/video/300x250_08.mp4'
  }
};

describe('BusterTimeSeries', function() {

  var btr;
  var now = moment();

  beforeEach(function() {
    btr = new BusterTimeSeries(config);
    btr.init();
    document.getElementById('videoID').src = '';
  });

  afterEach(function() {
    document.getElementById('videoID').src = '';
  });

  it('should be an object', function() {
    assert.isObject(btr, 'btr is an Object');
  });

  it('should be an instance of BusterTimeSeries', function() {
    assert.instanceOf(btr, BusterTimeSeries, 'btr is an instance of BusterTimeSeries');
  });

  it('should have the correct currentDate set', function() {
    var _currentDate = [btr.currentDate.year(), btr.currentDate.month(), btr.currentDate.date()].join(' ').toString();
    var _now = [now.year(), now.month(), now.date()].join(' ').toString();
    console.log(_currentDate, _now);
    assert.equal(btr.currentDate.date(), now.date(), 'currentDate is same as now.');
  });

});