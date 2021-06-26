import axios from 'axios'

export const filmsAPI = axios.create({
    baseURL: 'https://swapi.dev/api/films/'
})

export const navesAPI = axios.create({
    baseURL: 'https://swapi.dev/api/starships/'
})

export const vehiclesAPI = axios.create({
    baseURL: 'https://swapi.dev/api/vehicles/'
})

