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
<<<<<<< HEAD
=======
      
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
    }
  }
}

async function displayHeader(photographer) {
  const photographerModel = photographerProfilFactory(photographer);
  photographerModel.getPhotoCardDOM();
  
}


<<<<<<< HEAD
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

=======
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
async function init() {
  const photographer = await getPhotographer();
  await initMedia();
  displayHeader(photographer);
  modalName(photographer);
}

<<<<<<< HEAD

=======
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
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
init()