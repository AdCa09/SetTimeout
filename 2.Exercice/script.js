const date = new Date();


function elapseTime(){
    const currentTime = new Date();
    const timePassed = currentTime - date;
    return timePassed;
}

function display(){
    const seconde = Math.floor(elapseTime() / 1000);
    const span = document.getElementById("timePassed");
    span.textContent = seconde;
    
}

setInterval(display, 1000);

let time = 0;

function showAlert() {
    alert("It's been " + time + " minutes you are here");
}

function timeAlert() {
    time++; 
    showAlert(); 
}

setInterval(timeAlert, 60000);
