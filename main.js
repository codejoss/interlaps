window.onload = init;

let hAux, mAux, sAux;
let h = 0;
let m = 0;
let s = 0;
let id;
let laps = [];
let index = 0;

function init(){
  document.querySelector(".start").addEventListener("click",cronometrar);
  document.querySelector(".pause").addEventListener("click",pause);
  document.querySelector(".reiniciar").addEventListener("click",reiniciar);
  document.querySelector(".checklap").addEventListener("click",recordLap);

  document.getElementById("hms").innerHTML="00:00:00";
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
  h=0;m=0;s=0;
  document.querySelector(".start").addEventListener("click",cronometrar);
  document.getElementById("resistencia-value").value = 1
  clearListLaps();
}


// function recordLap() {
//   laps.push(`${hAux}:${mAux}:${sAux}`)
//   printLaps();
// }

function recordLap() {
  laps.push({
    resistance: document.getElementById("resistencia-value").value,
    time: `${hAux}:${mAux}:${sAux}`
  })
  viewValueTime()
};

function printLaps() {
  laps.maps(elem => {

  })
}

function clearListLaps() {
  let example = `<div class="lap-item">
  <p class="lap-text">Lap ejemplo 1:</p>
  <p class="lap-time">00:10:15</p>
</div>
<div class="lap-item">
  <p class="lap-text">Lap ejemplo 2:</p>
  <p class="lap-time">00:10:17</p>
</div>`

  document.querySelector(".laps-container").innerHTML = example
}

function viewValueTime (){
  console.log(laps)
}