import AbstractView from "./abstractView.js";
import complexities from "../constants/complexities.js";
import { changeComplexity } from "../helpers/playServiceHelper.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.resetStyles();
        this.cleanNavbar();
        this.setTitle("Player");
        this.addStyles();
        this.changeHtml();
    }

    addStyles() {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './styles/playPage.css';
        head.appendChild(link);

    }

    changeHtml() {
        const body = document.querySelector('.body');
        const script = document.createElement('script');
        if (document.querySelector('.header__change-mode')) {
            document.querySelector('.header__change-mode').remove();
        }
        body.classList.remove('dark_mode');

        console.log('player start');
        script.src = './scripts/play.js';
        script.type = 'module';
        script.id = 'player';
        body.append(script);
    }

    async setImage(complexity) {
        const playwindow = document.querySelector('.main__playwindow');

        if (complexity > 3) {
            const newClass = complexity === 4 ? complexities.middle.className : complexities.hard.className;

            playwindow.classList.remove(complexities.easy.className);
            playwindow.classList.add(newClass);

            changeComplexity(playwindow, complexity * complexity, 3 * 3);

            const article1 = document.createElement('aritcle');
            article1.className = "complexity__item";
            article1.title = "Choose the other complexity";
            const span1 = document.createElement('span');
            span1.innerText = complexities.easy.name;
            article1.append(span1);

            const article2 = document.createElement('aritcle');
            article2.className = "complexity__item";
            article2.title = "Choose the other complexity";
            const span2 = document.createElement('span');
            span2.innerText = complexity === 4 ? complexities.hard.name : complexities.middle.name;
            article2.append(span2);

            const articleContainer = document.querySelector('.main__complexity');
            articleContainer.innerHTML = "";
            articleContainer.append(article1);
            articleContainer.append(article2);

        }
        const items = Array.from(document.querySelectorAll('.playwindow__puzzle'));

        for (let i = 0; i < items.length; i++) {
            items[i].innerHTML = `<img src='../static/images/pic1/${complexity}x${complexity}/${i < 9 ? 0 : ''}${i + 1}.jpg'/>`;
        };
    }

    async getHtml() {
        return `
        <section class="score"><span>0</span></section>
        <main class="main">
            <section class="main__complexity">
                <article class="complexity__item" title="Choose the other complexity"><span>4x4</span></article>
                <article class="complexity__item" title="Choose the other complexity"><span>5x5</span></article>
            </section>
            <section class="main__player">
                <section class="main__playwindow complexity--easy" data-matrix>
                    <button data-matrix-id="1" class="playwindow__puzzle"></button>
                    <button data-matrix-id="2" class="playwindow__puzzle"></button>
                    <button data-matrix-id="3" class="playwindow__puzzle"></button>
                    <button data-matrix-id="4" class="playwindow__puzzle"></button>
                    <button data-matrix-id="5" class="playwindow__puzzle"></button>
                    <button data-matrix-id="6" class="playwindow__puzzle"></button>
                    <button data-matrix-id="7" class="playwindow__puzzle"></button>
                    <button data-matrix-id="8" class="playwindow__puzzle"></button>
                    <button data-matrix-id="9" class="playwindow__puzzle"></button>
                </section>
            </section>
            <aside class="main__top">
                <section class="top">
                    <span class="top__header">Top</span>
                    <ol class="top__list">
                        <li class="top__user">Name/Score</li>
                        <li class="top__user">Name/Score</li>
                        <li class="top__user">Name/Score</li>
                        <li class="top__user">Name/Score</li>
                        <li class="top__user">Name/Score</li>
                    </ol>
                </section>
            </aside>
        </main>
        `;
    }
}