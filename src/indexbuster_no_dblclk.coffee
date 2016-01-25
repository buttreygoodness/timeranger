#! timerange.js
#! version : 1.1.0
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
    days_before = @currentDate.diff(@targetDate, 'days')
    weeks_before = @currentDate.diff(@targetDate, 'weeks')
    if weeks_before == -0 && days_before == -6
      if @config.images
        @setImageElement @config.images.outside_weeks_before
      if @config.videos
        @setVideoElement @config.videos.outside_weeks_before
      return
    if @config.images
      @setImageElement @config.images[weeks_before + '_weeks'] || @config.images.outside_weeks_before
    if @config.videos
      @setVideoElement @config.videos[weeks_before + '_weeks'] || @config.videos.outside_weeks_before

  setThisWeekImage: ->
    days_before = @currentDate.diff(@targetDate, 'days')
    temp_target_date = moment(@config.targetDate)
    if @currentDate.isSame(@targetDate, 'day')
      if @config.images
        @setImageElement @config.images.tonight
      if @config.videos
        @setVideoElement @config.videos.tonight
      return
    if @currentDate.isAfter(@targetDate, 'day')
      if @currentDate.isoWeekday() == @targetDate.isoWeekday()
        if @config.images
          @setImageElement @config.images.tonight
        if @config.videos
          @setVideoElement @config.videos.tonight
        return
      else
        return @setWeekAfterImage(false)

    if @config.images
      @setImageElement @config.images[days_before + '_days'] || @config.images.outside_days_before
    if @config.videos
      @setVideoElement @config.videos[days_before + '_days'] || @config.videos.outside_days_before || @config.videos.outside_weeks_before

  setWeekAfterImage: (evergreen) ->
    weeks_after = @currentDate.diff(@targetDate, 'weeks')
    if evergreen != false
      if @currentDate.isoWeekday() == @targetDate.isoWeekday() && @evergreen_day_of
        if @config.videos
          @setVideoElement @config.videos.evergreen_day_of
        if @config.images
          @setImageElement @config.images.evergreen_day_of
        return 
      if @currentDate.isoWeekday() == @targetDate.isoWeekday() - 1 && @evergreen_day_before
        if @config.videos
          @setVideoElement @config.videos.evergreen_day_before
        if @config.images
          @setImageElement @config.images.evergreen_day_before
        return
    if @config.videos
      @setVideoElement @config.videos[weeks_after + '_weeks_after'] || @config.videos.evergreen_weeks_after
    if @config.images
      @setImageElement @config.images[weeks_after + '_weeks_after'] || @config.images.evergreen_weeks_after

window.BusterTimeSeries = BusterTimeSeries
