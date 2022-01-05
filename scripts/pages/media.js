this.mediasApi = new PhotographerApi()
let medias = "";
let media = [];
const mediaSection = document.querySelector(".media-section");

async function getMedia() {
  medias = await this.mediasApi.getPhotographersMedia("media");
  for (let i = 0; i < medias.length; i++) {
    if (medias[i].photographerId == id) {
      media.push(medias[i]); 
    }
  }
  return media;
}

async function displayData() {
  media.forEach((_media) => {
<<<<<<< HEAD
    mediaSection.appendChild(getMediaCardDOM(_media));
  });
}
=======
    const mediaModel = mediaFactory(_media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}

  

>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
