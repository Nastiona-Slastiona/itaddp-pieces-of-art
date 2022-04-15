import AbstractView from "./abstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.resetStyles();
        this.addMode();
        this.setTitle("Sign In");
        this.addStyle();
        this.changeHtml();
        this.getMode();
    }

    addStyle() {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './styles/signIn.css';
        head.appendChild(link);
    }

    changeHtml() {
        const nav = document.querySelector('.navbar__list').childNodes;
        nav[7].remove();
        const reg = document.createElement('li');
        reg.innerHTML = `<a class="button navbar__item" href="./registration" data-link>Register</a>`;

        document.querySelector('.navbar__list').appendChild(reg);
    }

    async getHtml() {
        return `
        <main class="main">
            <form method="post" class="main__form">
                <ul class="form__list">
                    <li class="form__item">
                        <label>Email</label>
                        <input class="form__input" placeholder="Email" type="email" id="email" name="user_email"
                            required>
                    </li>
                    <li class="form__item">
                        <label>Password</label>
                        <input class="form__input" placeholder="Password" type="password" id="password" autocomplete
                            required>
                    </li>
                    <li class="form__item">
                        <input type="checkbox">
                        <label><small>Remember me</small></label>
                    </li>
                    <li class="form__item--centralized">
                        <button type="submit" class="button">Submit</button>
                    </li>
                </ul>
            </form>
            <section class="main__info">
                <img class="main__image" src="../static/images/signIn_background.jpg"
                    alt="Всадница. Карл Брюллов, 1832">
                <label class="main__label">Karl Brullov, 1832</label>
            </section>
        </main>
        `;
    }
}