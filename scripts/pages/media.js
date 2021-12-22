this.mediasApi = new MediaApi ('/data/photographers.json')
let medias = "";
let media = [];
const mediaSection = document.querySelector(".media-section");

async function getMedia() {
  medias = await this.mediasApi.getMediaData("media");
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].photographerId == id) {
      media.push(medias[i]); 
    }
  }
  return media;
}

async function displayData() {
  media.forEach((_media) => {
    const mediaModel = mediaFactory(_media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}
async function init() {
  const photographerMedia = await getMedia();
  
  displayData(photographerMedia);
  
}
init()