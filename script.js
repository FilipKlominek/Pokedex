pokemon = []

function load() {

    let input = document.getElementById('search-bar').value
    console.log(input)

    let acc = 0
    for (let i = 0; i < pokemon.length; i++) {

        if (acc >= 8) break;

        let card = document.createElement('div')
        card.className = 'border'
        card.tagName = 'card'

        let image = document.createElement('img')
        let name = document.createElement('h2')
        let description = document.createElement('p')

        image.src = pokemon[i].hires
        name.innerText = pokemon[i].name.english
        description.innerText = pokemon[i].description

        image.style.width = '300px'

        name.style.margin = '10px'
        description.style.margin = '10px'

        card.appendChild(image)
        card.appendChild(name)
        card.appendChild(description)

        card.style.width = '300px'


        if (input === '' || pokemon[i].name.english.toLowerCase().includes(input)) {
            document.getElementById('container').appendChild(card)
            acc++
        }
    }
}

function reload() {

    while (document.getElementsByClassName('border').length > 0) document.getElementsByClassName('border')[0].remove()
    load()

}

window.onload = function () {
    fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json')
        .then((response) => response.json())
        .then((p) => {
            pokemon = p;

            load()

            let button = document.getElementById('button')
            button.addEventListener('click', reload)

        });
}
