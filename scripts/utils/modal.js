const modal = document.getElementById("contact_modal");

function displayModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function modalName(data) {
    const modalHeader = document.querySelector(".modal__header__h2");
    const { name } = data;
    modalHeader.innerHTML += "<br>" + name;
    return modalHeader;
}