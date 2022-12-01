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

async function getMedia(id){
    let tabMedia = [];
    
    const mediaJSON = await fetch ("./data/photographers.json");
    const dataMedia = await mediaJSON.json();
    media = dataMedia.media;
    media.forEach(unMedia => {
        if(unMedia['photographerId'] === id){
            tabMedia.push(unMedia);
        }
    });

    return tabMedia;
    
}

function getTotalLike(totalMedia){
    const photographeLikes = document.querySelector(".infoDetails .likeTotal");
    let totalLike = 0;
    totalMedia.forEach((unMedia)=>{
        totalLike = totalLike + unMedia.likes;
    });
    photographeLikes.textContent = totalLike;
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

async function displayData(totalMedia){
    const listeImage = document.querySelector(".user-pictures");
    let i = 1;
    totalMedia.forEach((unMedia) =>{
        const unMediaModel = mediaFactory(unMedia, i);
        const unMediaDOM = unMediaModel.getMediaCardDOM();
        i = i + 1;
        listeImage.appendChild(unMediaDOM);
    });
}

async function init(){

    //Recup ID dans passé dans L'URL.
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));

    const photographe = JSON.parse(localStorage.getItem(id));
    console.log("La liste de photo de", photographe.name, ":");
    profil(photographe);

    totalMedia = await getMedia(id);

    //totalMedia.sort((a b)=> (a.likes b.likes) ? 1 : -1)
    displayData(totalMedia);

    getTotalLike(totalMedia);

}

init();