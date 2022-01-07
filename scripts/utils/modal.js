const modal = document.getElementById("contact_modal");
const btnOpenModal = document.getElementById("openModal");
const main = document.getElementById("main");
const crossClose = document.querySelector(".modal__header__img");
const modalBody = document.querySelector(".modal");

function displayModal() {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-modale", "true");
    main.setAttribute("aria-hidden", "true");
    modalBody.setAttribute("tabindex", "0");
    modalBody.focus();
}

function closeModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
    modalBody.removeAttribute("tabindex", "0");     
}

function modalName(data) {
    const modalHeader = document.querySelector(".modal__header__h2");
    const { name } = data;
    modalHeader.innerHTML += "<br>" + name;
    return modalHeader;
}

btnOpenModal.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault()
        displayModal(e)
    }
})

crossClose.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault()
        closeModal(e)
    }
})

window.addEventListener("keydown", function(e) {
    if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault()
        closeModal(e)
    }
})