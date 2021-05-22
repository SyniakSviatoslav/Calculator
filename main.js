let screen = document.getElementById("screen");
console.log(screen)
let buttons = document.querySelectorAll("button")

buttons.forEach(function(button){
    button.addEventListener("click",calculateAllThis)
})

function calculateAllThis(e){

    let clickedValue = e.target.value;
    // screen.value = screen.value + clickedValue
    if(clickedValue === "="){
        console.log(screen.value)
        screen.value = eval(screen.value)
    }else if(clickedValue === "c"){
        screen.value = ""

    }else{
        screen.value = screen.value + clickedValue

    }

}

