class PhotographerApi {
    _url = "/data/photographers_new.json";
    // récupère les données du photographe
    async getPhotographersData() {
        return fetch(this._url)
            .then((res) => res.json())
            .then((res) => res.photographers)
            .catch((err) => console.log("an error occurs", err));
    }
    // récupère les données des médias
    async getPhotographersMedia() {
        return fetch(this._url)
            .then((res) => res.json())
            .then((res) => res.media)
            .catch((err) => console.log("an error occurs", err));
    }
}
