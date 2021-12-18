class App {
    constructor() {
     this.PhotogaphersApi = new PhotographerApi('/data/photographers.json')
        
    }   

   async  main() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = await this.PhotogaphersApi.getPhotographersData()
        // et bien retourner le tableau photographers seulement une fois

        
        const photographersSection = document.querySelector(".photographer_section")
        photographers
            .map(photographer => new dataPhotographer(photographer))
            .forEach((photographer) => {
                const photographerModel = new PhotographerCard(photographer);
                const userCardDOM = photographerModel.createPhotographerCard();
                photographersSection.appendChild(userCardDOM);
        });
     }
}  

const app = new App()
    app.main()
    
    