const APY_KEY = '&apikey=c5270053';

export function getFilmes(search) {
    return fetch(`http://www.omdbapi.com/?s=${search}${APY_KEY}`)
        .then(response => response.json())
        .catch(error => console.log('ocorreu um erro: ', error))

}

export function getFilmesById(id) {
    return fetch(`http://www.omdbapi.com/?i=${id}${APY_KEY}`)
        .then(response => response.json())
        .catch(error => console.log('ocorreu um erro: ', error))

}