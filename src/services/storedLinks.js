//Buscar os Links Salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}



// Salvar um link no sotrage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    // Se ja tiver um link salvo, ele nao pode duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)
    if (hasLink) {
        console.log("Esse link já existe na sua lista")
        return;
    }

    // Ass new Link to list
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored))

}


// Deletar algum link salvo

export function deleteLink(links, id) {
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })


    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("Link deletado com sucesso!")

    return myLinks;
}