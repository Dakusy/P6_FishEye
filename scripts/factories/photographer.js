function photographerFactory(data) {
    const { name ,city, country, tagline, price, portrait, ...media} = data;

    const picture = `./assets/photographers/${portrait}`;

    function getUserCardDOM() { 
        const article = document.createElement( 'article' ); 

        const sectionImageArticle = document.createElement( 'section' ); // Section pour les liens ci dessous
        sectionImageArticle.className = "picture";

        const sectionImageArticleLink = document.createElement( 'a' ); // Création des liens
        sectionImageArticleLink.appendChild(sectionImageArticle);
        sectionImageArticleLink.setAttribute("href", `#`);

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

    return {name, city, country, tagline, price, portrait, media, getUserCardDOM}
}