const modal = document.getElementById("contact_modal");
<<<<<<< HEAD
const btnOpenModal = document.getElementById("openModal");
const main = document.getElementById("main");
const crossClose = document.querySelector(".modal__header__img");

function displayModal() {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-modale", "true");
    main.setAttribute("aria-hidden", "true");
=======

function displayModal() {
    modal.style.display = "block";
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
}

function closeModal() {
    modal.style.display = "none";
<<<<<<< HEAD
    modal.setAttribute("aria-hidden", "true");
    modal.remove("aria-modal");
    main.setAttribute("aria-hidden", "false");
    location.reload();
=======
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
}

function modalName(data) {
    const modalHeader = document.querySelector(".modal__header__h2");
    const { name } = data;
    modalHeader.innerHTML += "<br>" + name;
    return modalHeader;
<<<<<<< HEAD
}

btnOpenModal.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        displayModal(e)
    }
})

crossClose.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        closeModal(e)
    }
})

window.addEventListener("keydown", function (e) { 
    if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault()
        closeModal(e)
    }
})
=======
}
>>>>>>> 616210c4c6a3267ede3b9024e3e8f75dc65d702c
