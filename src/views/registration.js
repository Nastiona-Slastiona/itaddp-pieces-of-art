import AbstractView from "./abstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Registration");
        this.addStyle();
        this.getMode();
    }

    addStyle() {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './styles/registration.css';
        head.appendChild(link);
    }

    async getHtml() {
        return `
        <main class="main">
            <form method="post" class="main__form" id="main-form">
                <ul class="form__list">
                    <li class="form__item">
                        <label>Email*</label>
                        <input class="form__input" placeholder="Email" type="email" id="email" name="user_email" required>
                    </li>
                    <li class="form__item">
                        <label>Name*</label>
                        <input class="form__input" placeholder="Name" type="text" id="Name" name="user_name" required>
                    </li>
                    <li class="form__item">
                        <label>Password*</label>
                        <input class="form__input" placeholder="Password" type="password" id="password" required>
                    </li>
                    <li class="form__item">
                        <label>Password*</label>
                        <input class="form__input" placeholder="Confirm password" type="password" id="confirm_password"
                            name="user_password_confirmation" required>
                    </li>
                    <li class="form__item">
                        <label>Profile image</label>
                        <label for="user-image" class="form__label--file">Choose file</label>
                        <input class="form__input form__input--file" type="file" id="user-image" form="main-form">
                    </li>
                </ul>
                <div class="form__item--centralized">
                    <button type="submit" class="button">Submit</button>
                </div>
            </form>
        </main>
        `;
    }
}