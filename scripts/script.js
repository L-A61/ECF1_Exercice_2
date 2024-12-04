const lastName = document.getElementById("lastName");
const firstName = document.getElementById("firstName");
const dateOfBirth = document.getElementById("dateOfBirth");
const email = document.getElementById("email");
const secretCode = document.getElementById("secretCode");

const lastNameAlert = document.getElementById("lastNameAlert");
const firstNameAlert = document.getElementById("firstNameAlert");
const dateOfBirthAlert = document.getElementById("dateOfBirthAlert");
const emailAlert = document.getElementById("emailAlert");
const secretCodeAlert = document.getElementById("secretCodeAlert");

const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

lastName.addEventListener("change", function (event) {
    event.preventDefault();
});
firstName.addEventListener("change", function (event) {
    event.preventDefault();
});
dateOfBirth.addEventListener("change", function (event) {
    event.preventDefault();
});
email.addEventListener("change", function (event) {
    event.preventDefault();
});
secretCode.addEventListener("change", function (event) {
    event.preventDefault();
});

submit.addEventListener("click", function (event) {
    event.preventDefault();
    if (lastName.value.length >= 3 &&
        firstName.value.length >= 3 &&
        dateOfBirth.value.length == 10) {
        alert("tous remplies")

        lastNameAlert.innerHTML = "";
        firstNameAlert.innerHTML = "";
        dateOfBirthAlert.innerHTML = "";
        emailAlert.innerHTML = "";
        secretCodeAlert.innerHTML = "";

        
    } else {
        if (lastName.value.length < 1) {
            lastNameAlert.innerText = "Champ obligatoire"
        } else if (lastName.value.length < 3) {
            lastNameAlert.innerText = "Champ invalide"
        }

        if (firstName.value.length < 1) {
            firstNameAlert.innerText = "Champ obligatoire"
        } else if (firstName.value.length < 3) {
            firstNameAlert.innerText = "Champ invalide"
        }

        if (dateOfBirth.value.length < 1) {
            dateOfBirthAlert.innerText = "Champ obligatoire"
        } else if (dateOfBirth.value.length != 10) {
            dateOfBirthAlert.innerText = "Champ invalide"
        }

        if (email.value.length < 1) {
            emailAlert.innerText = "Champ obligatoire"
        }

        if (secretCode.value.length < 1) {
            secretCodeAlert.innerText = "Champ Obligatoire"
        }
        
    }
});

cancel.addEventListener("click", function () {
    lastNameAlert.innerHTML = "";
    firstNameAlert.innerHTML = "";
    dateOfBirthAlert.innerHTML = "";
    emailAlert.innerHTML = "";
    secretCodeAlert.innerHTML = "";
});