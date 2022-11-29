function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

/*async function putUserName(data) {
    const name = document.querySelector(".modal header h1");
    name.innerHTML = `Contacter-moi</br>
    ${data.name}`;
}

async function initName() {
    const id = await getUrlID();
    const data = await getPhotographer(id);
    await putUserName(data);
  }

  initName();*/

  // Variables //

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const texte = document.getElementById("texte");
  const nameContact = document.querySelector(".modal header h1");