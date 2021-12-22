function mediaFactory(data) {
  const { image, video, title, likes,photographerId } = data;
  const picture = `assets/images/${photographerId}/${image}`;
  const mp4 = `assets/images/${photographerId}/${video}`;

  
  function getMediaCardDOM() {
    const article = document.createElement("article");
    article.classList.add('media-section__article');
    const img = document.createElement("img");
    img.classList.add('media-section__article__img');
    const vdo = document.createElement("video");
    vdo.classList.add('media-section__article__video');
    const h2 = document.createElement( 'h2' );
    h2.classList.add('media-section__article__h2');
    const h3 = document.createElement( 'h3' );
    h3.classList.add('media-section__article__h3');
    h3.textContent = likes;
    const likeIcon = document.createElement('img');
    likeIcon.classList.add('media-section__article__likeIcon');
    likeIcon.setAttribute("src", "assets/icons/likes.svg");
    likeIcon.setAttribute("alt",likes + " Likes");
    
    
    
    if (video !== undefined) {
      vdo.setAttribute("src", mp4);
      article.appendChild(vdo);
    }
    else if (image !== undefined) {
      img.setAttribute("src", picture);
      img.setAttribute("alt", title);
      article.appendChild(img);
    }
    h2.textContent = title;
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(likeIcon);
    return article;
  }
  return { getMediaCardDOM};        
}
