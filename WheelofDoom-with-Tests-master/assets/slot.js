let btn = document.getElementById("but");
let btnReset = document.getElementById("but1");
let rdm;
let codersName = [
  "Alexandro",
  "Amau",
  "Camilo",
  "Carlos",
  "Delfina",
  "Enric",
  "Erik",
  "Ferran",
  "Franco",
  "Janina",
  "Jason",
  "Kavan",
  "Manuela",
  "Nathalia",
  "Nellay",
  "Noelia",
  "Nuria",
  "Raul",
  "Sergi",
  "Xia",
  "Solomon",
  "Unai",
  "Andres",
  "Thierry"
];
let alive = [];
let identifier = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24
];
let idConfirmed = [];
let sex = [
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];
let dead = [];
let aliveLength = 0;
let deadLength = 0;
let confirmedLength = 0;
let once = 0;
let maxLength = codersName.length;
let mangxDeadLength = sex.length;
let minLength = 0;
let index = 0;
let limitInfo = "*!@$#@$#";
let zeroContent = "";
let man = "Male";
let woman = "Female";
let id = 0;
let info1 = document.getElementById("info1");
let info2 = document.getElementById("info2");
let info3 = document.getElementById("info3");

btn.addEventListener("click", () => {
  if (once === 0) {
    setLength();
    ++once;
  }
  random();
});

btnReset.addEventListener("click", () => {
  resetAll();
});

function random() {
  if (index >= minLength && index < maxLength) {
    rdm = Math.floor(Math.random() * aliveLength);
    id = idConfirmed[rdm];
    console.log(index);
   

    for (let j = 0; j < 3; ++j) {
      document.getElementById("column" + (j + 1)).innerHTML = alive[rdm]; //.value
    }

    info1.classList.add("setColor");
    info1.innerText = id;
    info2.classList.add("setColor");
    info2.innerText = alive[rdm];

    if (dead[rdm] === 0) {
      info3.innerText = man;
    }
    if (dead[rdm] === 1) {
      info3.innerText = woman;
    }
    info3.classList.add("setColor");

    alive.splice(rdm, 1);
    aliveLength = alive.length;
    dead.splice(rdm, 1);
    deadLength = dead.length;
    idConfirmed.splice(rdm, 1);
    confirmedLength = idConfirmed.length;
  }
  if (!upIndex()) {
    return;
  }
}
function setLength() {
  alive = codersName.slice(0);
  aliveLength = alive.length;

  dead = sex.slice(0);
  deadLength = dead.length;

  idConfirmed = identifier.slice(0);
  confirmedLength = idConfirmed.length;
}
function upIndex() {
  if (index > maxLength) {
    for (let j = 0; j < 3; ++j) {
      document.getElementById("column" + (j + 1)).innerHTML = limitInfo;
    }
    info1.innerText = limitInfo;
    info2.innerText = limitInfo;
    info3.innerText = limitInfo;
    alert(
      "Dear User, there isnt more chance to play around it, press RESET or REFRESH whole page********"
    );
    return false;
  }
  ++index;
}

function resetAll() {
  alive.splice(0, aliveLength);
  dead.splice(0, deadLength);
  idConfirmed.splice(0, confirmedLength);
  once = 0;
  index = 0;
  for (let u = 0; u < 3; ++u) {
    document.getElementById("column" + (u + 1)).innerHTML = zeroContent;
  }
  info1.innerText = zeroContent;
  info2.innerText = zeroContent;
  info3.innerText = zeroContent;
  console.log("clear();");
}
