/* //---------
 ---------------Solution-1 -----------------
// */

document.getElementById("top-players-title").style.color = "rgb(128, 0, 128)";

document.getElementById("top-blogs-title").style.color = "rgb(128, 0, 128)";

/* //---------
 ---------------Solution-2 -----------------
// */

// Here we need to access each element in the collection and change the style(using a loop).

function resetColor() {
  var playerBG = document.getElementsByClassName("player"); // get all player
  for (var i = 0; i < playerBG.length; i++) {
    playerBG[i].style.background = "rgba(118,1,252,0.17)";
  }
}
resetColor();

/* //---------
 ---------------Solution-3 -----------------
// */

document.getElementById("list-btn").addEventListener("click", function () {
  // console.log("clicked");
  const li = document.createElement("li");
  li.innerText = "React";
  const ul = document.getElementById("list-item");
  ul.appendChild(li);
});

/* //---------
 ---------------Solution-4 -----------------
// */

/* document.getElementById("add-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  // const inputNumberText = parseInt(inputNumber.value);
  // inputNumber.value = inputNumberText + 1;

  // এই কাজটির সংক্ষিপ্ত রুপ নিচেরটি
  inputNumber.value = parseInt(inputNumber.value) + 1;
}); */

/* //---------
 ---------------Solution-5 -----------------
// */

const addBtn = document.getElementById("add-btn");
const inputNumber = document.getElementById("input-number");

addBtn.addEventListener("click", function () {
  inputNumber.value = parseInt(inputNumber.value) + 1;
  if (inputNumber.value == 5) {
    addBtn.disabled = true;
  } else {
    addBtn.disabled = false;
  }
});
