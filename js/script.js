let zingsnis;
let _masinele;
let kuroRodykle;
let koordinateX;
let koordinateY;
let kliutysX;
let kliutysY;
let kurasX;
let kurasY;
let litrai;
let kliuciuKiekis;
let kuras;
let sprogimas;
let kolonele;

pradzia();

function pradzia() {
  zingsnis = 40;
  _masinele = document.getElementById("masinele");
  kuroRodykle = document.getElementById("kuroRodykle");
  koordinateX = 0;
  koordinateY = 0;
  kliutysX = [];
  kliutysY = [];
  kurasX = 0;
  kurasY = 0;
  litrai = 0;
  kliuciuKiekis = 60;
  kuras = 30;
  sprogimas = false;

  _masinele.style.top = koordinateX;
  _masinele.style.left = koordinateY;
  blokai(kliuciuKiekis);
  kuroRodykle.textContent = `Kuro likutis : ${kuras}`;
  kuroKoordinates();
  naujasBlokas(kurasX, kurasY, "kuras");
  litrai = Math.floor(Math.random() * 15) + 10;
  kolonele = document.getElementsByClassName("kuras")[0];
  kolonele.textContent = litrai;
  document.getElementsByTagName("body")[0].addEventListener("keydown", judam);
}

function naujasBlokas(_x, _y, id) {
  let _div = document.createElement("div");
  _div.style.position = "absolute";
  _div.style.top = `${_y}px`;
  _div.style.left = `${_x}px`;
  _div.className = id;
  let element = document.getElementById("zona");
  element.appendChild(_div);
}

function toksJauYra(_x, _y) {
  for (let i = 0; i < kliutysX.length; i++) {
    if (kliutysX[i] == _x && kliutysY[i] == _y) {
      return true;
    }
  }
  return false;
}

function arUzsipyle(_x, _y) {
  if (_x == kurasX && _y == kurasY) {
    kuras += parseInt(kolonele.textContent);
    naujasKuras();
  }
}
function kuroKoordinates() {
  do {
    kurasX = Math.floor(Math.random() * 15) * 40;
    kurasY = Math.floor(Math.random() * 15) * 40;
  } while (toksJauYra(kurasX, kurasY));
}

function naujasKuras() {
  kuroKoordinates();
  kolonele.style.left = `${kurasX}px`;
  kolonele.style.top = `${kurasY}px`;

  litrai = Math.floor(Math.random() * 15) + 10;
  document.getElementsByClassName("kuras")[0].textContent = litrai;
  console.log(`${kurasX} ${kurasY}`);
}

function blokai(n) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < n; i++) {
    do {
      x = Math.floor(Math.random() * 15) * 40;
      y = Math.floor(Math.random() * 15) * 40;
    } while (toksJauYra(x, y) || (x == koordinateX && y == koordinateY));
    kliutysX[kliutysX.length] = x;
    kliutysY[kliutysY.length] = y;
    naujasBlokas(x, y, "blokas");
  }
}

function pabaiga() {
  _masinele.src = "img/kaboom2.webp";
  _masinele.style.transform = `rotate(0deg)`;
  sprogimas = true;
}

function iKaire() {
  koordinateX -= zingsnis;
  if (koordinateX < 0) {
    koordinateX += 600;
  }
  _masinele.style.transform = `rotate(0deg)`;
  _masinele.style.left = `${koordinateX}px`;
  if (toksJauYra(koordinateX, koordinateY)) {
    pabaiga();
  }
  arUzsipyle(koordinateX, koordinateY);
}

function iDesine() {
  koordinateX += zingsnis;
  if (koordinateX > 580) {
    koordinateX = 0;
  }
  _masinele.style.transform = `rotate(180deg)`;
  _masinele.style.left = `${koordinateX}px`;
  if (toksJauYra(koordinateX, koordinateY)) {
    pabaiga();
  }
  arUzsipyle(koordinateX, koordinateY);
}

function iVirsu() {
  koordinateY -= zingsnis;
  if (koordinateY < 0) {
    koordinateY += 600;
  }
  _masinele.style.transform = `rotate(90deg)`;
  _masinele.style.top = `${koordinateY}px`;
  if (toksJauYra(koordinateX, koordinateY)) {
    pabaiga();
  }
  arUzsipyle(koordinateX, koordinateY);
}

function iApacia() {
  koordinateY += zingsnis;
  if (koordinateY > 580) {
    koordinateY = 0;
  }
  _masinele.style.transform = `rotate(270deg)`;
  _masinele.style.top = `${koordinateY}px`;
  if (toksJauYra(koordinateX, koordinateY)) {
    pabaiga();
  }
  arUzsipyle(koordinateX, koordinateY);
}

function judam() {
  let kryptis = event.keyCode;
  if (kuras > 0 && !sprogimas) {
    switch (kryptis) {
      case 37:
        iKaire();
        kuras--;
        kuroRodykle.textContent = `Kuro likutis : ${kuras}`;
        break;
      case 38:
        iVirsu();
        kuras--;
        kuroRodykle.textContent = `Kuro likutis : ${kuras}`;
        break;
      case 39:
        iDesine();
        kuras--;
        kuroRodykle.textContent = `Kuro likutis : ${kuras}`;
        break;
      case 40:
        iApacia();
        kuras--;
        kuroRodykle.textContent = `Kuro likutis : ${kuras}`;
        break;
    }
  }
}
