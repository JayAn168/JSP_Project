const typing = document.getElementById("gocoder_typing");
const typewriter = new Typewriter(typing, { loop: true });
const parent = document.getElementById("typingAnimation");
const search = document.getElementById("hidden_search");
typewriter
  .typeString("웹사이트 제작")
  .pauseFor(1000)
  .deleteAll()
  .typeString("메타버스")
  .pauseFor(1000)
  .deleteAll()
  .typeString("1조 최강")
  .pauseFor(1000)
  .deleteAll()
  .typeString("퍼블리싱")
  .pauseFor(1000)
  .deleteAll()
  .typeString("어렵네요")
  .pauseFor(1000)
  .deleteAll()
  .start();

function remove() {
  parent.removeChild(typing);
}

function append() {
  search.value = "";
  parent.appendChild(typing);
  const typewriter = new Typewriter(typing, { loop: true });
  typewriter
    .typeString("웹사이트 제작")
    .pauseFor(1000)
    .deleteAll()
    .typeString("메타버스")
    .pauseFor(1000)
    .deleteAll()
    .typeString("1조 최강")
    .pauseFor(1000)
    .deleteAll()
    .typeString("퍼블리싱")
    .pauseFor(1000)
    .deleteAll()
    .typeString("어렵네요")
    .pauseFor(1000)
    .deleteAll()
    .start();
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function changebgc() {
  const pagenum = document.getElementsByClassName("swiper-slide-active");
  let num = pagenum[0].innerText;
  const bgc = document.getElementById("swiper_ad");
  if (num == 1) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(0, 60, 215)";
  } else if (num == 2) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(255, 153, 0)";
  } else if (num == 3) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(255, 113, 139)";
  } else if (num == 4) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(33, 34, 36)";
  } else if (num == 5) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(150, 96, 240)";
  } else if (num == 6) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(12, 69, 65)";
  } else if (num == 7) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(55, 17, 108)";
  }
}
let interval = setInterval(changebgc, 300);

const nextbtn = document.getElementById("nextbtn");
const prevbtn = document.getElementById("prevbtn");
prevbtn.addEventListener("click", clickBtn);
nextbtn.addEventListener("click", clickBtn);
function clickBtn() {
  clearInterval(interval);
  const pagenum = document.getElementsByClassName("swiper-slide-active");
  const num = pagenum[0].innerText;
  const bgc = document.getElementById("swiper_ad");
  if (num == 1) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(0, 60, 215)";
  } else if (num == 2) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(255, 153, 0)";
  } else if (num == 3) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(255, 113, 139)";
  } else if (num == 4) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(33, 34, 36)";
  } else if (num == 5) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(150, 96, 240)";
  } else if (num == 6) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(12, 69, 65)";
  } else if (num == 7) {
    bgc.style.transition = "all 0.5s";
    bgc.style.backgroundColor = "rgb(55, 17, 108)";
  }
}
