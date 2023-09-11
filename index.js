

    var date = new Date();
    var hours = date.getUTCHours();
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var mSecs = date.getUTCMilliseconds();
    
    var dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday", "Sunday"];
    var day = dayOfWeek[date.getDay()] ;


    var time = (`${hours}:${minutes}:${seconds}:${mSecs}`)
    var dateSpan = document.getElementById("date");
    var timeSpan = document.getElementById("time");
    timeSpan.textContent = time;
    dateSpan.textContent = day;
