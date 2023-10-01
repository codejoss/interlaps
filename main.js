document.querySelector(".start").addEventListener("click",cronometrar);
document.querySelector(".pause").addEventListener("click",pause);
document.querySelector(".reiniciar").addEventListener("click",reiniciar);
document.querySelector(".checklap").addEventListener("click",recordLap);

const listLaps = document.querySelector(".timelapse")
const lapsContainer = document.querySelector(".laps-container")
const timeLapse = document.querySelector(".timelapse")


document.getElementById("hms").innerHTML="00:00:00";



let hAux, mAux, sAux;
let h = 0;
let m = 0;
let s = 0;
let id;
let lapsData = [];
let index = 0;
let lap = 1;

function init(){
}         
function cronometrar(){
  escribir();
  id = setInterval(escribir,1000);
  document.querySelector(".start").removeEventListener("click",cronometrar);
}

function escribir(){
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("hms").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}

function pause(){
    pauseInterval()
    document.querySelector(".start").addEventListener("click",cronometrar);

}

function pauseInterval() {
  clearInterval(id);
}

function reiniciar(){
  clearInterval(id);
  document.getElementById("hms").innerHTML="00:00:00";
  h=0;
  m=0;
  s=0;
  document.querySelector(".start").addEventListener("click",cronometrar);
  document.getElementById("resistencia-value").value = 1
  clearListLaps();
  lapsData = [];
  lap = 1
}

function recordLap() {
  resistance = 
  lapsData.push({
    numInterval: lap,
    resistance: document.getElementById("resistencia-value").value,
    time: `${hAux}:${mAux}:00`
  })
  printLaps()
};

function printLaps() {
  let resistance = document.querySelector("#resistencia-value");
  const lapItem = document.createElement("div");
  const interval = document.createElement("p");
  const timeStamp = document.createElement("p");


  interval.innerHTML = `Lap: ${lap}`
  timeStamp.innerHTML = `R: ${resistance.value} - ${hAux}:${mAux}:00`;
  
  lapItem.setAttribute("class", "lap-item");
  interval.setAttribute("class", "lap-text");
  timeStamp.setAttribute("class", "lap-time");

  lapItem.append(interval, timeStamp);
  lapsContainer.appendChild(lapItem);

  lap++;
}

function clearListLaps() {
    lapsContainer.innerHTML = ""
}