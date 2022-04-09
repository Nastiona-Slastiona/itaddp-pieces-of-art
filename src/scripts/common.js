const burger_menu = document.querySelector(".header__burger");

burger_menu.addEventListener("click", (e) => {
    e.preventDefault();

    toggleBurgerMenu(document.querySelector(".header__burger--opened"))
});

const toggleBurgerMenu = isOpen => {
    if (isOpen) {
        burger_menu.classList.add("header__burger--closed");
        burger_menu.classList.remove("header__burger--opened");
        document.querySelector('.header__navbar').style.display = "";
    } else {
        burger_menu.classList.add("header__burger--opened");
        burger_menu.classList.remove("header__burger--closed");
        document.querySelector('.header__navbar').style.display = "block";
    }
}

const change__mode = document.querySelector(".header__change-mode");

change__mode.addEventListener("click", e => {
    if (document.querySelector(".dark_mode")) {
        document.body.classList.remove("dark_mode");
        document.body.classList.add("light_mode");
        if (location.pathname === '/') {
            const image = document.querySelector(".main__image");
            image.src = "./static/images/main-image-light.png";
            image.style.maxWidth = "300px";
        }

        localStorage.setItem('mode', 'light');

    } else {
        document.body.classList.add("dark_mode");
        document.body.classList.remove("light_mode");

        if (location.pathname === '/') {
            const image = document.querySelector(".main__image");
            image.src = "./static/images/main_background--dark.jpg";
            image.style.maxWidth = "";
        }
        localStorage.setItem('mode', 'dark');
    }
})