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

const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');

lastName.addEventListener("change", function (event) {
    event.preventDefault();
    lastName.value = lastName.value.replace(/^./, lastName.value[0].toUpperCase());
});
firstName.addEventListener("change", function (event) {
    event.preventDefault();
    firstName.value = firstName.value.replace(/^./, firstName.value[0].toUpperCase());
});
dateOfBirth.addEventListener("change", function (event) {
    event.preventDefault();
    dateOfBirth.value = dateOfBirth.value.split("-").join("/");
    dateOfBirth.value = dateOfBirth.value.split(".").join("/");
    dateOfBirth.value = dateOfBirth.value.split(" ").join("/");
});
email.addEventListener("change", function (event) {
    event.preventDefault();
});
secretCode.addEventListener("change", function (event) {
    event.preventDefault();
});

function removeAlert() {
    lastNameAlert.innerHTML = "";
    firstNameAlert.innerHTML = "";
    dateOfBirthAlert.innerHTML = "";
    emailAlert.innerHTML = "";
    secretCodeAlert.innerHTML = "";
}

submit.addEventListener("click", function (event) {
    event.preventDefault();
        // Test si le nom a au moins 3 caractères, alphanumériquement avec ou sans accent
    if (/[A-zÀ-ú0-9]{3,}/.test(lastName.value) &&
        
        // Test si le prénom a au moins 3 caractères, alphanumériquement avec ou sans accent
        /[A-zÀ-ú0-9]{3,}/.test(firstName.value) &&
        
        // Test si la date de naissance est valide
        /^[0-9]{2,2}[/]{1,1}[0-9]{2,2}[/]{1,1}[0-9]{4,4}$/.test(dateOfBirth.value) &&
        
        // Test si l'email est valide
        /^(.?[a-zA-Z0-9]){1,64}[@]{1,1}[a-zA-Z0-9]{1,248}[.]{1,1}[a-z]{2,6}$/.test(email.value) && 
        
        // Test si le code confidentiel est valide
        /^[F]{1,1}[R]{1,1}[0-9]{5,5}[A-Z-._]{3,3}[xX]{1,1}$/.test(secretCode.value)) {
            removeAlert();


    } else {
        if (lastName.value.length < 1) {
            lastNameAlert.innerText = "Champ obligatoire";

        } else if (!/[A-zÀ-ú0-9]{3,}/.test(lastName.value)) {
            lastNameAlert.innerText = "Champ invalide: faut au moins trois caractère";
        
        } else {
            lastNameAlert.innerHTML = "";
        }

        if (firstName.value.length < 1) {
            firstNameAlert.innerText = "Champ obligatoire";

        } else if (!/[A-zÀ-ú0-9]{3,}/.test(firstName.value)) {
            firstNameAlert.innerText = "Champ invalide";

        } else {
            firstNameAlert.innerHTML = "";
        }

        if (dateOfBirth.value.length < 1) {
            dateOfBirthAlert.innerText = "Champ obligatoire"
        } else if (!/^[0-9]{2,2}[/]{1,1}[0-9]{2,2}[/]{1,1}[0-9]{4,4}$/.test(dateOfBirth.value)) {
            dateOfBirthAlert.innerText = "Champ invalide veulliez respecter le format jj/mm/aaaa, jj-mm-aaaa ou jj.mm.aaaa";
        
        } else {
            dateOfBirthAlert.innerHTML = "";
        }

        if (email.value.length < 1) {
            emailAlert.innerText = "Champ obligatoire";
        
        } else if (!/^(.?[a-zA-Z0-9]){1,64}[@]{1,1}[a-zA-Z0-9]{1,248}[.]{1,1}[a-z]{2,6}$/.test(email.value)) {
            emailAlert.innerText = "Format email invalide";

        } else {
            emailAlert.innerHTML = "";
        }

        if (secretCode.value.length < 1) {
            secretCodeAlert.innerText = "Champ Obligatoire";

        } else if (!/^[F]{1,1}[R]{1,1}[0-9]{5,5}[A-Z-._]{3,3}[xX]{1,1}$/.test(secretCode.value)) {
            secretCodeAlert.innerText = "Code invalide, vérifier qu'il contient le préfixe FR, 5 chiffres et 3 lettres majuscules (ou bien - . ou _), ainsi que le suffixe x ";

        } else {
            secretCodeAlert.innerHTML = "";
        }
        
    }
});

cancel.addEventListener("click", function () {
    removeAlert();
});