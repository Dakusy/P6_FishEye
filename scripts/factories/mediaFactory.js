function mediaFactory(data, index) {
    const { id, photographerId, title, image, video, likes, price, date } = data;
    let mediaLink;

    function getMediaCardDOM(){
        // TODO

        const divImage = document.createElement('div');
        const infoImage = document.createElement('div');
        const titleImage = document.createElement('p');
        const likeImage = document.createElement('p');
        const blockLike = document.createElement('div');

        let media;
        if(!image){
            media = document.createElement('video');
            mediaLink = `assets/images/${video}`;
        }
        else {
            media = document.createElement( 'img' );
            mediaLink = `assets/images/${image}`
        }

        titleImage.textContent = title;
        likeImage.textContent = likes;

        divImage.className = "mediaImage";
        media.setAttribute("src", mediaLink);
        media.className = "imagePhotographer";

        media.setAttribute("onclick", "displayLightbox(this.id)")
        media.setAttribute("id", id)

        titleImage.className = "titleImage";
        blockLike.className = "blockLike";
        likeImage.className = "totalLike";
        infoImage.className = "infoImage";


        divImage.appendChild(media);
        infoImage.appendChild(titleImage);
        infoImage.appendChild(blockLike);
        blockLike.appendChild(likeImage);
        divImage.appendChild(infoImage);

        return (divImage);
    }
    

    return { id, photographerId, title, image, likes, price, date, getMediaCardDOM }

}