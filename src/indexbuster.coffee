#! timerange.js
#! version : 1.0.0
#! authors : Buster, Inc.
#! license : GPL2

###*
 * Class for determining time ranges and applying corresponding changes to the dom.
 * @param {Object} config configuration file containing directives.
###
class BusterTimeSeries
  constructor: (@config) ->
  
  init: () ->
    @targetDate = @targetDate || moment(@config.targetDate)
    @currentDate = @currentDate || moment()
    @evergreen_day_before = @config.evergreen_day_before || false
    @evergreen_day_of = @config.evergreen_day_of || false
    @getTimeDifference()

  update: (target_date, current_date) ->
    @targetDate = moment(target_date) || @targetDate
    @currentDate = moment(current_date) || @currentDate
    @getTimeDifference()
  
  setImageElement: (image_uri) ->
    if !@config.imageElement
      return
    el = document.getElementById @config.imageElement
    el.setAttribute 'src', image_uri
    el.setAttribute 'source', image_uri

  setVideoElement: (video_uri) ->
    if !@config.videoElement
      return
    
    el = document.getElementById @config.videoElement

    if window.gwd
      el.gwdDeactivate()
      el.setAttribute 'sources', video_uri

      setTimeout () ->
        el.src = el.childNodes[0].src
        el.load()
      , 500
    else
      el.setAttribute 'src', video_uri

  getTimeDifference: () ->
    week_before = @currentDate.isBefore(@targetDate, 'week')
    this_week = @currentDate.isSame(@targetDate, 'week')
    week_after = @currentDate.isAfter(@targetDate, 'week')

    if week_before
      return @setWeekBeforeImage()
    if this_week
      return @setThisWeekImage()
    if week_after
      return @setWeekAfterImage()

  setWeekBeforeImage: ->
    weeks_before = @currentDate.diff(@targetDate, 'weeks')
    @setImageElement @config.images[weeks_before + '_weeks'] || @config.images.outside_weeks_before
    @setVideoElement @config.videos[weeks_before + '_weeks'] || @config.videos.outside_weeks_before

  setThisWeekImage: ->
    days_before = @currentDate.diff(@targetDate, 'days')
    temp_target_date = moment(@config.targetDate)
    if @currentDate.isAfter(@targetDate, 'day') || @currentDate.isAfter(temp_target_date.add(@config.targetShowDuration, 'minutes'))
      return @setWeekAfterImage(false)
    if @currentDate.isoWeekday() == @targetDate.isoWeekday()
      @setVideoElement @config.videos.tonight
      @setImageElement @config.images.tonight
      return
    @setVideoElement @config.videos[days_before + '_days'] || @config.videos.outside_days_before || @config.videos.outside_weeks_before
    @setImageElement @config.images[days_before + '_days'] || @config.images.outside_days_before

  setWeekAfterImage: (evergreen) ->
    weeks_after = @currentDate.diff(@targetDate, 'weeks')
    if evergreen != false
      if @currentDate.isoWeekday() == @targetDate.isoWeekday() && @evergreen_day_of
        @setVideoElement @config.videos.evergreen_day_of
        return @setImageElement @config.images.evergreen_day_of
      if @currentDate.isoWeekday() == @targetDate.isoWeekday() - 1 && @evergreen_day_before
        @setVideoElement @config.videos.evergreen_day_before
        return @setImageElement @config.images.evergreen_day_before
    @setVideoElement @config.videos[weeks_after + '_weeks_after'] || @config.videos.evergreen_weeks_after
    @setImageElement @config.images[weeks_after + '_weeks_after'] || @config.images.evergreen_weeks_after

window.BusterTimeSeries = BusterTimeSeries

