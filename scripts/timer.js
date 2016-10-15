var deadline = "01/07/2017";

var getTimeRemaining = function(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endtime) {
    //var clock = document.getElementById("time1"); < Doesn't work for some reason?
    var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    document.getElementById("time1").innerHTML = '<h1 style="color: white">' + t.days + ' days, ' + t.hours + ' hours, ' +  t.minutes + ' minutes, and ' +
                                                 t.seconds + ' seconds.</h1>';
    if(t.total<=0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}

initializeClock(deadline);
