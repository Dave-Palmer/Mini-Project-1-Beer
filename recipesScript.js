
window.onscroll = () => scrollBarNav()

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

function addObject(obj) {
    for (let ob of obj) {
        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = ob.name;
        template.querySelector('#abv').innerText = 'ABV' + ' ' + ob.abv + '%';
        ob.ingredients.malt.forEach(malt => {
            template.querySelector('.card-text-malt').innerText += `\n ${malt.name} - ${malt.amount.value} Kgs`
        })
        ob.ingredients.hops.forEach(hop => {
            template.querySelector('.card-text-hops').innerText += `\n ${hop.name} \n${hop.amount.value} ${hop.amount.unit} at ${hop.add} of boil`
        });
        template.querySelector('.card-text-yeast').innerText = ob.ingredients.yeast
        document.querySelector('#beer-list').appendChild(template);
    }
}


axios("https://api.punkapi.com/v2/beers/")
    .then(response => addObject(response.data));