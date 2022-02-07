window.onload = function () {

    fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json')
        .then((response) => response.json())
        .then((pokemon) => {
            console.log(pokemon)

            load()

            function what() {
                document.getElementById('search').appendChild(document.createElement('input'))
            }

            function load() {

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

                    card.appendChild(image)
                    card.appendChild(name)
                    card.appendChild(description)

                    card.style.width = '300px'

                    document.getElementById('container').appendChild(card)

                    acc++
                }
            }
        });
}
