//Mettre le code JavaScript lié à la page photographer.html

async function getUrlID() {
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));
    return id;
}