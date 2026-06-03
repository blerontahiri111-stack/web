var wakeuptime;
var dstime;
var sleeptime;
var noon=12;



function showcurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime=new Date();



    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();


    var meridian="AM";



    if(hours >= 12){
        meridian="PM"
    }


    var clocktime= hours + ":" + minutes + ":" + seconds + ":" + meridian;
    clock.innerText=clocktime;
    //NA DUHET ME THIRR FUNKSION QE E NDRON FOTON



}