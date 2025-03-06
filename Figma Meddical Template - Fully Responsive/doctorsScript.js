document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".doctor-cards-wrapper");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = dots.length;
    let currentSlide = 0;

    function changeSlide(index) {
        if (index >= 0 && index < totalSlides) {
            currentSlide = index;
            const translateValue = -index * 100 + "%";
            wrapper.style.transform = `translateX(${translateValue})`;

            dots.forEach(dot => dot.classList.remove("active"));
            dots[currentSlide].classList.add("active");
        }
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => changeSlide(index));
    });

    changeSlide(0);
});
