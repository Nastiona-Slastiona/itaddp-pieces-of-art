export default class {
    constructor() {

    }

    setTitle(title) {
        document.title = title;
    }

    getMode() {
        const mode = localStorage.getItem('mode');
        this.setMode(mode);
        if (mode === 'light' && document.querySelector('.dark_mode')) {
            document.querySelector('.dark_mode').classList.add('light_mode');
            document.querySelector('.dark_mode').classList.remove('dark_mode');
        } else if ((mode === 'dark') && (document.querySelector('.dark_mode') === 'undefined')) {
            document.getElementsByTagName('body').classList.add('dark_mode');
            document.getElementsByTagName('body').classList.remove('light_mode');
        }
    }

    setMode(mode) {
        localStorage.setItem('mode', mode);
    }

    async getHtml() {
        return "";
    }
}