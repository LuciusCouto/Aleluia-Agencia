var s1 = window.document.querySelector(".s1");
var prev = window.document.querySelector("#prev");
var prox = window.document.querySelector("#prox");
var bubble;

function btnProx() {
  if (s1.style.marginLeft == "25vw") {
    bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-6vw";
    bubble = window.document.querySelector(".bubble2").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-6vw") {
    bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft =  "-37vw";
    bubble = window.document.querySelector(".bubble3").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-37vw") {
    bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-68vw";
    bubble = window.document.querySelector(".bubble4").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-68vw") {
    bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-99vw";
    bubble = window.document.querySelector(".bubble5").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-99vw") {
    bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-130vw";
    bubble = window.document.querySelector(".bubble6").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-130vw") {
    bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-161vw";
    bubble = window.document.querySelector(".bubble7").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-161vw") {
    bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-192vw";
    bubble = window.document.querySelector(".bubble8").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-192vw") {
    bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-223vw"
    bubble = window.document.querySelector(".bubble9").style.backgroundColor = "gray";
  } else {
    bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "25vw";
    bubble = window.document.querySelector(".bubble1").style.backgroundColor = "gray";
  };
};

function btnPrev() {
  if (s1.style.marginLeft == "25vw") {
    bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-223vw";
    bubble = window.document.querySelector(".bubble9").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-6vw") {
    bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft =  "25vw";
    bubble = window.document.querySelector(".bubble1").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-37vw") {
    bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-6vw";
    bubble = window.document.querySelector(".bubble2").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-68vw") {
    bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-37vw";
    bubble = window.document.querySelector(".bubble3").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-99vw") {
    bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-68vw";
    bubble = window.document.querySelector(".bubble4").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-130vw") {
    bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-99vw";
    bubble = window.document.querySelector(".bubble5").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-161vw") {
    bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-130vw";
    bubble = window.document.querySelector(".bubble6").style.backgroundColor = "gray";
  } else if (s1.style.marginLeft == "-192vw") {
    bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-161vw"
    bubble = window.document.querySelector(".bubble7").style.backgroundColor = "gray";
  } else {
    bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
    s1.style.marginLeft = "-192vw";
    bubble = window.document.querySelector(".bubble8").style.backgroundColor = "gray";
  };
};

function bub1() {
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "25vw";
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "gray";
};

function bub2() {
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "-6vw";
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "gray";
};

function bub3() {
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "-37vw";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "gray";
};

function bub4() {
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "-68vw";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "gray";
};

function bub5() {
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "-99vw";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "gray";
};

function bub6() {
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "-130vw";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "gray";
};

function bub7() {
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "-161vw";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "gray";
};

function bub8() {
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "-192vw";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "gray";
};

function bub9() {
  bubble = window.document.querySelector(".bubble1").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble2").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble3").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble4").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble5").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble6").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble7").style.backgroundColor = "rgb(194, 194, 194)";
  bubble = window.document.querySelector(".bubble8").style.backgroundColor = "rgb(194, 194, 194)";
  s1.style.marginLeft = "-223vw";
  bubble = window.document.querySelector(".bubble9").style.backgroundColor = "gray";
};