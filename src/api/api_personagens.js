export const getPeople = (url, cb) => {
    fetch(url)
        .then(response => response.json())
        .then(json => cb(json))
}
