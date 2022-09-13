document.querySelector(".red").onclick = () => {
  if (!document.querySelector(".red").classList.contains("on")) {
    document.querySelector(".red").classList.add("on");
    document.querySelector(".green").classList.remove("on");

    document.querySelector(".list").classList.add("Off");
    document.querySelector(".second-list").classList.add("Off");
    document.querySelector(".next-list").classList.add("Off");
    document.querySelector(".last-list").classList.add("Off");

    document.querySelector(".first-logo").classList.add("hidden");
    document.querySelector(".second-logo").classList.remove("hidden");
    document.querySelector(".second-logo").classList.remove("Off");
    document.querySelector(".logo").classList.remove("On");
    document.querySelector(".logo").classList.remove("Off");

    currentArr = firstMenuArr;

    setTimeout(() => {
      for (let i = 1; i < menuArr.length; i++) {
        menuArr[i].classList.add("hidden");
      }

      firstMenuArr[0].classList.add("item--current");
      firstMenuArr[1].classList.remove("item--current");
      firstMenuArr[2].classList.remove("item--current");
    }, 1000);
  }
};

document.querySelector(".green").onclick = () => {
  document.querySelector(".red").disabled = true;

  document.querySelector(".red").classList.remove("on");
  document.querySelector(".green").classList.add("on");

  document.querySelector(".logo").classList.remove("hidden");
  document.querySelector(".logo").classList.add("On");
  setTimeout(() => {
    document.querySelector(".second-logo").classList.add("Off");
    setTimeout(() => {
      document.querySelector(".second-logo").classList.add("hidden");
      document.querySelector(".first-logo").classList.remove("hidden");
      document.querySelector(".first-logo").classList.add("On");
      setTimeout(() => {
        document.querySelector(".logo").classList.add("Off");
        setTimeout(() => {
          document.querySelector(".logo").classList.add("hidden");
          document.querySelector(".red").disabled = false;
        }, 1500);
      }, 1500);
    }, 1500);
  }, 1500);

  setTimeout(() => {
    document.querySelector(".list").classList.remove("Off");
    document.querySelector(".second-list").classList.remove("Off");
    document.querySelector(".next-list").classList.remove("Off");
    document.querySelector(".last-list").classList.remove("Off");

    document.querySelector(".list").classList.remove("hidden");
    document.querySelector(".list").classList.add("On");
  }, 6100);
};

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
