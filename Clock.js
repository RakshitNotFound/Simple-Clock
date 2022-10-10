console.log("This is Clock.js")

function updateClock(){
//Get the current date
    let currentTime = new Date()

    //Extract hour,minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();


    //pad 0 if minutes and seconds are less than 10(that means in double digit)
    currentMinutes = (currentMinutes < 10  ? "0" : "") + currentMinutes;
    currentHour = (currentHour < 10  ? "0" : "") + currentHour;
    currentSeconds = (currentSeconds < 10  ? "0" : "") + currentSeconds;

    //Railway clock to AM AND PM.
    let TimeOfDay = (currentHour < 12) ? "AM" : "PM";

currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
currentHour = (currentHour==0) ? 12 : currentHour;




    let currentTimeStr = currentHour + ":" + currentMinutes +":" + currentSeconds + " " + TimeOfDay;  

    document.getElementById("Clock").innerHTML = currentTimeStr;


}
