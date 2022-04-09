import AbstractView from "./abstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Galery");
        this.addStyle();
        this.changeHtml();
    }

    addStyle() {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './styles/galery.css';
        head.appendChild(link);
    }

    changeHtml() {
        document.querySelector('.header__change-mode').remove();
        document.querySelector('.body').classList.remove('dark_mode');
        document.querySelectorAll('.navbar__item')[1].classList.add('navbar__item--selected');
    }

    async getHtml() {
        return `
        <main class="main">
            <section class="main__search">
                <input class="search__input" placeholder="Search..." id="search__input">
                <label class="search__label" for="search__input">
                    <img src="../static/images/search.png" alt="search icon" class="search__icon">
                </label>
            </section>
            <section class="main__galery">
                <div class="main__navigation main__navigation--left"><img src="../static/images/left-arrow.png"
                        alt="left_navigation" class="navigation"></div>
                <div class="main__navigation main__navigation--right"><img src="../static/images/right-arrow.png"
                        alt="right_navigation" class="navigation"></div>
                <article class="galery__item galery__item--left">
                    <div class="item__wrapper item__wrapper--left">
                        <img class="item__image" src="../static/images/Mona_Lisa--cut.jpg" alt="Mona_Lisa" />
                        <div class="item__complexity" title="start game">
                            <a class="complexity__type complexity__type--selected" href="/player">3x3</a>
                            <a class="complexity__type" href="/player4x4">4x4</a>
                            <a class="complexity__type" href="/player5x5">5x5</a>
                        </div>
                    </div>
                    <article class="item__text">
                        <span class="text__header">The Mona Lisa</span>
                        <article class="text__article">
                            a half-length portrait painting by Italian artist Leonardo da
                            Vinci
                        </article>
                    </article>
                </article>
                <article class="galery__item galery__item--right">
                    <article class="item__text">
                        <span class="text__header">The Last Day of Pompei</span>
                        <article class="text__article">
                            a large history painting by Karl Bryullov produced in 1830-1833.
                        </article>
                    </article>
                    <div class="item__wrapper item__wrapper--right">
                        <img class="item__image" alt="The_last_day_of_the_Pompei" src="../static/images/registration-back.png">
                        <div class="item__complexity" title="start game">
                            <span class="complexity__type complexity__type--selected">3x3</span>
                            <span class="complexity__type">4x4</span>
                            <span class="complexity__type">5x5</span>
                        </div>
                    </div>
                </article>
            </section>
        </main>
        `;
    }
}