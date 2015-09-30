# moment = require('moment')

class BusterTimeSeries
  constructor: (@config) ->
    # config
    # target_date: '2015-09-20 10:30-07:00'           # An hour and minute time part with timezone offset
    # current_date: '2015-09-20 10:30-07:00'          # An hour and minute time part with timezone offset
    # evergreen_day_before: Boolean                   # Display a special message on the day before air in perpetuity
    # evergreen_day_of: Boolean                       # Display a special message on the day of air in perpetuity

  init: () ->
    @targetDate = @targetDate || moment(@config.targetDate)
    console.log @config.targetDate, @targetDate
    @currentDate = @currentDate || moment()
    @evergreen_day_before = @config.evergreen_day_before || false
    @evergreen_day_of = @config.evergreen_day_of || false
    @element = document.getElementById @config.element
    @getTimeDifference()

  update: (target_date, current_date) ->
    @targetDate = moment(target_date) || @targetDate
    @currentDate = moment(current_date) || @currentDate
    @getTimeDifference()
  
  setElementImage: (image_name) ->
    el = document.getElementById @config.element
    el.setAttribute 'src', image_name
    el.setAttribute 'source', image_name

  getTimeDifference: () ->
    week_before = @currentDate.isBefore(@targetDate, 'week')
    this_week = @currentDate.isSame(@targetDate, 'week')
    week_after = @currentDate.isAfter(@targetDate, 'week')

    if week_before
      console.log 'week_before'
      return @setWeekBeforeImage()
    if this_week
      console.log 'this_week'
      return @setThisWeekImage()
    if week_after
      console.log 'week_after'
      return @setWeekAfterImage()

  setWeekBeforeImage: ->
    weeks_before = @currentDate.diff(@targetDate, 'weeks')
    console.log 'weeks_before = ', weeks_before
    @setElementImage @config.images[weeks_before + '_weeks'] || @config.images.outside_weeks_before

  setThisWeekImage: ->
    days_before = @currentDate.diff(@targetDate, 'days')
    if @currentDate.isoWeekday() == @targetDate.isoWeekday()
      return @setElementImage @config.images.tonight
    if @currentDate.isAfter(@targetDate, 'day')
      return @setWeekAfterImage()
    @setElementImage @config.images[days_before + '_days'] || @config.images.outside_days_before

  setWeekAfterImage: ->
    weeks_after = @currentDate.diff(@targetDate, 'weeks')
    console.log 'weeks_after = ', weeks_after
    if @currentDate.isoWeekday() == @targetDate.isoWeekday() && @evergreen_day_of
      return @setElementImage @config.images.evergreen_day_of
    if @currentDate.isoWeekday() == @targetDate.isoWeekday() - 1 && @evergreen_day_before
      return @setElementImage @config.images.evergreen_day_before
    @setElementImage @config.images[weeks_after + '_weeks_after'] || @config.images.evergreen_weeks_after

window.BusterTimeSeries = BusterTimeSeries

window.formHelper = (btr) ->
  current_date = document.getElementById('current_date')
  current_date.value = btr.currentDate.format()

  target_date = document.getElementById('target_date')
  target_date.value = btr.targetDate.format()

  previous_button = document.getElementById('previous')
  next_button = document.getElementById('next')

  day_of_week = document.getElementById('day-of-week')
  day_of_week.textContent = btr.currentDate.weekday()

  current_date.addEventListener 'change', ->
    if btr
      btr.update target_date.value, @value
      day_of_week.textContent = moment(@value).weekday()

  target_date.addEventListener 'change', ->
    if btr
      btr.update @value, current_date.value

  next_button.addEventListener 'click', (event)->
    if btr
      btr.update target_date.value, btr.currentDate.add(1, 'days')
      document.getElementById('current_date').value = btr.currentDate.format()
      day_of_week.textContent = btr.currentDate.weekday()

  previous_button.addEventListener 'click', (event)->
    if btr
      btr.update target_date.value, btr.currentDate.subtract(1, 'days')
      document.getElementById('current_date').value = btr.currentDate.format()
      day_of_week.textContent = btr.currentDate.weekday()

