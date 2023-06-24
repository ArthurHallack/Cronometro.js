var milisec = 0
var sec = 0
var min = 0
var interval 


function starTimer() {
    interval = setInterval(watch,10)
}
function paused() {
    clearInterval(interval)
    if (pausebtn.style.display = "block"){
        pausebtn.style.display = "none"
        resumebtn.style.display = "block"
    }
}
function resume () {
    interval = setInterval(watch,10)
    if (resumebtn.style.display = "block"){
        resumebtn.style.display = "none"
        pausebtn.style.display = " none"
        pausebtn.style.display = "block"
    }
    
    
}
function reset () {
    clearInterval(interval)
    milisec = 0
    sec = 0 
    min = 0 
    document.getElementById('milliseconds').innerText='000'
    document.getElementById('seconds').innerText='00'
    document.getElementById('minutes').innerText='00'
    startbtn.style.display = "block"
    resumebtn.style.display = "none"
    pausebtn.style.display = "none"
}
function watch (){
    milisec++
    document.getElementById('milliseconds').innerText=milisec
    if (milisec===100){
        sec++
        document.getElementById('seconds').innerText=sec
        milisec=0
        if (sec===60){
            min++
            document.getElementById('minutes').innerText=min
            sec=0
        }
    }
    startbtn.style.display = "none"
    pausebtn.style.display = "block"
}