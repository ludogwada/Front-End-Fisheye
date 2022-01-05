let totalLike = "";
function calcLike() {
  let tabLike = 0;
  for (i = 0; i < media.length; i++) {
    tabLike = tabLike + media[i].likes;
    totalLike = tabLike;
  }
}
<<<<<<< HEAD
const likeIcons = document.getElementsByClassName("textArt__nbLikes__likeIcon");

=======
const likeIcons = document.getElementsByClassName("media-section__article__likeIcon");

function likeFunction() {
  for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", addLike);
    likeIcons[i].addEventListener("keypress", addLike);
  }
}
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
function addLike(event) {
  updateLike(event.target, 1);
}

function removeLike(event) {
  updateLike(event.target, -1);
}

function updateLike(element, like) {
<<<<<<< HEAD
  let likeCounter = element.parentElement.childNodes[0];
=======
  let likeCounter = element.parentElement.childNodes[2]; 
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
  let tabLike = parseInt(likeCounter.innerText);
  tabLike = tabLike + like;
  likeCounter.innerText = tabLike.toString();
  const removeHeart = like == 1 ? addLike : removeLike;
  const addHeart = like == 1 ? removeLike : addLike;
<<<<<<< HEAD
=======
  element.parentElement.childNodes[3].setAttribute("alt", likeCounter.innerText + " Likes");
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
  element.removeEventListener("click", removeHeart);
  element.removeEventListener("keypress", removeHeart);
  element.addEventListener("click", addHeart);
  element.addEventListener("keypress", addHeart);
<<<<<<< HEAD
  element.parentElement.childNodes[1].setAttribute("alt", likeCounter.innerText + " Likes");
  const totalLike = document.querySelector(".like-n-price__likes");
  console.log(tabLike);
=======
  const totalLike = document.querySelector(".like-n-price .likes");
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
  let tabtotalLike = parseInt(totalLike.innerText);
  tabtotalLike = tabtotalLike + like;
  totalLike.textContent = tabtotalLike.toString();
}

<<<<<<< HEAD

function likeFunction() {
  for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", addLike);
    likeIcons[i].addEventListener("keypress", addLike);
  }
}
=======
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
