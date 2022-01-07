let totalLike = "";
function calcLike() {
    let tabLike = 0;
    for (i = 0; i < media.length; i++) {
        tabLike = tabLike + media[i].likes;
        totalLike = tabLike;
    }
}
const likeIcons = document.getElementsByClassName("textArt__nbLikes__likeIcon");

function addLike(event) {
    updateLike(event.target, 1);
}

function removeLike(event) {
    updateLike(event.target, -1);
}

function updateLike(element, like) {
    let likeCounter = element.parentElement.childNodes[0];
    let tabLike = parseInt(likeCounter.innerText);
    tabLike = tabLike + like;
    likeCounter.innerText = tabLike.toString();
    const removeHeart = like == 1 ? addLike : removeLike;
    const addHeart = like == 1 ? removeLike : addLike;
    element.removeEventListener("click", removeHeart);
    element.removeEventListener("keypress", removeHeart);
    element.addEventListener("click", addHeart);
    element.addEventListener("keypress", addHeart);
    element.parentElement.childNodes[1].setAttribute(
        "alt",
        likeCounter.innerText + " Likes"
    );
    const totalLike = document.querySelector(".like-n-price__likes");
    console.log(tabLike);
    let tabtotalLike = parseInt(totalLike.innerText);
    tabtotalLike = tabtotalLike + like;
    totalLike.textContent = tabtotalLike.toString();
}

function likeFunction() {
    for (let i = 0; i < likeIcons.length; i++) {
        likeIcons[i].addEventListener("click", addLike);
        likeIcons[i].addEventListener("keypress", addLike);
    }
}
