window.onscroll = () => scrollBarNav();

const scrollBarNav = () => {
  const navBar = document.querySelector("#mynav");
  const navBarBrand = document.querySelector(".navbar-brand");
  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("nav-background-color");
    navBarBrand.classList.add("navbar-brand-color");
  } else {
    navBar.classList.remove("nav-background-color");
    navBarBrand.classList.remove("navbar-brand-color");
  }
};

function createBreweryCards(breweries) {
  for (let brewery of breweries) {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
    template.querySelector(".card-title").innerText = brewery.name;
    template.querySelector(".brewery-type").innerText = brewery.brewery_type;
    template.querySelector(".card-text-address").innerText = brewery.address_1;
    template.querySelector(".card-text-city").innerText = brewery.city;
    template.querySelector(".card-text-website").href = brewery.website_url;
    template.querySelector(".card-text-website").innerText =
      brewery.website_url;
    document.querySelector("#brewery-list").appendChild(template);
  }
}

axios(
  "https://api.openbrewerydb.org/v1/breweries/search?query=england&per_page=50"
)
  .then((response) => createBreweryCards(response.data))
  .catch((error) => {
    console.log(error);
  });
