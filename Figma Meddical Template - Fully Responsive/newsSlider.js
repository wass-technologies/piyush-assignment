document.addEventListener("DOMContentLoaded", function () {
    const newsSlider = document.querySelector(".news-slider");
    const newsDots = document.querySelectorAll(".news-dot");

    let currentIndex = 0;
    const totalSlides = newsSlider.children.length;

    function updateSlider(index) {
        newsSlider.style.transform = `translateX(-${index * 100}%)`;
        newsDots.forEach(dot => dot.classList.remove("active"));
        newsDots[index].classList.add("active");
    }

    newsDots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });

    updateSlider(0);
});
