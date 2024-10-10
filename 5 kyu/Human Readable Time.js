/*
    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable (seconds) {
    if(seconds < 60) {
      return '00' + ':' + '00' + ':' + padZeroLeft(seconds);
    }
    
    else if(seconds >= 60 && seconds < 3600) {
      let minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes * 60;
      
      return '00' + ':' +  padZeroLeft(minutes) + ':' + padZeroLeft(seconds);
    }
    
    else if(seconds >= 3600 && seconds < 359999) {
      let hours = Math.floor(seconds / (60 * 60) );
      let minutes = Math.floor(seconds / 60  - hours * 60);
      seconds = seconds - hours * 60 * 60 - minutes * 60;
      
      return padZeroLeft(hours) + ':' +  padZeroLeft(minutes) + ':' + padZeroLeft(seconds);
    }
    
    return '99:59:59';
  }
  
  function padZeroLeft(time) {
    if(time.toString().length == 1) {
      return '0' + time;
    }
    
    return time;
  }
  