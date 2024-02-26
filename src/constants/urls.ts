const baseURL = "https://api.themoviedb.org/3"

const movies = "/discover/movie"

const urls =  {
    movies: {
        base: movies,
        byId:(id:any):any => `movie/${id}`
    }
}

export {baseURL, urls}