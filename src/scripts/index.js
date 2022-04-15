import home from "../views/home.js";
import galery from "../views/galery.js";
import signIn from "../views/signIn.js";
import registration from "../views/registration.js";
import player from "../views/player.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {
            path: "/", view: home
        },
        {
            path: "/signin", view: signIn
        },
        {
            path: "/galery", view: galery
        },
        {
            path: "/registration", view: registration
        },
        {
            path: "/player", view: player
        },
        {
            path: "/player4x4", view: player
        },
        {
            path: "/player5x5", view: player
        }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();

    if (location.pathname === "/player" || match.route.path === "/player4x4" || match.route.path === "/player5x5") {
        const complexity = match.route.path.endsWith("4x4") ? 4 : match.route.path.endsWith('5x5') ? 5 : 3;

        await view.setImage(complexity);
    }

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches !== 'undefined') {
            if (e.target.matches("[data-link]")) {
                e.preventDefault();
                navigateTo(e.target.href);
            }
        }
    });
    router();
})