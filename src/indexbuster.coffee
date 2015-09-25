moment = require('moment')

if !('contains' of String.prototype)
  String::contains = (str, startIndex) ->
    ''.indexOf.call(this, str, startIndex) != -1

class BusterTimeSeries
  constructor: (@config) ->
    # config
    # target_date: 2015-09-20 10:30-07:00           # An hour and minute time part with timezone offset
    # current_date: 2015-09-20 10:30-07:00          # An hour and minute time part with timezone offset

  init: () ->
    @targetDate = @targetDate || moment(config.targetDate)
    @currentDate = @currentDate || moment()
    @element = document.getElementById config.element
    @getOffset()

  update: (target_date, current_date) ->
    @targetDate = moment(target_date) || @targetDate
    @currentDate = moment(current_date) || @currentDate
    console.log @targetDate, @currentDate
    @getOffset()

  getOffset: () ->
    offsetString = @targetDate.fromNow()
    weeks = @targetDate.diff(@currentDate, 'weeks')
    days = @targetDate.diff(@currentDate, 'days')
    hours = @targetDate.diff(@currentDate, 'hours')
    @getTimeDifference()
    # @element.setAttribute('src', @getImage(weeks, days, hours))

  getTimeDifference: () ->
    week_before = @currentDate.isBefore(@targetDate, 'week')
    this_week = @currentDate.isSame(@targetDate, 'week')
    week_after = @currentDate.isAfter(@targetDate, 'week')
    day_before = @currentDate.isBefore(@targetDate, 'day')
    day_after = @currentDate.isAfter(@targetDate, 'day')
    today = @currentDate.isSame(@targetDate, 'day')

    console.log 'week_before = ' + week_before
    console.log 'today = ' + today
    console.log 'day_before = ' + day_before
    console.log 'day_after = ' + day_after
    console.log 'this_week = ' + this_week
    console.log 'week_after = ' + week_after

  setWeekBeforeImage: ->

  setThisWeekImage: ->

  setWeekAfterImage: ->

  setDayBeforeImage: ->

  setTodayImage: ->

  setDayAfterImage: ->

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

window.formHelper = ->
  current_date = document.getElementById('current_date')
  current_date.value = btr.currentDate.format()

  target_date = document.getElementById('target_date')
  target_date.value = btr.targetDate.format()

  current_date.addEventListener 'change', ->
    if btr
      console.log target_date
      btr.update target_date.value, @value

  target_date.addEventListener 'change', ->
    console.log 'target_date changed', @value
    if btr
      btr.update @value, current_date.value