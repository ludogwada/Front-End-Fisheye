// construction carte profil photographe
function photographerProfilFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `/assets/photographers/${portrait}`;

    function getPhotoCardDOM() {
        const header = document.querySelector(".photograph-header");
        const likenprice = document.querySelector(".like-n-price");
        const img = document.createElement("img");
        const btn = header.firstChild;
        img.classList.add("photograph-header__img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("tabindex", "0");
        const h1 = document.createElement("h1");
        h1.classList.add("photograph-header__name");
        h1.setAttribute("tabindex", "0");
        h1.textContent = name;
        const info = document.createElement("div");
        info.classList.add("phtograph-header__description");
        info.setAttribute("tabindex", "0");
        const h2 = document.createElement("h2");
        h2.classList.add("photograph-header__description__location");
        h2.textContent = city + ", " + country;
        const h3 = document.createElement("h3");
        h3.classList.add("photograph-header__description__tagline");
        h3.textContent = tagline;
        header.appendChild(img);
        header.insertBefore(h1, btn);
        header.insertBefore(info, btn);
        info.appendChild(h2);
        info.appendChild(h3);

        // compteur likes
        const likey = document.createElement("h2");
        const likeicon = document.createElement("img");
        const pricey = document.createElement("h2");
        const counter = document.createElement("div");
        const btnOpenModal = document.getElementById("openModal");
        btnOpenModal.setAttribute("aria-label", "contactez " + name);
        counter.setAttribute("class", "like-n-price__counter");
        likey.setAttribute("class", "like-n-price__likes");
        likey.textContent = totalLike;
        likeicon.setAttribute("src", "assets/icons/likes.svg");
        likeicon.setAttribute("alt", "Likes");
        pricey.textContent = price + "€ / jour";
        pricey.setAttribute("class", "like-n-price__prices");
        likenprice.appendChild(counter);
        counter.appendChild(likey);
        counter.appendChild(likeicon);
        likenprice.appendChild(pricey);
        likenprice.setAttribute(
            "aria-label",
            `${totalLike} j'aimes, tarifs: ${price}€ par jour`
        );
        const pageTitle = document.getElementsByTagName("title")[0];
        pageTitle.textContent = "Fisheye - " + name;

        return header;
    }
    return { getPhotoCardDOM };
}
