let alive = ["xia", "roberth", "singh", "marc"];
let aliveLength = alive.length;
let index = 0;
let btn = document.getElementById("but");
let rdm = 0;

let dead = [];

for (let i = 0; i < aliveLength; ++i) {
  console.log("aa");
  let createP = document.createElement("p");
  let newThing = document.createTextNode(alive[i]);
  createP.appendChild(newThing);

  let parent = document.getElementById("left");
  parent.appendChild(createP);
}

btn.addEventListener("click", () => {});

function randomNumber() {
  rdm = Math.floor(Math.random() * aliveLength);
  putColor();
}

function putColor(){
    
}
