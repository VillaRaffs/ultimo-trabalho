const pageInput = document.getElementById("pageInput")
const searchBtn = document.getElementById("searchBtn")
const resultsDiv = document.getElementById("results")

async function fetchCharacters(){
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch(`https://ponyapi.net/v1/character/all`)
        const data = await response.json()
        console.log(data)

        if(data.error){
            resultsDiv.innerHTML = "<p>Não encontrado</p>"
            return
        }

         resultsDiv.innerHTML = ""
         data.data.forEach(character => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p><strong>Status:</strong>${character.status}</p>
                <p><strong>Espécie:</strong>${character.species}</p>
            `
            resultsDiv.appendChild(card)
         })
    } catch (error) {
        // console.log("deu ruim")
        resultsDiv.innerHTML = "<p>Erro ao buscar personagens!!!</p>"
    }
}

// searchBtn.addEventListener("click", () => {
//     const page = pageInput.value.trim()
//     if(page){
//         fetchCharacters(page)
//     }else{
//         resultsDiv.innerHTML = "<p>Digite um número de página</p>"
//     }
// })

fetchCharacters(1)