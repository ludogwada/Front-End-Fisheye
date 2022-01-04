function photographerProfilFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `/assets/photographers/${portrait}`;

    function getPhotoCardDOM() {
        const header = document.querySelector(".photograph-header");
        const likenprice = document.querySelector(".like-n-price");
        const img = document.createElement("img");
        img.classList.add("photograph-header__img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        const h1 = document.createElement("h1");
        h1.classList.add("photograph-header__name");
        h1.textContent = name;
        const info = document.createElement("div");
        info.classList.add("phtograph-header__description");
        const h2 = document.createElement("h2");
        h2.classList.add("photograph-header__description__location");
        h2.textContent = city + ", " + country;
        const h3 = document.createElement("h3");
        h3.classList.add("photograph-header__description__tagline");
        h3.textContent = tagline;
        header.appendChild(img);
        header.appendChild(h1);
        header.appendChild(info)
        info.appendChild(h2);
        info.appendChild(h3);
        const pricey = document.createElement("h2");
        const likey = document.createElement("h2");
        const likeicon = document.createElement("img");
        likeicon.setAttribute("src", "assets/icons/likes.svg");
        likeicon.setAttribute("alt", "Likes");
        pricey.textContent = price + "€ / jour";
        pricey.setAttribute("class", "prices");
        likey.setAttribute("class", "likes");
        likey.textContent = totalLike;
        likenprice.appendChild(pricey);
        likenprice.appendChild(likey);
        likenprice.appendChild(likeicon);
        const pageTitle = document.getElementsByTagName("title")[0];
        pageTitle.textContent = "Fisheye - " + name;

        return header;
    }
    return { getPhotoCardDOM };
}
