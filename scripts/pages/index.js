class App {
    constructor() {
     this.PhotogaphersApi = new PhotographerApi('/data/photographers.json')
        
    }   

   async  main() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = await this.PhotogaphersApi.getPhotographersData()
        // et bien retourner le tableau photographers seulement une fois

        console.log(photographers)
        const photographersSection = document.querySelector(".photographer_section")
        photographers
            .map(photographer => new dataPhotograher(photographer))
            .forEach((photographer) => {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
        });
    

    
    }
}  

const app = new App()
    app.main()
    