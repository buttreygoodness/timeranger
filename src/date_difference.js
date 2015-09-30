function gotoAndPlay(str) {
  console.log('gotoAndPlay ' + str);
}

function findDateDifference(air_date){
  var now_date = new Date();
  var difference = air_date.getTime() - now_date.getTime();
  var days_to_go = Math.floor((((difference / 1000) / 60) / 60) / 24);
  console.log (days_to_go)

  switch(days_to_go){
    case 0:
    console.log('day of launch');
    gotoAndPlay('tonight');
    return;
  }

  if (days_to_go >= 7) { 
    console.log('outside launch week');
    gotoAndPlay('day_date');
  } 

  // inside week

  else if (days_to_go == 6) { 
    console.log('inside launch week');
    gotoAndPlay('day');
  } 
  else if (days_to_go == 5) { 
    console.log('inside launch week');
    gotoAndPlay('day');
  }
  else if (days_to_go == 4) { 
    console.log('inside launch week');
    gotoAndPlay('day');
  }
  else if (days_to_go == 3) { 
    console.log('inside launch week');
    gotoAndPlay('day');
  }
  else if (days_to_go == 2) { 
    console.log('inside launch week');
    gotoAndPlay('day');
  }
  else if (days_to_go == 1) { 
    console.log('day before launch'); 
    gotoAndPlay('tomorrow');
  } 

  // generic tomorrow

  else if (days_to_go == -6) { 
    console.log('im a Wednesday after premiere'); 
    gotoAndPlay('generic_tomorrow');
  } 
  else if (days_to_go == -13) { 
    console.log('im a Wednesday after premiere'); 
    gotoAndPlay('generic_tomorrow');
  }
  else if (days_to_go == -20) { 
    console.log('im a Wednesday after premiere'); 
    gotoAndPlay('generic_tomorrow');
  }
  else if (days_to_go == -27) { 
    console.log('im a Wednesday after premiere'); 
    gotoAndPlay('generic_tomorrow');
  }
  else if (days_to_go == -34) { 
    console.log('im a Wednesday after premiere'); 
    gotoAndPlay('generic_tomorrow');
  }
  else if (days_to_go == -41) { 
    console.log('im a Wednesday after premiere'); 
    gotoAndPlay('generic_tomorrow');
  }
  else if (days_to_go == -48) { 
    console.log('im a Wednesday after premiere'); 
    gotoAndPlay('generic_tomorrow');
  }
  else if (days_to_go == -55) { 
    console.log('im a Wednesday after premiere'); 
    gotoAndPlay('generic_tomorrow');
  }

  // generic tonight

  else if (days_to_go == -7) { 
    console.log('generic tonight -7'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -14) { 
    console.log('generic tonight -14'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -21) { 
    console.log('generic tonight -21'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -28) { 
    console.log('generic tonight -28'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -35) { 
    console.log('generic tonight -35'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -42) { 
    console.log('generic tonight -42'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -49) { 
    console.log('generic tonight -49'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -56) { 
    console.log('generic tonight -56'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -63) { 
    console.log('generic tonight -63'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -70) { 
    console.log('generic tonight -70'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -77) { 
    console.log('generic tonight -77'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -84) { 
    console.log('generic tonight -77'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -91) { 
    console.log('generic tonight -91'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -98) { 
    console.log('generic tonight -98'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -105) { 
    console.log('generic tonight -105'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -119) { 
    console.log('generic tonight'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -126) { 
    console.log('generic tonight -126'); 
    gotoAndPlay('generic_tonight');
  } 

  else if (days_to_go == -133) { 
    console.log('generic tonight -133'); 
    gotoAndPlay('generic_tonight');
  } 
  else if (days_to_go == -140) { 
    console.log('generic tonight -140'); 
    gotoAndPlay('generic_tonight');
  } 

  // generic beyond

  else if (days_to_go <= -1) { 
    console.log('generic beyond'); 
    gotoAndPlay('generic_beyond');
  }
}

var air_date = new Date('2015-09-19 20:30-04:00');

findDateDifference(air_date);