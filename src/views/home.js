import AbstractView from "./abstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Pieces Of Art");
        this.getMode();
        this.setHomeSelected();
    }

    setHomeSelected() {
        document.querySelectorAll('.navbar__item')[0].classList.add('navbar__item--selected');
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
                    <a class="button button--longer" href="./player">Play</a>
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
