    var date = new Date();
    var options = {weekday: 'long'};
    var mSecs = date.getUTCMilliseconds();
    var day = date.toLocaleDateString(undefined, options);
    var time = (`${mSecs}`);
    var dateSpan = document.getElementById("date");
    var timeSpan = document.getElementById("time");
    timeSpan.textContent = time;
    dateSpan.textContent = day;
