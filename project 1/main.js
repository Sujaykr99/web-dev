// countdown timer
const endDate = new Date(" 5 oct , 2025 1:10:00").getTime() ;
const startDate = new Date().getTime();

 let x = setInterval( function updateTimer(){

const now = new Date().getTime();

const distancecovered = now - startDate;
const distancepending = endDate - now ;
//calculate days , min , hrs , secs 

const  days =  Math.floor(distancepending/(24*60*60*1000));
const hrs = Math.floor((distancepending%(24*60*60*1000)/(60*60*1000))) ;
const mins = Math.floor((distancepending%(60*60*1000)/(60*1000)));
const secs = Math.floor((distancepending%(60*1000)/(1000))) ;

//populate in ui
document.getElementById("days").innerHTML = days ;
document.getElementById("hours").innerHTML = hrs ;
document.getElementById("minutes").innerHTML = mins ;
document.getElementById("seconds").innerHTML = secs ;

const totalDistance = endDate - startDate ;
const percentageDistance = (distancecovered/totalDistance)*100 ;

// set weith by progess bar 
document.querySelector(".progress-bar").style.width = percentageDistance + "%" ;

 if (distancepending <= 0) {
    clearInterval(x);
    document.querySelector(".container").innerHTML = "EXPIRED";
    document.querySelector(".progress-bar").style.width = "100%";
    return;
  }

}, 1000) ;
