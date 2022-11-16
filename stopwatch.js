const startBtn = document.getElementById('start_button');
const stopBtn = document.getElementById('stop_button');
const resetBtn = document.getElementById('reset_button');


let conditionbtn = false;


let mscount = 0;
let scount = 0;


startBtn.addEventListener('click', function() {
    conditionbtn = true;
    });

stopBtn.addEventListener('click', function() {conditionbtn = false;});
resetBtn.addEventListener('click', function(){
    conditionbtn = false;
    mscount = 0;
    scount = 0;
    seconds = '00'
    milli_second = '000';
    document.getElementById('milli_seconds').innerHTML = milli_second;
    document.getElementById('seconds').innerHTML = seconds;
});


setInterval(start, 1);
function start() {
   let milli_second;
   let seconds;
   if (conditionbtn) {
       mscount++;
       if (mscount < 10){
          milli_second = '00' + mscount;
          document.getElementById('milli_seconds').innerHTML = milli_second;
       }
       else if (mscount < 100 && mscount >= 10) {
        milli_second = '0'+ mscount;
        document.getElementById('milli_seconds').innerHTML = milli_second;
       }
       else {
        milli_second = mscount;
        document.getElementById('milli_seconds').innerHTML = milli_second;
       }
       if (mscount==1000) {
        scount++;
        mscount = 0;
        milli_second = '000';
        document.getElementById('milli_seconds').innerHTML = milli_second;
       }
       if (scount < 10){
        seconds = '0' + scount + ',';
        document.getElementById('seconds').innerHTML = seconds;
       }
       else if (scount < 60 && scount >= 10){
        seconds = scount + ',';
        document.getElementById('seconds').innerHTML = seconds;
       }
       else {
        scount = 0;
        seconds = '00,';
        document.getElementById('seconds').innerHTML = seconds;
       }

    }
  }



