function photographerFactory(data) {
    const { name, portrait, city, country, tagline } = data;
    
    const picture = `/assets/photographers/${portrait}`

    function getPhotoCardDOM() {
        const header = document.querySelector(".photograph-header");
        const img = document.createElement( 'img' );
        img.classList.add('photograph-header__img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        const h1 = document.createElement( 'h1' );
        h1.classList.add('photograph-header__name');
        h1.textContent = name;
        const h2 = document.createElement( 'h2' );
        h2.classList.add('photograph-header__location');
        h2.textContent = city + ", " + country;
        const h3 = document.createElement( 'h3' );
        h3.classList.add('photograph-header__tagline');
        h3.textContent = tagline;
        header.appendChild(img);
        header.appendChild(h1);
        header.appendChild(h2);
        header.appendChild(h3);
        
        return (header);
    }
    return { getPhotoCardDOM}
}