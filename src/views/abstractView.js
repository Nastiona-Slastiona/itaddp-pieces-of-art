export default class {
    constructor() {

    }

    setTitle(title) {
        document.title = title;
    }

    getMode() {
        const mode = localStorage.getItem('mode');
        if (mode === 'light' && document.querySelector('.dark_mode')) {
            document.querySelector('.dark_mode').classList.add('light_mode');
            document.querySelector('.dark_mode').classList.remove('dark_mode');
        } else if ((mode === 'dark') && (document.querySelector('.dark_mode') === 'undefined')) {
            document.getElementsByTagName('body').classList.add('dark_mode');
            document.getElementsByTagName('body').classList.remove('light_mode');
        }
    }

    cleanNavbar() {
        const navbarItems = Array.from(document.querySelectorAll('.navbar__item'));
        navbarItems.forEach(nabarItem => {
            nabarItem.classList.remove('navbar__item--selected')
        });
    }

    resetStyles() {
        document.head.innerHTML = '<link rel="icon" href="./static/icons/puzzle.ico" />\n' +
            '<meta charset="UTF-8">\n' +
            '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
            '<link rel="stylesheet" href="./styles/main.css" />\n' +
            '<link rel="stylesheet" href="./styles/reset.css" />\n' +
            '<link rel="preconnect" href="https://fonts.googleapis.com"></link>\n';
    }

    resetScripts() {
        const script = document.getElementById('player');
        if (script) {
            script.remove();
        }
    }

    addMode() {
        const changeMode = document.createElement('div');
        changeMode.className = 'header__change-mode';
        changeMode.title = 'change mode';
        document.querySelector('.header').append(changeMode);
        const mode = localStorage.getItem('mode');
        if (mode === 'dark') {
            document.body.classList.add('dark_mode');
        }

        changeMode.addEventListener("click", e => {
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
    }

    setMode(mode) {
        localStorage.setItem('mode', mode);
    }

    async getHtml() {
        return "";
    }
}