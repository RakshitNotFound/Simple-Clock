console.log("This is Clock.js")
function updateClock(){
    let currentTime = new Date()
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    currentMinutes = (currentMinutes < 10  ? "0" : "") + currentMinutes;
    currentHour = (currentHour < 10  ? "0" : "") + currentHour;
    currentSeconds = (currentSeconds < 10  ? "0" : "") + currentSeconds;
    let TimeOfDay = (currentHour < 12) ? "AM" : "PM";
    let currentTimeStr = currentHour + ":" + currentMinutes +":" + currentSeconds + " " + TimeOfDay;
    document.getElementById("Clock").innerHTML = currentTimeStr;


}
