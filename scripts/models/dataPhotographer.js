class dataPhotograher {
    constructor(photographers) {
        this._portrait = photographers.portrait
        this._name = photographers.name 
        this._id = photographers.id 
        this._city = photographers.city 
        this._country = photographers.country 
        this._tagline = photographers.tagline 
        this._price = photographers.price 
    }

    get portrait() {
        return this._portrait
    }

    get name() {
        return this._name
    }

    get id() {
        return this._id
    }

    get city() {
        return this._city
    }

    get country() {
        return this._country
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        return this._price
    }
}