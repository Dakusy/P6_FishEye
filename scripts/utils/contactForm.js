const modal = document.getElementById("contact_modal");

function displayModal() {
  modal.style.display = "block";
  main.setAttribute("aria-hidden", "true")
  user_pictures.setAttribute("aria-hidden", "true")
  sorter.setAttribute("aria-hidden", "true")
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  main.setAttribute("aria-hidden", "false")
  user_pictures.setAttribute("aria-hidden", "false")
  sorter.setAttribute("aria-hidden", "false")
}

/* Affiche le nom du photographe dans le modal.*/

async function putUserName(photographe) {
  const name = document.querySelector(".modal header h2");
  name.innerHTML = `Contactez-moi</br>
    ${photographe.name}`;

}

/*Permet de récupérer les infos du photographe depuis l'ID.*/

async function initName() {
  const id = await getUrlID();
  const photographe = JSON.parse(localStorage.getItem(id));
  await putUserName(photographe);
}

initName();

// Variables //

const firstName = document.getElementById("prenom");
const lastName = document.getElementById("nom");
const email = document.getElementById("mail");
const message = document.getElementById("message");
const modalSubmit = document.getElementById("submit_form");


//Vérification prénom/nom fonction
const checkName = (name, type) => {
  const regText = /[a-zA-ZÀ-ÿ]{2}/;
  if (regText.test(name.value)) {
    name.parentNode.dataset.errorVisible = false;
    return true
  } else {
    name.parentNode.dataset.error = `Le ${type} doit avoir 2 caractères ou plus`;
    name.parentNode.dataset.errorVisible = true;
    return false
  }
};

//Event si le le prénom est mauvais
firstName.addEventListener('blur', function () {
  checkName(firstName, "prénom");
});

//Event si le nom est mauvais
lastName.addEventListener('blur', function () {
  checkName(lastName, "nom");
});

//Vérification email fonction
const checkEmail = (email) => {
  const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
  if (regEmail.test(email.value)) {
    email.parentNode.dataset.errorVisible = false;
    return true
  } else {
    email.parentNode.dataset.error = "Veuillez entrer un mail valide";
    email.parentNode.dataset.errorVisible = true;
    return false
  }
};

email.addEventListener('blur', function () {
  checkEmail(email);
});

function validateModalSubmit() {
  // check of each function input of the form
  if (checkName(firstName) && checkName(lastName) && checkEmail(email)) {
    // display none the modal
    modal.style.display = "none";
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(message.value);
    return false;
  } else {
    // else show all errorVisible of each else functions
    checkName(firstName);
    checkName(lastName);
    checkEmail(email);
    return false;
  }
}

modalSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  validateModalSubmit();
});




