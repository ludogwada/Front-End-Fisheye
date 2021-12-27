let totalLike = "";
function calcLike() {
  let tabLike = 0;
  for (i = 0; i < media.length; i++) {
    tabLike = tabLike + media[i].likes;
    totalLike = tabLike;
  }
}
const likeIcons = document.getElementsByClassName("media-section__article__likeIcon");

function likeFunction() {
  for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", addLike);
    likeIcons[i].addEventListener("keypress", addLike);
  }
}
function addLike(event) {
  updateLike(event.target, 1);
}

function removeLike(event) {
  updateLike(event.target, -1);
}

function updateLike(element, like) {
  let likeCounter = element.parentElement.childNodes[2]; 
  let tabLike = parseInt(likeCounter.innerText);
  tabLike = tabLike + like;
  likeCounter.innerText = tabLike.toString();
  const removeHeart = like == 1 ? addLike : removeLike;
  const addHeart = like == 1 ? removeLike : addLike;
  element.parentElement.childNodes[3].setAttribute("alt", likeCounter.innerText + " Likes");
  element.removeEventListener("click", removeHeart);
  element.removeEventListener("keypress", removeHeart);
  element.addEventListener("click", addHeart);
  element.addEventListener("keypress", addHeart);
  const totalLike = document.querySelector(".like-n-price .likes");
  let tabtotalLike = parseInt(totalLike.innerText);
  tabtotalLike = tabtotalLike + like;
  totalLike.textContent = tabtotalLike.toString();console.log(totalLike)
}

