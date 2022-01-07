const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.getElementById("formModal");

function checkFirst() {
    //si valeur de firstName < 2 ou vide ou !du regex attribue true à "data-error-visible" et retourne faux
    if (
        firstName.value.trim().length < 2 ||
        firstName.value.trim() === "" ||
        !firstName.value.match(regex)
    ) {
        firstName.parentElement.setAttribute("data-error-visible", "true");
        return false;
        //sinon attribue false à "data-error-visible" et retourne vrai
    } else {
        firstName.parentElement.setAttribute("data-error-visible", "false");
        return true;
    }
}
//FIRST NAME
firstName.addEventListener("focusout", function() {
    checkFirst(this);
});

function checkLast() {
    //si valeur de lastName < 2 ou vide ou !du regex attribue true à "data-error-visible" et retourne faux
    if (
        lastName.value.trim().length < 2 ||
        last.value.trim() === "" ||
        !lastName.value.match(regex)
    ) {
        lastName.parentElement.setAttribute("data-error-visible", "true");
        return false;
        //sinon attribue false à "data-error-visible" et retourne vrai
    } else {
        lastName.parentElement.setAttribute("data-error-visible", "false");
        return true;
    }
}
//LASTNAME
lastName.addEventListener("focusout", function() {
    checkLast(this);
});

function checkEmail() {
    //si valeur de email match à la constante RegExp attribue false à "data-error-visible" et retourne vrai
    if (email.value.trim().match(re)) {
        email.parentElement.setAttribute("data-error-visible", "false");
        return true;
        //sinon attribue true à "data-error-visible" et retourne faux
    } else {
        email.parentElement.setAttribute("data-error-visible", "true");
        return false;
    }
}
//EMAIL
email.addEventListener("focusout", function() {
    checkEmail(this);
});

function checkMessage() {
    if (message.value.trim().length < 2 || message.value.trim() === "") {
        message.parentElement.setAttribute("data-error-visible", "true");
        return false;
        //sinon attribue false à "data-error-visible" et retourne vrai
    } else {
        message.parentElement.setAttribute("data-error-visible", "false");
        return true;
    }
}
//MESSAGE
message.addEventListener("focusout", function() {
    checkMessage(this);
});

//SUBMIT FORM
form.addEventListener("submit", function(e) {
    //empeche le comportement par defaut et verifie les fonctions
    e.preventDefault();
    checkFirst();
    checkLast();
    checkEmail();
    checkMessage();
    // si tout les fonctions retourne true, le formulaire disparait, la modal Thanks s'affiche et forumaire reset.
    if (
        checkFirst(firstName) &&
        checkLast(lastName) &&
        checkEmail(email) &&
        checkMessage(message)
    ) {
        //   consoleMessageValid()
        modal.style.display = "none";
        consoleMessageValid(firstName, lastName, email, message);
        form.reset();
    } else {
        modal.style.display = "block";
    }
});

function consoleMessageValid(firstName, lastName, email, message) {
    console.group("Contact Message");
    console.log("Prénom : " + firstName.value);
    console.log("Nom : " + lastName.value);
    console.log("Email : " + email.value);
    console.log("Message : " + message.value);
    console.groupEnd();
}