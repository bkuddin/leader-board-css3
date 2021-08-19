/* //---------
 ---------------Solution-1 -----------------
// */

document.getElementById("top-players-title").style.color = "rgb(128, 0, 128)";

document.getElementById("top-blogs-title").style.color = "rgb(128, 0, 128)";

/* //---------
 ---------------Solution-2 -----------------
// */

function resetColor() {
  var playerBG = document.getElementsByClassName("player"); // get all player
  for (var i = 0; i < playerBG.length; i++) {
    playerBG[i].style.background = "rgba(118,1,252,0.17)";
  }
}
resetColor();
