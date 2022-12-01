const modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
    document.getElementById("firstName").focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

async function putUserName(photographe) {
    const name = document.querySelector(".modal header h2");
    name.innerHTML = `Contacter-moi</br>
    ${photographe}`;
    
}

async function initName() {
    const id = await getUrlID();
    const photographe = JSON.parse(localStorage.getItem(id));
    await putUserName(photographe.name);
  }

  initName();

  // Variables //

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const texte = document.getElementById("texte");
  const nameContact = document.querySelector(".modal header h1");