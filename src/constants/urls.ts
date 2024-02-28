const baseURL = "https://api.themoviedb.org/3"

const movies = "/discover/movie"
const genres = "/genre/movie/list"

const urls =  {
    movies: {
        base: movies,
        byId:(id: string):string => `movie/${id}`,
        byGenreId: (id: string): string => `discover/movie?with_genres=${id}`
    },
    genres: {
        base: genres,
        byIds: (ids: string): string => `https://api.themoviedb.org/3/genre/${ids}`
    }
}

export {baseURL, urls}