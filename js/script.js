import tmp from "./tmp.js";

const refs = {
  onBtn: document.querySelector(".green"),
  offBtn: document.querySelector(".red"),
  input: document.querySelector(".input"),
};

refs.onBtn.addEventListener("click", onOn);
refs.offBtn.addEventListener("click", onOff);

function onOn(e) {
  refs.onBtn.classList.add("on");
  refs.offBtn.classList.remove("on");
  refs.offBtn.disabled = true;

  logos();
}

function onOff() {
  refs.onBtn.classList.remove("on");
  refs.onBtn.disabled = true;
  refs.offBtn.classList.add("on");
  refs.input.firstChild.classList.add("off");

  setTimeout(() => {
    refs.input.innerHTML = "";
    refs.onBtn.disabled = false;
  }, 1000);
}

function logos() {
  refs.input.innerHTML = tmp.firstLogo;
  setTimeout(() => {
    refs.input.innerHTML = tmp.secondLogo;
  }, 3000);
  setTimeout(() => {
    setMenu(tmp.firstMenu);
    refs.offBtn.disabled = false;
  }, 6000);
}

function setMenu(tmp) {
  refs.input.innerHTML = tmp;
  document.onkeydown = keys;
}

function keys(e) {
  const elem = refs.input.firstChild.children;
  if (e.key === "ArrowDown") downKey(elem);
  else if (e.key === "ArrowUp") upKey(elem);
  else if (e.key === "Enter") enterKey(elem);
  else if (e.key === "Backspace") backKey();
}

function downKey(elem) {
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].classList.contains("item--current")) {
      if (i === elem.length - 1) {
        elem[i].classList.remove("item--current");
        elem[0].classList.add("item--current");
      } else {
        elem[i].classList.remove("item--current");
        elem[i + 1].classList.add("item--current");
      }
      break;
    }
  }
}

function upKey(elem) {
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].classList.contains("item--current")) {
      if (i === 0) {
        elem[i].classList.remove("item--current");
        elem[elem.length - 1].classList.add("item--current");
      } else {
        elem[i].classList.remove("item--current");
        elem[i - 1].classList.add("item--current");
      }
      break;
    }
  }
}

function enterKey(elem) {
  for (let i = 0; i < elem.length; i++) {
    if (
      elem[i].classList.contains("item--current") &&
      refs.input.firstChild.classList.contains("list")
    ) {
      switch (i) {
        case 0:
          setMenu(tmp.secondMenu);
          break;
        case 1:
          setMenu(tmp.nextMenu);
          break;
        case 2:
          setMenu(tmp.lastMenu);
          break;
      }
    }
  }
}

function backKey() {
  if (refs.input.firstChild.classList.contains("list")) return;
  setMenu(tmp.firstMenu);
}
