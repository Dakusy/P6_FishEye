const lightbox = document.getElementById("lightbox-global");
const video = document.querySelector(".slider .videoLightbox");
const image = document.querySelector(".slider .imageLightbox");
let currentPosition;
let titreImage = document.querySelector(".lightbox p");
let lightboxIsOpen = false;

document.onkeydown = checkKey;

//affichage de la lightbox grâce à l'image cliqué (on affiche la bonne image en récuperant son id)
function displayLightbox(mediaId) {

    const unMedia = getUrlImage(mediaId)

    //c'est ici que l'on differencie images et vidéos pour créer le bon élément HTML
    if(unMedia.image){
        image.setAttribute("src", "assets/images/"+ unMedia.image)
        image.setAttribute("alt", unMedia.title)
        video.style.display = "none";
        image.style.display = "block";
    }
    else{
        video.setAttribute("src", "assets/images/"+ unMedia.video)
        video.setAttribute("alt", unMedia.title)
        image.style.display = "none";
        video.style.display = "block";
    }
    titreImage.innerText = unMedia.title
    main.setAttribute("aria-hidden", "true")
    user_pictures.setAttribute("aria-hidden", "true")
    sorter.setAttribute("aria-hidden", "true")
    lightbox.setAttribute("aria-hidden", "false")
	lightbox.style.display = "flex";
    lightboxIsOpen = true;
    
}

//Ferme la lightboc
function closeLightbox() {
    main.setAttribute("aria-hidden", "false")
    user_pictures.setAttribute("aria-hidden", "false")
    sorter.setAttribute("aria-hidden", "false")
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true")
    lightboxIsOpen = false;
}

//grâce à l'ID du media on récupère le lien de l'image
function getUrlImage(mediaId){
    let media;
    totalMedia.forEach((unMedia, index) => {
        if(unMedia.id == mediaId){
            currentPosition = index;
            media = unMedia
        }
    });

    return media;
}


//photo ou image suivante
function next(){
    if(currentPosition != totalMedia.length-1){
        currentPosition++;
    }
    else{
        currentPosition = 0;
    }
    
    const unMedia = totalMedia[currentPosition];
    if(unMedia.image){
        image.setAttribute("src", "assets/images/"+ unMedia.image)
        image.setAttribute("alt", unMedia.title)
        video.style.display = "none";
        image.style.display = "block";
    }
    else{
        video.setAttribute("src", "assets/images/"+ unMedia.video)
        video.setAttribute("alt", unMedia.title)
        image.style.display = "none";
        video.style.display = "block";
    }
    titreImage.innerText = unMedia.title
}

//photo ou image précédente
function previous(){
    if(currentPosition != 0){
        currentPosition--;
    }
    else{
        currentPosition = totalMedia.length-1;
    }
    const unMedia = totalMedia[currentPosition];
    if(unMedia.image){
        image.setAttribute("src", "assets/images/"+ unMedia.image)
        image.setAttribute("alt", unMedia.title)
        video.style.display = "none";
        image.style.display = "block";
    }
    else{
        video.setAttribute("src", "assets/images/"+ unMedia.video)
        video.setAttribute("alt", unMedia.title)
        image.style.display = "none";
        video.style.display = "block";
    }
    titreImage.innerText = unMedia.title
}

//si on appuit sur echap la modal se ferme
document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && lightbox.getAttribute('aria-hidden') === 'false'){
		closeLightbox()
	}
});

//c'est ici qu'on gère sur quelle touche fléchée on tape pour passer d'une image à une autre dans la lightbox
function checkKey(e) {

    if(lightboxIsOpen){
        if (e.keyCode == '37') {
            previous()
         }
         else if (e.keyCode == '39') {
            next()
         }
    }
    
}