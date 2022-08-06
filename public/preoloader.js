var delayInMilliseconds = 1400;

window.onload = setTimeout(() => {
  document.querySelector(".preloader").style.zIndex = "-1";
  document.querySelector(".preloader").style.opacity = "0";
  document.querySelector(".root").style.overflow = "initial";
}, delayInMilliseconds);
