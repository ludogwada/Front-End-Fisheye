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
}
