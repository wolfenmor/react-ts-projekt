import {IRes} from "../types";
import {IMovie} from "../interfaces/movie";
import {apiService} from "./apiService";
import {urls} from "../constants";
const movieService = {
    getAll:(page = "1"):IRes<IMovie> => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id: string):IRes<IMovie> => apiService.get(urls.movies.byId(id)),
    getByGenreId: (id: string, page = "1"): IRes<IMovie> => apiService.get(urls.movies.byGenreId(id), {params: {page}}),
    getBySearch: (query: string, page = "1") : IRes<IMovie> => apiService.get(urls.movies.bySearch(query), {params: {page}})
}

export {movieService}