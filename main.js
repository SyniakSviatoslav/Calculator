
let main = document.getElementById('container')
let timerstart;
class CountdownTimer {
    static main = document.getElementById('container');


    constructor(time) {
        this.time = time;
        this.timerId = Math.random();
        this.addToTheDOM();
        this.inverVal = "";

    }
    addToTheDOM() {

        let timers = document.createElement('div');
        timers.setAttribute('class', 'timer')
        timers.setAttribute('id', this.timerId);


        timers.innerText = this.time
        CountdownTimer.main.appendChild(timers);
        console.log(timers)

        let stopCount = document.createElement('button');
        stopCount.textContent = 'stop';
        CountdownTimer.main.appendChild(stopCount);
        stopCount.addEventListener("click", () => this.stop());

        let startCount = document.createElement('button');
        startCount.textContent = 'start';
        CountdownTimer.main.appendChild(startCount);
        startCount.addEventListener("click", () => this.start());

    }
    newestValue() {
        let numbers = document.getElementById(this.timerId)
        if (this.time > 0) {
            numbers.innerHTML = +this.time--;
        }
        else {
            numbers.innerText = 0;
            document.getElementById("show").style.display="block";
        }

    }
    stop() {
        clearInterval(this.inverVal)

    }
    start(){
        this.inverVal = setInterval(()=>{
            this.newestValue();
        },1000)
    }

}

let timer = new CountdownTimer(50);
// timerstart = timer.time;

// timer.addToTheDOM();
// timerstart = setInterval(function () {
//     timer.start()
// }, 1000)





// timer.stop()


// countdownTime.start()



// let oldDate = new Date().getTime();

//  let difference = newDate - oldDate;
//  console.log(difference)
// class StartCount {
//     constructor (){

//     }
//     start(){
//         let newDate = new Date().getTime() + time;
//         console.log(newDate)
//     }
// }


// yellowPoint.addToTheDOM()

// let newDate = new Date().getTime() + 86400000;
// console.log(newDate.start());

// let days = document.getElementById("days");
// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");




// let timer = setInterval(function countdown (){
//  let oldDate = new Date().getTime();

//  let difference = newDate - oldDate;
//  console.log(newDate)
//  days.textContent = Math.floor(difference / (1000 * 60 * 60 * 24));
//  hours.textContent = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//  minutes.textContent = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//  seconds.textContent = Math.floor((difference % (1000 * 60)) / 1000);

//  if(hours.textContent<10){
//      hours.textContent = "0" +hours.textContent;
//  }
//  if(minutes.textContent<10){
//      minutes.textContent = "0" +minutes.textContent;
//  }
//  if (seconds.textContent<10){
//      seconds.textContent = "0" +seconds.textContent;
//  }

// },1000)