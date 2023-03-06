function showP1() {
  document.getElementById("pp2").style.display = "none";
  document.getElementById("pp3").style.display = "none";
  document.getElementById("pp1").style.display = "block";
}

function showP2() {
  document.getElementById("pp1").style.display = "none";
  document.getElementById("pp3").style.display = "none";
  document.getElementById("pp2").style.display = "block";
}

function showP3() {
  document.getElementById("pp1").style.display = "none";
  document.getElementById("pp2").style.display = "none";
  document.getElementById("pp3").style.display = "block";
}

function hideVideo2() {
  document.getElementById("videoBox2").style.display = "none";
  document.getElementById("videoBox1").style.display = "block";
}

function hideVideo1() {
    document.getElementById("videoBox1").style.display = "none";
    document.getElementById("videoBox2").style.display = "block";
  }