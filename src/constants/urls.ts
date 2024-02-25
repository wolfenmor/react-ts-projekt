const baseURL = "https://api.themoviedb.org/3"

const movies = "/discover/movie"

const urls =  {
    movies: {
        base: movies,
        byId:(id:number):string => `${movies}/${id}`
    }
}

export {baseURL, urls}