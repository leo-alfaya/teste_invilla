export const SET_PERSONAGENS = 'SET_PERSONAGENS';
export const SET_DETALHES = 'SET_DETALHES';
export const CLEAR_DETALHES = 'CLEAR_DETALHES';

export const getPersonagens = (page) => {
    return dispatch => {
        fetch(page)
            .then(response => response.json())
            .then(json => dispatch(setPersonagens(json)))
            .catch(err => {
                console.log(err);
            })
    }
}

export const getSpecies = (urls) => {
    return dispatch => {
        Promise.all(urls.map(url => fetch(url)))
            .then(response => Promise.all(response.map(r => r.json())))
            .then(json => {
                if(json.length <= 1) {
                    dispatch(setDetalhes("species", json[0].name))
                } else {
                    dispatch(
                        setDetalhes(
                            "species", 
                            json.map(json => json.name).join(", ")
                        )
                    )
                }            
            })
    }
}

export const getPlanet = (url) => {
    return dispatch => {
        fetch(url)
            .then(response => response.json())
            .then(planet => dispatch(setDetalhes("homeworld", planet.name)))
            .catch(err => {
                console.log(err);
            })
    }
}

export const getMovies = (urls) => {
    return dispatch => {
        Promise.all(urls.map(url => fetch(url)))
            .then(response => Promise.all(response.map(r => r.json())))
            .then(json => {
                if(json.length <= 1) {
                    dispatch(setDetalhes("movies", json[0].name))
                } else {
                    console.log(json)
                    dispatch(
                        setDetalhes(
                            "movies", 
                            json.map(movie => movie.title).join(", ")
                        )
                    )
                }            
            })
    }
}

export const getVehicles = (urls) => {
    return dispatch => {
        Promise.all(urls.map(url => fetch(url)))
            .then(response => Promise.all(response.map(r => r.json())))
            .then(json => {
                if(json.length <= 1) {
                    dispatch(setDetalhes("vehicles", json[0].name))
                } else {
                    console.log(json)
                    dispatch(
                        setDetalhes(
                            "vehicles", 
                            json.map(vehicle => vehicle.name).join(", ")
                        )
                    )
                }            
            })
    }
}

const setPersonagens = (personagens) => {
    return {
        type: SET_PERSONAGENS,
        personagens 
    }
}

const setDetalhes = (prop, value) => {
    return {
        type: SET_DETALHES,
        payload: {
            prop,
            value
        }
    }
}

export const clearDetalhes = () => {
    return {
        type: CLEAR_DETALHES
    }
}
