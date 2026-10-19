// wwwroot/js/site.js
document.addEventListener("DOMContentLoaded", function () {
    var burgerBtn = document.getElementById("burgerBtn");
    var mainNav = document.getElementById("mainNav");

    if (!burgerBtn || !mainNav) return;

    function closeMenu() {
        mainNav.classList.remove("main-nav--open");
        burgerBtn.classList.remove("burger--open");
        burgerBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
    }

    function toggleMenu() {
        var isOpen = mainNav.classList.toggle("main-nav--open");
        burgerBtn.classList.toggle("burger--open", isOpen);
        burgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.classList.toggle("no-scroll", isOpen);
    }

    burgerBtn.addEventListener("click", toggleMenu);

    // закрываем меню при клике на любую ссылку внутри
    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    // закрываем при переходе на широкий экран (например, поворот планшета)
    window.addEventListener("resize", function () {
        if (window.innerWidth > 992) {
            closeMenu();
        }
    });
});