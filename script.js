function demo1() {
  document.getElementById("root").style.color = "red";
}

function demo2() {
  var divdata = document.getElementsByClassName("blue-white");
  divdata[0].style.backgroundColor = "blue";
  divdata[0].style.color = "white";
}

function demo3() {
  var divdata = document.getElementsByClassName("blue-white");
  divdata[1].style.backgroundColor = "blue";
  divdata[1].style.color = "white";
}
function demo4() {
  var p = document.getElementsByTagName("p");
  p[1].style.fontSize = "50px";
}
