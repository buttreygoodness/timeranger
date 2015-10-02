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