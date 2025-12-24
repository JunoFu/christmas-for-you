document.querySelectorAll(".city").forEach(section => {
  const carousel = section.querySelector(".carousel");
  const dots = section.querySelectorAll(".dot");
  const imgs = carousel.querySelectorAll("img");

  carousel.addEventListener("scroll", () => {
    const index = Math.round(carousel.scrollLeft / imgs[0].offsetWidth);
    dots.forEach(d => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });
});
