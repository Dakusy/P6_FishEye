function mediaFactory(data, index) {
    const { id, photographerId, title, image, video, likes, price, date } = data;
    let mediaLink;

    function getMediaCardDOM() {
        
        //Permet de gérer l'ajout et la suppression des likes.
        function addLike(){
            let likeUneImage = blockLike.firstChild.innerHTML;
            if(heart.className == "fa-regular fa-heart"){
                likeUneImage++;
                blockLike.firstChild.innerText = likeUneImage++;
                globalLikes.textContent++;
                heart.className = "fa-solid fa-heart";
                likeStatus = true;
            }
            else if(heart.className == "fa-solid fa-heart"){
                likeUneImage--;
                blockLike.firstChild.innerText = likeUneImage--;
                globalLikes.textContent--;
                heart.className = "fa-regular fa-heart";
                likeStatus = false;
            }

        }

        const divImage = document.createElement('div');
        const infoImage = document.createElement('div');
        const titleImage = document.createElement('p');
        const likeImage = document.createElement('p');
        const blockLike = document.createElement('div');
        const heart = document.createElement('i');

        let media;
        if (!image) {
            media = document.createElement('video');
            mediaLink = `assets/images/${video}`;
        }
        else {
            media = document.createElement('img');
            mediaLink = `assets/images/${image}`
        }

        titleImage.textContent = title;
        likeImage.textContent = likes;


        divImage.className = "mediaImage";
        divImage.setAttribute("role", "listitem");
        divImage.setAttribute("tabindex", index);
        media.setAttribute("src", mediaLink);
        media.className = "imagePhotographer";

        divImage.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
              displayLightbox(media.id)
            }
        });

        media.setAttribute("onclick", "displayLightbox(this.id)");
        media.setAttribute("id", id);
        media.setAttribute("alt", "");

        titleImage.className = "titleImage";
        blockLike.className = "blockLike";
        likeImage.className = "totalLike";
        infoImage.className = "infoImage";
        heart.className = "fa-regular fa-heart";
        heart.setAttribute("id", "id_heart");
        heart.setAttribute("alt","likes");
        likeImage.textContent = likes;
        divImage.appendChild(media);
        infoImage.appendChild(titleImage);
        infoImage.appendChild(blockLike);
        blockLike.appendChild(likeImage);
        divImage.appendChild(infoImage);
        blockLike.appendChild(heart);

        blockLike.addEventListener("click", addLike, true)

        return (divImage);
    }


    return { id, photographerId, title, image, likes, price, date, getMediaCardDOM }

}