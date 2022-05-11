var users = { "user@mail.com": "12345" }

const createAlert = function (className, message, classWhereAdd) {
    if (document.querySelector(`.${className}`)) {
        document.querySelector(`.${className}`).remove()
    }

    let div = document.createElement('div');
    div.className = className;
    div.innerHTML = message;
    const elementWithAlert = document.querySelector(classWhereAdd);
    elementWithAlert.prepend(div);
}

class SignIn {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit()
    }

    validateonSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (users[email.value] !== undefined) {
                    if (password.value === users[email.value]) {
                        if (document.querySelector('.main__alert')) {
                            document.querySelector('.main__alert').remove()
                        }
                        console.log("success");
                        window.location.replace("http://172.20.10.3:5501/src/pages/galery.html")
                    } else {
                        createAlert("main__alert",
                            "Wrong password,<strong> please try again.</strong>",
                            ".main__form");
                    }

                } else {
                    createAlert("main__alert",
                        "There is no user whith such email,<strong> please register first.</strong>",
                        ".main__form");
                }
            })

        })
    }
}

const form = document.querySelector(".main__form");
if (form) {
    const fields = ["email", "password"];
    const validator = new SignIn(form, fields)
}

