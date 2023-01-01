let newYears ='1 jan 2024';

function countDown(){
    let newYearDate = new Date(newYears);
    let currentDate = new Date();
    
    let myDays = document.getElementById('days');
    let myHours = document.getElementById('hours');
    let myMinutes = document.getElementById('minutes');
    let mySeconds = document.getElementById('seconds');

    let totalSeconds = Math.floor((newYearDate - currentDate)/1000)
    myDays.innerText = Math.floor(totalSeconds / 3600 / 24)
    myHours.innerText = Math.floor((totalSeconds / 3600) % 24)
    myMinutes.innerText = Math.floor(totalSeconds / 60) % 60
    mySeconds.innerText = Math.floor(totalSeconds)% 60
    
    if(mySeconds.innerText<10){
        mySeconds.innerText =`0${mySeconds.innerText}`
    }
    

}
setInterval(countDown,1000)