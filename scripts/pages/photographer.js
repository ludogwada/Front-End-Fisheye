const id = new URLSearchParams(window.location.search).get("id");
this.PhotogaphersApi = new PhotographerApi()
let photographers = "";
let thisPhotographer = "";

async function getPhotographer() {
  photographers =  await this.PhotogaphersApi.getPhotographersData();
  
  for (let i = 0; i < photographers.length; i++){
    if (photographers[i].id == id) {
      thisPhotographer = photographers[i]; 
      return thisPhotographer;
    }
  }
}

async function displayHeader(photographer) {
  const photographerModel = photographerProfilFactory(photographer);
  photographerModel.getPhotoCardDOM();
  
}


async function initMedia() {
  media = [];
  sortBy = filter.children[0].children[0].innerText;
  mediaSection.innerHTML = "";
  await getMedia();
  sortMedia();
  calcLike();
  displayData();
  likeFunction();  
  articlePicture();

}

async function init() {
  const photographer = await getPhotographer();
  await initMedia();
  displayHeader(photographer);
  modalName(photographer);
}

init()