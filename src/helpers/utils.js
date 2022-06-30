import React from "react"
import axios from "axios"

const urlFetcher = url => fetch(url).then(r => r.json())
const urlPoster = (url, data) =>
  axios({ method: "POST", url, data }).then(r => r.data)

// const tokensFetcher = path => urlFetcher(`https://api.boxigames.com/v1${path}`)
// const tokensPoster = (path, data) =>
//   urlPoster(`https://api.boxigames.com/v1${path}`, data)



// export function createEmailSend(data) {
//     return urlPoster(`https://api.boxigames.com/v1/createEmailSend`, data)
// }
//https://corporate.pokemon.co.jp/assets/img/img-ball.svg
//https://raw.githubusercontent.com/Codeaamy/Pokedex/master/images/pokeball.png
//https://templates.iqonic.design/markethon/layout-1/revslider/assets/02f6c-bg.jpg
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/master/src/assets/Images/dots.png
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/830413c5cca556ef4511effeeb0a9031af8be049/src/assets/Icons/bug.svg
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/830413c5cca556ef4511effeeb0a9031af8be049/src/assets/Icons/dragon.svg
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/830413c5cca556ef4511effeeb0a9031af8be049/src/assets/Icons/grass.svg
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/830413c5cca556ef4511effeeb0a9031af8be049/src/assets/Icons/fire.svg
//
//
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/master/src/assets/Images/Pokeball_header.png
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/master/src/assets/Images/Pokeball_card.png
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/master/src/assets/Images/Pokeball.png
//https://raw.githubusercontent.com/Mitesh2499/PokedexApp/master/src/assets/Images/Dots_card.png
//
//

export function getListPokemon(limit) {
    return urlFetcher(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
}
export function getInfoPokemon(name) {
    return urlFetcher(`https://pokeapi.co/api/v2/pokemon/${name}`)
}
export function getEvolutionPokemon(id) {
    return urlFetcher(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
}
export function getPokemonSpecies(id) {
    return urlFetcher(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
}
export function getListAbility(limit) {
    return urlFetcher(`https://pokeapi.co/api/v2/ability/?limit=${limit}`)
}

export function formatNUmber(number) {
    if(number<=9) return (`00${number}`)
    if(number>9 && number<=99) return (`0${number}`)
    if(number>99) return number
}


export function splitUrl(url) {
    if(!url) return

    const arrSplit= url.split('/pokemon/')
    const number =parseInt(arrSplit[1].replace('/', ''))

    if(number<=9) return (`00${number}`)
    if(number>9 && number<=99) return (`0${number}`)
    return number
}
export function splitUrlChain(url) {
    if(!url) return

    const arrSplit= url.split('/pokemon-species/')
    const number =parseInt(arrSplit[1].replace('/', ''))

    if(number<=9) return (`00${number}`)
    if(number>9 && number<=99) return (`0${number}`)
    return number
}

export function idPokemon(url) {
    const arrSplit= url.split('/pokemon/')
    return parseInt(arrSplit[1].replace('/', ''))

}

