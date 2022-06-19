//testimonials

const testimonials = document.querySelector(".testimonialCards");
const testimonial = document.querySelectorAll(".testimonialCard");
const previous = document.querySelector(".icon-previous");
const next = document.querySelector(".icon-next");
const icon = document.querySelectorAll(".icon");

let i = 0,
  j = 0;
document.addEventListener("mousemove", function () {
  if (window.innerWidth <= 768) {
    previous.addEventListener("click", function () {
      console.log("previous clicked");
      j--;
      if (j < 0) {
        j = testimonial.length - 1;
      }
      for (i = 0; i < testimonial.length; i++) {
        console.log(j);
        testimonial[i].classList.add("hide");
        testimonial[j].classList.remove("hide");
      }
    });
    next.addEventListener("click", function () {
      console.log("next clicked");
      j++;
      if (j >= testimonial.length) {
        j = 0;
      }
      for (i = 0; i < testimonial.length; i++) {
        console.log(j);
        testimonial[i].classList.add("hide");
        testimonial[j].classList.remove("hide");
      }
    });
    for (i = 0; i < testimonial.length; i++) {
      console.log(j);
      testimonial[i].classList.add("hide");
      testimonial[j].classList.remove("hide");
    }
  } else {
    for (i = 0; i < testimonial.length; i++) {
      testimonial[i].classList.remove("hide");
    }
  }
});
