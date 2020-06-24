window.onscroll = function () {
  let sticker = document.getElementById("sticker");
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    sticker.style.top = "0";
  } else {
    sticker.style.top = "-60px";
  }
}