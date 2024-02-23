let slides = document.querySelectorAll(".slides");
let len = 0;

let slidlen = slides.length;

function slider(len) {
  slides.forEach((slider, index) => {
    if (index === len) {
      slider.style.display = "flex";
    } else {
      slider.style.display = "none";
    }
  });
}

function next() {
  len = len < slidlen - 1 ? len + 1 : 0;
  slider(len);
}
function previous() {
  len = len > 0 ? len - 1 : slidlen - 1;
  slider(len);
}
slider(len);
