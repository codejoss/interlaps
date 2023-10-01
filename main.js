document.querySelector(".start").addEventListener("click",cronometrar);
document.querySelector(".pause").addEventListener("click",pause);
document.querySelector(".reiniciar").addEventListener("click",reiniciar);
document.querySelector(".checklap").addEventListener("click",recordLap);

const listLaps = document.querySelector(".timelapse")
const lapsContainer = document.querySelector(".laps-container")


document.getElementById("hms").innerHTML="00:00:00";



let hAux, mAux, sAux;
let h = 0;
let m = 0;
let s = 0;
let id;
let lapsData = [];
let index = 0;

function init(){
}         
function cronometrar(){
  escribir();
  id = setInterval(escribir,100);
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
}

function recordLap() {
  resistance = 
  lapsData.push({
    resistance: document.getElementById("resistencia-value").value,
    time: `${hAux}:${mAux}:00`
  })
  printLaps()
};

function printLaps() {
  let resistance = document.querySelector("#resistencia-value");
  const lapItem = document.createElement("div");
  const numLap = document.createElement("p");
  const timeStamp = document.createElement("p");

  lapItem.setAttribute("class", "lap-item");
  numLap.setAttribute("class", "lap-text");
  timeStamp.setAttribute("class", "lap-time");

  timeStamp.innerHTML = `R: ${resistance.value} - ${hAux}:${mAux}:00`;

  lapItem.append(numLap, timeStamp);
  lapsContainer.appendChild(lapItem);
}

function clearListLaps() {
    document.querySelector(".laps-container").innerHTML = ""
}