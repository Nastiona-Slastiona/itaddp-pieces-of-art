import AbstractView from "./abstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.resetStyles();
        this.resetScripts();
        this.addMode();
        this.setTitle("Pieces Of Art");
        this.cleanNavbar();
        this.getMode();
        this.setHomeSelected();
    }

    setHomeSelected() {
        document.querySelectorAll('.navbar__item')[0].classList.add('navbar__item--selected');

    }

    async changeHtml() {
        const nav = document.querySelector('.navbar__list').childNodes;
        nav[nav.length - 2].innerHTML = `<a class="button navbar__item" href="./signin" data-link>Sign In</a>`;
    }

    async getHtml() {
        return `
        <main class="main">
            <p class="main__header">How to play</p>
            <p class="main__header--small">Solve the puzzle - get a picture!</p>
            <section class="main__content">
                <section>
                    <article class="main__text">Our game is one of the most interesting and simple puzzles in the
                        world.<br />
                        ----------<br />
                        Using an empty cell for movement, you need to rearrange the chips so that they make up a
                        beautiful picture.</article>
                    <a class="button button--longer" href="./player" data-link >Play</a>
                </section>
                <div class="main__wrapper">
                    <img alt="Background picture dark mode" src="./static/images/main_background--dark.jpg"
                        class="main__image" />
                </div>
            </section>
        </main>
        `;
    }
};
