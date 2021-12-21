class App {
    constructor() {
     this.PhotogaphersApi = new PhotographerApi('/data/photographers.json')
        
    }   

   async  main() {
        const photographers = await this.PhotogaphersApi.getPhotographersData()
        const photographersSection = document.querySelector(".photographer_section")
        photographers
            .map(photographer => new dataPhotographer(photographer))
            .forEach((photographer) => {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
        });
     }
}  

const app = new App()
    app.main()