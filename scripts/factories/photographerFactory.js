function photographerFactory(data) {
    const { name ,id, city, country, tagline, price, portrait, ...media} = data;


    const picture = `./assets/photographers/${portrait}`;

    function getUserCardDOM() { 
        const article = document.createElement( 'article' ); 

        const sectionImageArticle = document.createElement( 'section' ); // Section pour les liens ci dessous
        sectionImageArticle.className = "picture";

        const sectionImageArticleLink = document.createElement( 'a' ); // Création des liens
        sectionImageArticleLink.appendChild(sectionImageArticle);
        sectionImageArticleLink.setAttribute("id", id);
        sectionImageArticleLink.setAttribute("href", `photographer.html?id=${id}`);

        const footerImageArticle = document.createElement( 'footer' );

        const img = document.createElement( 'img' ); 
        img.setAttribute("src", picture);
        sectionImageArticle.appendChild(img);

        const h2 = document.createElement( 'h2' ); // Nom Photographe en h2
        h2.textContent = name;
        sectionImageArticle.appendChild(h2);

        const citycountry_screen = document.createElement( 'h3' ); // texte pour la ville et le pays
        citycountry_screen.className = "citycountry";
        citycountry_screen.textContent = city + ", " + country;
        footerImageArticle.appendChild(citycountry_screen);

        const tagline_screen = document.createElement( 'p' ); 
        tagline_screen.className = "tagline";
        tagline_screen.textContent = tagline;
        footerImageArticle.appendChild(tagline_screen);

        const price_screen = document.createElement( 'p' ); 
        price_screen.className = "price";
        price_screen.textContent = price + " € / jour ";
        footerImageArticle.appendChild(price_screen);

        article.appendChild(sectionImageArticleLink);
        article.appendChild(footerImageArticle);
        return (article);
    }

    function getUserPictureDOM(){
        const pictureUser = document.createElement('img');
        pictureUser.setAttribute("src", picture);
        imgUser.setAttribute("alt", "Profil de " + name);

        const imgUser = document.createElement( 'article' );
        imgUser.appendChild(pictureUser);

        return userPicture;
    }

    function getUserInfoDOM(){
        const userInfo = document.createElement('article');

        const userName = document.createElement ('h1');
        userName.className = "photographerInfo_name";
        userName.textContent  = name;

        const userCityCountry = document.createElement('p');
        userCityCountry.className = "photographerInfo_citycountry";
        userCityCountry.textContent = city + country;
        
        const userTagline = document.createElement ('p');
        userTagline.className = "photographerInfo_tagline";
        userTagline.textContent = tagline;

        return userInfo;

    }

    return {name, city, country, tagline, price, portrait, media, id, getUserCardDOM}
}
