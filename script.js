const infoButton = document.querySelector('#info-button')
const articleArea = document.querySelector('.article-area')
const b = document.querySelector('#letter-one-b')
const e = document.querySelector('#letter-two-e')
const eTwo = document.querySelector('#letter-three-e')
const r = document.querySelector('#letter-four-r')
const beerIconOne = document.querySelector('#beer-icon-one')
const beerIconTwo = document.querySelector('#beer-icon-two')
const jokesTextArea = document.querySelector(".text-box");
const buttonYes = document.querySelector("#yes-button");
const buttonNo = document.querySelector("#no-button");

const scrollInto = () => articleArea.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

infoButton.addEventListener('click', () => scrollInto())

window.onscroll = () => {
    scrollBarNav();
    scrollBeerLogo();
}

const scrollBarNav = () => {
    const navBar = document.querySelector('#mynav')
    const navBarBrand = document.querySelector('.navbar-brand')
    if (document.documentElement.scrollTop > 100) {
        navBar.classList.add('nav-background-color');
        navBarBrand.classList.add('navbar-brand-color')
    } else {
        navBar.classList.remove('nav-background-color');
        navBarBrand.classList.remove('navbar-brand-color')
    }
}

const scrollBeerLogo = () => {
    if (document.documentElement.scrollTop > 400) {
        b.classList.add('letter-one-b-animation');
        e.classList.add('letter-two-e-animation');
        eTwo.classList.add('letter-three-e-animation');
        r.classList.add('letter-four-r-animation');
        beerIconOne.classList.add('beer-icon-one-animation')
        beerIconTwo.classList.add('beer-icon-two-animation')
    }
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    jokesTextArea.innerHTML = jokeText

};

const noJoke = () => {
    jokesTextArea.innerHTML = "FINE THEN!"
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :(";
    }
};

buttonYes.addEventListener("click", addNewJoke);
buttonNo.addEventListener("click", noJoke)


