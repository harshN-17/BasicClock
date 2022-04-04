const timer = document.querySelector('.timer');
const lap_list = document.getElementById('laps-list');
const start_btn = document.getElementById('start-btn');
const stop_btn = document.getElementById('stop-btn');
const reset_btn = document.getElementById('reset-btn');
const lap_btn = document.getElementById('lap-btn');

//initialise seconds with 0
let ms = -1;
let interval=null;

//event listeners
start_btn.addEventListener('click',start);
lap_btn.addEventListener('click',lap);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);

let hrs=0, mins=0, sec=0;
// update timer
function updateTimer(){
    ms++;
    //actual updation
    if(ms===100){
        sec++;
        ms=0;
    }
    if(sec===60){
        mins++;
        sec=0;
        ms=0;
    }
    if(mins===60){
        hrs++;
        mins=0;
        sec=0;
        ms=0;
    }


    // hrs = Math.floor(seconds/3600);
    // mins = Math.floor((seconds-hrs*3600)/60);
    // // sec = seconds%60;



    var hrString = hrs;
    var minString = mins;
    var secString = sec;
    var msString = ms;

    if(ms<10) msString = "0" + msString;
    if(sec<10) secString = "0" + secString;
    if(mins<10) minString = "0" + minString;
    if(hrs<10) hrString = "0" + hrString;


    timer.innerText = `${hrString}:${minString}:${secString}:${msString}`;
}


function start(){
    start_btn.style.display = 'none';
    lap_btn.style.display = 'inline';
    if(interval) return;
    interval = setInterval(updateTimer,10);
}

function stop(){
    start_btn.style.display = 'inline';
    lap_btn.style.display = 'none';
    clearInterval(interval);
    interval=null;
}
let count = 0;
function reset(){
    stop();
    ms=-1;
    sec=0;
    mins=0;
    hrs=0;
    updateTimer();
    for(var i=0;i<count;i++){
    var laplist = document.querySelector('.laps'); 
    laplist.innerHTML = ' ';
    laplist.classList.remove('laps');
    }
    // lap_list.style.display = 'none';
}

function lap(){
    count++;
    // console.log(count);
    // lap_list.style.display = 'block';
    var newlap = document.createElement("div"); 
    newlap.className = "laps";
   
    // if(sec===0) sec = '0'+sec;
    // if(mins===0) mins = '0'+mins;
    // if(hrs===0) hrs = '0'+hrs;
    
    var hrString = hrs;
    var minString = mins;
    var secString = sec;
    var msString = ms;

    if(ms<10) msString = "0" + msString;
    if(sec<10) secString = "0" + secString;
    if(mins<10) minString = "0" + minString;
    if(hrs<10) hrString = "0" + hrString;

    newlap.innerHTML = `${hrString}:${minString}:${secString}:${msString}`;
    document.getElementById('laps-list').append(newlap);
}