moment = require('moment')

if !('contains' of String.prototype)
  String::contains = (str, startIndex) ->
    ''.indexOf.call(this, str, startIndex) != -1

class BusterTimeSeries
  constructor: (@config) ->

  init: () ->
    @targetDate = moment(config.targetDate)
    @element = document.getElementById config.element
    @currentDate = moment()
    @getOffset()

  getOffset: () ->
    offsetString = @targetDate.fromNow()
    weeks = @targetDate.diff(@currentDate, 'weeks')
    days = @targetDate.diff(@currentDate, 'days')
    hours = @targetDate.diff(@currentDate, 'hours')
    console.log @getImage weeks, days, hours

    @element.setAttribute('src', @getImage(weeks, days, hours))

  getImage: (weeks, days, hours) ->
    console.log weeks, days, hours
    if weeks == 0 && days == 0 #more than one hour ahead
      return @config.images[hours + '_hours_behind'] || @config.images.today
    if weeks > 0 #more than one week ahead
      return @config.images[weeks + '_weeks_ahead'] || @config.images.evergreen_ahead
    if days > 0 #more than one day ahead
      return @config.images[days + '_days_ahead'] || @config.images.evergreen_ahead
    if hours > 0 #more than one hour ahead
      return @config.images[hours + '_hours_ahead'] || @config.images.evergreen_ahead
    if weeks < 0 #more than one week ahead
      return @config.images[weeks + '_weeks_behind'] || @config.images.evergreen_behind
    if days < 0 #more than one day ahead
      return @config.images[days + '_days_behind'] || @config.images.evergreen_behind
    if hours < 0 #more than one hour ahead
      return @config.images[hours + '_hours_behind'] || @config.images.evergreen_behind

window.BusterTimeSeries = BusterTimeSeries

# config
# target_date: 2015-09-20 10:30-07:00         # An hour and minute time part with timezone offset