async function displayProfile(photographerId) {
    const photographerSection = document.getElementById('photographer-section');
    const photographer = await getProfile(photographerId)
    const photographerModel = photographerFactory(photographer);
    const userSectionDOM = photographerModel.getUserSectionDOM();
    photographerSection.appendChild(userSectionDOM); }