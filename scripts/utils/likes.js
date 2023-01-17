

async function likesUpLikesDown(data, keyArray){
    console.log("test");
    const media = data.media;
    console.log(media);
    const heart = document.querySelectorAll("id_heart");
    const likeHeart = document.querySelectorAll('.totalLike');

    if(heart[keyArray].classList.contains("fa-regular")){
        heart[keyArray].classList.replace("fa-regular", "fa-solid");
        
    }

    



}

/*heart.addEventListener('click', function () {
    if(likeStatus == false){
        likeImage.textContent = likes + 1 ;
        heart.className= "fa-solid fa-heart";
        likeStatus = true;
    }
    else if(likeStatus == true){
        heart.className = "fa-regular fa-heart";
        likeImage.textContent = likes - 1;
        likeStatus = false;
    }
});*/
