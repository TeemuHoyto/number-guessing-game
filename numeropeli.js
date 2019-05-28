'use strict'
let arvattava = Math.floor(Math.random() * (100 + 1));

console.log("Arvattava: " + arvattava);

let arvaus = undefined;
let parasAlin = [];
let parasYlin = [];
let arvatut = [];
let psarake = document.getElementById('vihje');
let tehdytArvaukset = 0;
let arvauss = document.getElementById('arvausmaara');
let resetter = document.getElementById('masterResetter');
let numberrer = "";
let i = 1;
let audio = new Audio('bensound-ukulele.mp3');
let alin = document.getElementById('alempi');
let ylin = document.getElementById('ylempi');
let lowBar = document.getElementById('lower-bar');
let midBar = document.getElementById('middle-bar');
let highBar = document.getElementById('upper-bar');
function arvausTehty() {

  var syote = document.getElementById('luku').value;
  arvaus = Number(syote);
  console.log("Arvaus: " + arvaus);

  document.getElementById('lomake').reset();

  tehdytArvaukset = tehdytArvaukset + 1;
  arvauss.innerHTML = "Arvauksiesi lukumäärä on " + tehdytArvaukset;

  if (arvattava > syote) {
    psarake.innerHTML = syote + " " + "Is too low";
    parasAlin.push(arvaus);
    arvatut.push(arvaus);
    lowBar.style.width=syote+"%";
    midBar.style.width=100-syote+"%";
    alin.innerHTML = "Lowest best "+(Math.max(...parasAlin));
  } else if (arvattava < syote) {
    parasYlin.push(arvaus);
    arvatut.push(arvaus);
    highBar.style.width=syote+"%";
    midBar.style.width=100-syote+"%";
    psarake.innerHTML = syote + " " + "Is too High";
    ylin.innerHTML = "Higest best "+(Math.min(...parasYlin));
    console.log(arvaus.value)
  } else if (arvattava == syote) {
    document.getElementById('luku').disabled = true;
    audio.play();
    arvatut.push(arvaus);
    for(let i = 0; i < arvatut.length; i++){

      document.getElementById('printer').innerHTML ="<br>These numbers are mine " + arvatut + ", there are many like them but these numbers are mine " + arvatut+ "  ::)" ;
     
    }
    
    isKey
    psarake.innerHTML = "You are the VICTOR of the game";
    lowBar.style.width="49%";
    highBar.style.width="49%";
    midBar.style.width="2%";
    midBar.style.backgroundColor="red";
  }




  return false;
}
function isKey(evt) {
  var iKeyCode = (evt.which) ? evt.which : evt.keyCode
  if (iKeyCode != 56 && iKeyCode)
    return false;

  return true;
}

function isNumberKey(evt) {
  var iKeyCode = (evt.which) ? evt.which : evt.keyCode
  if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
    return false;

  return true;
}
document.getElementById('lomake').onsubmit = arvausTehty;
