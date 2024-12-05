// Sélectionne les champs de saisies au milieu du formulaire
const lastName = document.getElementById("lastName");
const firstName = document.getElementById("firstName");
const dateOfBirth = document.getElementById("dateOfBirth");
const email = document.getElementById("email");
const secretCode = document.getElementById("secretCode");

// Sélectionne les messages d'alertes à droite du formulaire
const lastNameAlert = document.getElementById("lastNameAlert");
const firstNameAlert = document.getElementById("firstNameAlert");
const dateOfBirthAlert = document.getElementById("dateOfBirthAlert");
const emailAlert = document.getElementById("emailAlert");
const secretCodeAlert = document.getElementById("secretCodeAlert");

// Sélectionne les boutons avec pour ID submit et cancel
const submit = document.getElementById("submit");
const cancel = document.getElementById("cancel");

// Création de la constante myModal qui créer et récupère la modal avec pour id exampleModal
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

// Sélectionne l'id alertRemoval du bouton valider de la modal
const alertRemoval = document.getElementById("alertRemoval");

// Évite l'évenement par défaut du formulaire pour le champ de saisie nom
// Quand la valeur du nom change, on remplace le premier caractère de la valeur par sa majuscule.
lastName.addEventListener("change", function (event) {
    event.preventDefault();
    lastName.value = lastName.value.replace(/^./, lastName.value[0].toUpperCase());
});

// Évite l'évenement par défaut du formulaire pour le champ de saisie prénom
// Quand la valeur du prénom change, on remplace le premier caractère de la valeur par sa majuscule.
firstName.addEventListener("change", function (event) {
    event.preventDefault();
    firstName.value = firstName.value.replace(/^./, firstName.value[0].toUpperCase());
});

// Évite l'évenement par défaut du formulaire pour le champ de saisie date de naissance
// Quand la valeur saisis pour la date de naissance change, on remplace les -, ., et espaces par un /
dateOfBirth.addEventListener("change", function (event) {
    event.preventDefault();
    dateOfBirth.value = dateOfBirth.value.split("-").join("/");
    dateOfBirth.value = dateOfBirth.value.split(".").join("/");
    dateOfBirth.value = dateOfBirth.value.split(" ").join("/");
});

// Évite l'évenement par défaut du formulaire pour le champ de saisie email
email.addEventListener("change", function (event) {
    event.preventDefault();
});

// Évite l'évenement par défaut du formulaire pour le champ de saisie code confidentiel
secretCode.addEventListener("change", function (event) {
    event.preventDefault();
});




// Fonction pour retirer la valeur des champs de saisis
function removeInput() {
    lastName.value = "";
    firstName.value = "";
    dateOfBirth.value = "";
    email.value = "";
    secretCode.value = "";
}

// Fonction pour retirer le contenu HTML des alertes champs obligatoires
function removeAlert() {
    lastNameAlert.innerHTML = "";
    firstNameAlert.innerHTML = "";
    dateOfBirthAlert.innerHTML = "";
    emailAlert.innerHTML = "";
    secretCodeAlert.innerHTML = "";
}

// Écoute d'évenement pour le bouton envoyer, contient la vérification du formulaire avant l'envoi
submit.addEventListener("click", function (event) {
    event.preventDefault();
    // Au click du bouton envoyer, le code regarde que tous les conditions pour les champs de saisis conviennent. 
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
            // Affiche la modal contenue dans la constante myModal
            myModal.show();

// Si tous les conditions ne sont pas remplis, le code regarde quels champs ne sont pas saisis convenablement.
    } else {
        // Saisis du nom
        if (lastName.value.length < 1) {
            lastNameAlert.innerText = "Champ obligatoire";
        } else if (!/[A-zÀ-ú0-9]{3,}/.test(lastName.value)) {
            lastNameAlert.innerText = "Champ invalide: veulliez saisir au moins trois caractères.";
        } else {
            lastNameAlert.innerHTML = "";
        }

        // Saisis du prénom
        if (firstName.value.length < 1) {
            firstNameAlert.innerText = "Champ obligatoire";
        } else if (!/[A-zÀ-ú0-9]{3,}/.test(firstName.value)) {
            firstNameAlert.innerText = "Champ invalide: veulliez saisir au moins trois caractères.";
        } else {
            firstNameAlert.innerHTML = "";
        }

        // Saisis de la date de naissance
        if (dateOfBirth.value.length < 1) {
            dateOfBirthAlert.innerText = "Champ obligatoire"
        } else if (!/^[0-9]{2,2}[/]{1,1}[0-9]{2,2}[/]{1,1}[0-9]{4,4}$/.test(dateOfBirth.value)) {
            dateOfBirthAlert.innerText = "Champ invalide veulliez respecter le format jj/mm/aaaa, jj-mm-aaaa ou jj.mm.aaaa";
        
        } else {
            dateOfBirthAlert.innerHTML = "";
        }

        // Saisis de l'email
        if (email.value.length < 1) {
            emailAlert.innerText = "Champ obligatoire";
        
        } else if (!/^(.?[a-zA-Z0-9]){1,64}[@]{1,1}[a-zA-Z0-9]{1,248}[.]{1,1}[a-z]{2,6}$/.test(email.value)) {
            emailAlert.innerText = "Format email invalide";

        } else {
            emailAlert.innerHTML = "";
        }

        // Saisis du code confidentiel
        if (secretCode.value.length < 1) {
            secretCodeAlert.innerText = "Champ Obligatoire";
        } else if (!/^[F]{1,1}[R]{1,1}[0-9]{5,5}[A-Z-._]{3,3}[xX]{1,1}$/.test(secretCode.value)) {
            secretCodeAlert.innerText = "Code invalide, vérifier qu'il contient le préfixe FR, 5 chiffres et 3 lettres majuscules (ou bien - . ou _), ainsi que le suffixe x ";
        } else {
            secretCodeAlert.innerHTML = "";
        }
        
    }
});

// Le bouton annuler utilise la fonction removeAlert() et removeInput()
cancel.addEventListener("click", function (event) {
    event.preventDefault();
    removeInput();
    removeAlert();
});

// Le bouton valider active la fonction removeAlert quand on click dessus.
alertRemoval.addEventListener("click", function() {
    removeInput();
    removeAlert();
});