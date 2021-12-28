class PhotographerApi {
    _url = "/data/photographers.json";
    
    async getPhotographersData() {
        return fetch(this._url)
        .then(res => res.json())
        .then(res => res.photographers)
        .catch(err => console.log('an error occurs', err))
    }
    
    async getPhotographersMedia() {
        return fetch(this._url)
        .then(res => res.json())
        .then(res => res.media)
        .catch(err => console.log('an error occurs', err))
    }
}