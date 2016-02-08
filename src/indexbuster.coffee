#! timerange.js
#! version : 1.1.2
#! authors : Buster, Inc.
#! license : GPL2

###*
 * BusterTimeSeries v1.1.2
 * Class for determining time ranges and applying corresponding changes to the dom.
 * @param {Object} config configuration file containing directives.
###
class BusterTimeSeries
  constructor: (@config) ->
    console.log 'BusterTimeSeries -----'

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

    if window.Enabler
      el.setAttribute 'sources', Enabler.getUrl(video_uri)
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
    days_before = @currentDate.diff(@targetDate, 'days')
    weeks_before = @currentDate.diff(@targetDate, 'weeks')

    _temp_days_before = days_before * -1

    if @config.images
      @setImageElement @config.images[(_temp_days_before + 1) + '_days_before'] || @config.images.outside_week
    if @config.videos
      @setVideoElement @config.videos[(_temp_days_before + 1) + '_days_before'] || @config.videos.outside_week


  setThisWeekImage: ->
    days_before = @currentDate.diff(@targetDate, 'days')
    temp_target_date = moment(@config.targetDate)
    is_same_day = @currentDate.isSame(@targetDate, 'day');
    
    if days_before == -0 && !is_same_day
      if @config.images
        @setImageElement @config.images.tomorrow
      if @config.videos
        @setVideoElement @config.videos.tomorrow
      return

    if is_same_day
      if @config.images
        @setImageElement @config.images.today
      if @config.videos
        @setVideoElement @config.videos.today
      return
      
    if @currentDate.isAfter(@targetDate, 'day')
        return @setWeekAfterImage(false)

    _temp_days_before = days_before * -1

    if @config.images
      @setImageElement @config.images[(_temp_days_before + 1) + '_days_before'] || @config.images.inside_week
    if @config.videos
      @setVideoElement @config.videos[(_temp_days_before + 1) + '_days_before'] || @config.videos.inside_week

  setWeekAfterImage: (evergreen) ->
    weeks_after = @currentDate.diff(@targetDate, 'weeks')
    days_after = @currentDate.diff(@targetDate, 'days')

    if @config.images
      if @config.images[days_after + '_days_after']
        evergreen = false
        
    if evergreen != false
      if @currentDate.isoWeekday() == @targetDate.isoWeekday() && @evergreen_day_of
        if @config.videos
          @setVideoElement @config.videos.sustaining_today
        if @config.images
          @setImageElement @config.images.sustaining_today
        return 
      if @currentDate.isoWeekday() == @targetDate.isoWeekday() - 1 && @evergreen_day_before
        if @config.videos
          @setVideoElement @config.videos.sustaining_tomorrow
        if @config.images
          @setImageElement @config.images.sustaining_tomorrow
        return

    if @config.videos
      @setVideoElement @config.videos[days_after + '_days_after'] || @config.videos.sustaining_generic
    if @config.images
      @setImageElement @config.images[days_after + '_days_after'] || @config.images.sustaining_generic

window.BusterTimeSeries = BusterTimeSeries
