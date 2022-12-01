//Mettre le code JavaScript lié à la page photographer.html

async function getUrlID() {
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));
    return id;
}

async function getUserName(id){
    const photographersJSON = await fetch ("./data/photographers.json");
    const photographersData = await photographersJSON.json();
    const photographers = photographersData.photographers;
    const photographer = photographers.filter( photographer => photographer.id === id)[0];
    return photographer;

}

function profil(photographe){
    const infoPhotographe = document.querySelector(".infoPhotographe");
    const photographeHeader = document.querySelector(".photograph-header");
    const photographePrice = document.querySelector(".infoDetails .price");

    const nom = document.createElement('h1');
    const cityCountry = document.createElement('span');
    const tagline = document.createElement('span');
    const infos = document.createElement('p');
    const image = document.createElement('img');

    nom.textContent = photographe.name;
    cityCountry.textContent = photographe.city + ", " + photographe.country;
    tagline.textContent = photographe.tagline;
    photographePrice.textContent = photographe.price+ "€ / jour";

    image.setAttribute("src", photographe.picture);
    image.setAttribute("alt", photographe.name);
    cityCountry.className = "citycountry";
    tagline.className = "tagline";

    infos.appendChild(cityCountry);
    infos.appendChild(tagline);

    infoPhotographe.appendChild(nom);
    infoPhotographe.appendChild(infos);
    photographeHeader.appendChild(image);
}

async function init(){

    //Recup ID dans passé dans L'URL.
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));

    const photographe = JSON.parse(localStorage.getItem(id));
    console.log("La liste de photo de", photographe.name, ":");
    profil(photographe);
}

init();