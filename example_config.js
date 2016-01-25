      var config = {
        targetDate: new Date('2016-01-28T18:00:00'),
        targetShowDuration: 59,
        imageElement: 'dateID',
        videoElement: 'videoID',
        evergreen_day_before: true,
        evergreen_day_of: true,
        images: {
          'outside_week': '//placehold.it/300x250?text=outside_week',
          'inside_week': '//placehold.it/300x250?text=inside_week',
          '6_days_before': '//placehold.it/300x250?text=6_days_before',
          '5_days_before': '//placehold.it/300x250?text=5_days_before',
          '4_days_before': '//placehold.it/300x250?text=4_days_before',
          '3_days_before': '//placehold.it/300x250?text=3_days_before',
          '2_days_before': '//placehold.it/300x250?text=2_days_before',
          'tomorrow': '//placehold.it/300x250?text=tomorrow',
          'today': '//placehold.it/300x250?text=today',
          'sustaining_generic': '//placehold.it/300x250?text=sustaining_generic',
          'sustaining_tomorrow': '//placehold.it/300x250?text=sustaining_tomorrow',
          'sustaining_today': '//placehold.it/300x250?text=sustaining_today',
          '1_days_after': '//placehold.it/300x250?text=1_days_after',
          '2_days_after': '//placehold.it/300x250?text=2_days_after',
          '3_days_after': '//placehold.it/300x250?text=3_days_after',
          '4_days_after': '//placehold.it/300x250?text=4_days_after',
          '5_days_after': '//placehold.it/300x250?text=5_days_after',
          '6_days_after': '//placehold.it/300x250?text=6_days_after',
          '7_days_after': '//placehold.it/300x250?text=7_days_after'
        },
        videos: { // Same value apply in the videos section
          'outside_week': 'https://s3-us-west-2.amazonaws.com/trutv-twc/video/300x250/TruTV_TWC_300x250_01.mp4',
          'inside_week': 'https://s3-us-west-2.amazonaws.com/trutv-twc/video/300x250/TruTV_TWC_300x250_02.mp4',
          'tomorrow': 'https://s3-us-west-2.amazonaws.com/trutv-twc/video/300x250/TruTV_TWC_300x250_04.mp4', // Tomorrow
          'today': 'https://s3-us-west-2.amazonaws.com/trutv-twc/video/300x250/TruTV_TWC_300x250_05.mp4', // Tonight
          'sustaining_generic': 'https://s3-us-west-2.amazonaws.com/trutv-twc/video/300x250/TruTV_TWC_300x250_06.mp4', // the video that plays evergreen when the above conditions are not met (most of the time)
          'sustaining_tomorrow': 'https://s3-us-west-2.amazonaws.com/trutv-twc/video/300x250/TruTV_TWC_300x250_04.mp4', // the video that plays the day before air date evergreen
          'sustaining_today': 'https://s3-us-west-2.amazonaws.com/trutv-twc/video/300x250/TruTV_TWC_300x250_05.mp4' // the video that plays on the air date evergreen
        }
      };