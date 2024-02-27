const baseURL = "https://api.themoviedb.org/3"

const movies = "/discover/movie"

const urls =  {
    movies: {
        base: movies,
        byId:(id: string):string => `movie/${id}`
    }
}

export {baseURL, urls}