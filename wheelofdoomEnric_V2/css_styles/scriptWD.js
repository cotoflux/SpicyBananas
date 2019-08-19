function wait(ms) {
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while (d2 - d < ms);
}
var coderD = " ";

function jugar() {
  var x = Math.floor((Math.random() * 10) + 1);
  var listaT = ["Enric", "Nellay", "Xia", "Edgar", "Alex", "Peter", "Andres", "Ari", "Jason", "Pi"];
  coderD = " ";
  coderD = listaT[x - 1];
  var slotdelay = 0;
  setTimeout(showslot1, 100);
  setTimeout(showslot2, 200);
  setTimeout(showslot3, 500);
  setTimeout(showprofile, 1000);
}

function reset() {
  document.getElementById("slot1").innerHTML = "";
  document.getElementById("slot2").innerHTML = "";
  document.getElementById("slot3").innerHTML = "";
  document.getElementById("profile").innerHTML = "";

}

function showslot1() {
  document.getElementById("slot1").innerHTML = coderD;
}

function showslot2() {
  document.getElementById("slot2").innerHTML = coderD;
}

function showslot3() {
  document.getElementById("slot3").innerHTML = coderD;
}
function showprofile() {
  document.getElementById("profile").innerHTML = coderD;
}