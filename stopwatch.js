const startBtn = document.getElementById('start_button');
const stopBtn = document.getElementById('stop_button');
const resetBtn = document.getElementById('reset_button');


let conditionbtn = false;


let mscount = 0;
let scount = 0;


startBtn.addEventListener('click', function() {
    conditionbtn = true;
    stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', '');
    if (startBtn.innerText == 'Resume') {
        resetBtn.setAttribute('disabled', '');
    }
    });

stopBtn.addEventListener('click', function() {
    conditionbtn = false;
    resetBtn.removeAttribute('disabled');
    startBtn.removeAttribute('disabled');
    startBtn.innerText = 'Resume';
    });
resetBtn.addEventListener('click', function(){
    startBtn.innerText = 'Start';
    stopBtn.setAttribute('disabled', '');
    resetBtn.setAttribute('disabled', '');
    conditionbtn = false;
    mscount = 0;
    scount = 0;
    seconds = '00<strong>s:</strong>';
    milli_second = '000<strong>ms</strong>';
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
          milli_second = '00' + mscount + '<strong>ms</strong>';
          document.getElementById('milli_seconds').innerHTML = milli_second;
       }
       else if (mscount < 100 && mscount >= 10) {
        milli_second = '0'+ mscount + '<strong>ms</strong>';
        document.getElementById('milli_seconds').innerHTML = milli_second;
       }
       else {
        milli_second = mscount + '<strong>ms</strong>';
        document.getElementById('milli_seconds').innerHTML = milli_second;
       }
       if (mscount==1000) {
        scount++;
        mscount = 0;
        milli_second = '000<strong>ms</strong>';
        document.getElementById('milli_seconds').innerHTML = milli_second;
       }
       if (scount < 10){
        seconds = '0' + scount + '<strong>s:</strong>';
        document.getElementById('seconds').innerHTML = seconds;
       }
       else if (scount < 60 && scount >= 10){
        seconds = scount + '<strong>s:</strong>';
        document.getElementById('seconds').innerHTML = seconds;
       }
       else {
        scount = 0;
        seconds = '00<strong>s:</strong>';
        document.getElementById('seconds').innerHTML = seconds;
       }

    }
  }



