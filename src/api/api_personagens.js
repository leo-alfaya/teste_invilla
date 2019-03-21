export const getAll = (cb) => {
    fetch('https://swapi.co/api/people/1/')
        .then(response => response.json())
        .then(json => cb(json))
}
