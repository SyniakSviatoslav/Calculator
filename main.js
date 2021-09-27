// class USER {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     login() {
//         console.log("log in");
//     }
//     logout() {
//         console.log("log out");
//     }
// }
// class ADMIN extends USER {
//     constructor(role, deleteUset) {
//             this.role = role;
//             this.deleteUset = deleteUset;
//     }
//     show(){
//         console.log(`'`)
//     }
// }
// facebookAPI.get("jobs");
// facebookAPI.get("jobs/1"); 
// facebookAPI.post("jobs",{name: "Dima"}); 
// facebookAPI.put("jobs/id",{name: "Dima new"}); 
// facebookAPI.delete("jobs/id");





let body = document.getElementById('container');
let wrapper = document.getElementById("wrapper");
let timerstart;
let current_progress = 0;

class CountdownTimer {
    static body = document.getElementById('container');
    static wrapper = document.getElementById("wrapper");
    static main =  document.getElementsByTagName("body");
    


    constructor(time) {
        this.time = time;
        this.timerId = Math.random();
        this.addToTheDOM();
        this.inverVal = "";
        this.x = time;
        this.inverval = "";

    }
    addToTheDOM() {

        let timers = document.createElement('div');
        timers.setAttribute('class', 'timer')
        timers.setAttribute('id', this.timerId);


        timers.innerText = this.time
        CountdownTimer.body.appendChild(timers);

        console.log(timers)

        let stopCount = document.createElement('button');
        stopCount.textContent = 'stop';
        stopCount.setAttribute('class', 'btn');
        CountdownTimer.wrapper.appendChild(stopCount);
        stopCount.addEventListener("click", () => this.stop());

        let startCount = document.createElement('button');
        startCount.textContent = 'start';
        startCount.setAttribute('class', 'btn');
        CountdownTimer.wrapper.appendChild(startCount);
        startCount.addEventListener("click", () => this.start());

    }
    newestValue() {
        let numbers = document.getElementById(this.timerId)
        if (this.time > 0) {
            numbers.innerHTML = this.time--;
        }
        else {
            numbers.innerText = 0;
            clearInterval(this.inverVal)
        }

    }
    stop() {
        clearInterval(this.inverVal);
       
            

    }
    start(){
        let y = this.time/100;
        let c = 1/y;
        this.inverVal = setInterval(()=>{
            this.newestValue();
            console.log(1)
            current_progress += c;
                $("#dynamic")
                .css("width", current_progress + "%")
                .attr("aria-valuenow", current_progress)
                if (current_progress >= 100)
                        clearInterval(this.interVal);
        },1000)
    
          
           
            
            // let current_progress = 0;
            // // this.interval = setInterval(function() {
            // //     current_progress += c;
            //     $("#dynamic")
            //     .css("width", current_progress + "%")
                // .attr("aria-valuenow", current_progress)
                // .text(current_progress + "% Complete");
            //     if (current_progress >= 100)
            //         clearInterval(interval);
                    
            // }, 1000);
        
    }

}

let timer = new CountdownTimer(6);



// $(function() {
//     y = x/100;
//     c = 1/y;
    
//     var current_progress = 0;
//     var interval = setInterval(function() {
//         current_progress += c;
//         $("#dynamic")
//         .css("width", current_progress + "%")
//         .attr("aria-valuenow", current_progress)
//         .text(current_progress + "% Complete");
//         if (current_progress >= 100)
//             clearInterval(interval);
//     }, 1000);
//   });













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