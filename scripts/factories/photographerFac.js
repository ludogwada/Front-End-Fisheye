class PhotographerCard {
    constructor(photographer) {
      this._photographer = photographer
    }
  
    createPhotographerCard () {
      const $wrapper = document.createElement('li')
  
      const card = `      
        <article >
          <a class="article" href="/photographer.html?id=${this._photographer.id}">
            <div >
              <img class="article__img" src="${this._photographer.portrait}" alt="${this._photographer.name}" />
            </div>
            <h2 class="article__h2">${this._photographer.name}</h2>
            <ul class="article__info">
              <li class="article__info__location">${this._photographer.city}, ${this._photographer.country}</li>
              <li class="article__info__tagline">${this._photographer.tagline}</li>
              <li class="article__info__price">${this._photographer.price}€/jour</li>
            </ul>
          </a>
        </article>      
      `
  
      $wrapper.innerHTML = card
      return $wrapper
    }
  }