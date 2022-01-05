<<<<<<< HEAD
function getMediaCardDOM(data) {
  const { image, video, title, likes, photographerId } = data;
  const picture = `assets/images/${photographerId}/${image}`;
  const mp4 = `assets/images/${photographerId}/${video}`;


  const article = document.createElement("article");
  article.classList.add("media-section__article");
  const img = document.createElement("img");
  img.classList.add("media-section__article__img");
  img.setAttribute("role", "button");
  img.setAttribute("title", title + ", closeupview")
  img.setAttribute("tabindex", "0");
  const vdo = document.createElement("video");
  vdo.classList.add("media-section__article__video");
  vdo.setAttribute("tabindex", "0");
  const h2 = document.createElement("h2");
  h2.classList.add("media-section__article__h2");
  h2.setAttribute("tabindex", "0");
  const nbLikes = document.createElement("div");
  nbLikes.classList.add("nbLikes");
  const h3 = document.createElement("h3");
  h3.classList.add("nbLikes__h3");
  const likeIcon = document.createElement("img");
  h3.textContent = likes;
  likeIcon.setAttribute("src", "assets/icons/likes.svg");
  likeIcon.setAttribute("alt", likes + " Likes");
  likeIcon.classList.add("nbLikes__likeIcon");
  likeIcon.setAttribute("tabindex", "0");
  likeIcon.setAttribute("role","button");

  if (video !== undefined) {
      vdo.setAttribute("src", mp4);
      vdo.setAttribute("alt", title);
      article.appendChild(vdo);
  }
  if (image !== undefined) {
      img.setAttribute("src", picture);
      img.setAttribute("alt", title);
      article.appendChild(img);
  }
  h2.textContent = title;
  article.appendChild(h2);
  article.appendChild(nbLikes);
  nbLikes.appendChild(h3);
  nbLikes.appendChild(likeIcon);
  return article;
=======
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
    const likeIcon = document.createElement('img');
    h3.textContent = likes;
    likeIcon.classList.add('media-section__article__likeIcon');
    likeIcon.setAttribute("src", "assets/icons/likes.svg");
    likeIcon.setAttribute("alt",likes + " Likes");
    likeIcon.setAttribute("tabindex","0");

    if (video !== undefined) {
      vdo.setAttribute("src", mp4);
      vdo.setAttribute("alt", title);
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
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
}
