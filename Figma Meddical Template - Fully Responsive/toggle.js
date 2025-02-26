function toggleMenu() {
    let menu = document.getElementById("nav-menu");
    let icon = document.querySelector(".menu-icon");

    menu.classList.toggle("show");

    // for icon change between hamburger and cross
    if (menu.classList.contains("show")) {
        icon.innerHTML = "✖"; 
    } else {
        icon.innerHTML = "☰"; 
    }
}
