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


async function init() {
  const photographer = await getPhotographer();
  
  displayHeader(photographer);
  modalName(photographer);
}
init()