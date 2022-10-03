//=========================================================
//=========================================================

const menuArr = [
  document.querySelector(".list"),
  document.querySelector(".second-list"),
  document.querySelector(".next-list"),
  document.querySelector(".last-list"),
];

const firstMenuArr = [
  document.querySelector(".item"),
  document.querySelector(".item1"),
  document.querySelector(".item2"),
];
const secondMenuArr = [
  document.querySelector(".item3"),
  document.querySelector(".item4"),
  document.querySelector(".item5"),
];
const nextMenuArr = [
  document.querySelector(".item6"),
  document.querySelector(".item7"),
  document.querySelector(".item8"),
];
const lastMenuArr = [
  document.querySelector(".item9"),
  document.querySelector(".item10"),
  document.querySelector(".item11"),
];

let currentArr = firstMenuArr;

document.onkeydown = (event) => {
  if (event.key === "ArrowDown") down(currentArr);
  else if (event.key === "ArrowUp") up(currentArr);
  else if (event.key === "Enter") enter(currentArr);
  else if (event.key === "Backspace") backSpace();
};

function down(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains("item--current")) {
      if (i === arr.length - 1) {
        arr[i].classList.remove("item--current");
        arr[0].classList.add("item--current");
      } else {
        arr[i].classList.remove("item--current");
        arr[i + 1].classList.add("item--current");
      }
      break;
    }
  }
}

function up(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains("item--current")) {
      if (i === 0) {
        arr[i].classList.remove("item--current");
        arr[arr.length - 1].classList.add("item--current");
      } else {
        arr[i].classList.remove("item--current");
        arr[i - 1].classList.add("item--current");
      }
      break;
    }
  }
}

function enter(arr) {
  document.querySelector(".list").classList.remove("On");
  for (let i = 0; i < arr.length; i++) {
    if (arr === firstMenuArr && arr[i].classList.contains("item--current")) {
      if (i === 0) {
        menuArr[0].classList.add("hidden");
        menuArr[i + 1].classList.remove("hidden");
        currentArr = secondMenuArr;
      } else if (i === 1) {
        menuArr[0].classList.add("hidden");
        menuArr[i + 1].classList.remove("hidden");
        currentArr = nextMenuArr;
      } else if (i === 2) {
        menuArr[0].classList.add("hidden");
        menuArr[i + 1].classList.remove("hidden");
        currentArr = lastMenuArr;
      }
      break;
    }
  }
}

function backSpace() {
  for (let i = 1; i < menuArr.length; i++) {
    menuArr[i].classList.add("hidden");
  }
  menuArr[0].classList.remove("hidden");
  currentArr = firstMenuArr;
}
