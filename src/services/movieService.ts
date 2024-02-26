import {IRes} from "../types";
import {IMovie} from "../interfaces/movie";
import {apiService} from "./apiService";
import {urls} from "../constants";
const movieService = {
    getAll:(page = "1"):IRes<IMovie> => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id: any):IRes<IMovie> => apiService.get(urls.movies.byId(id))
}

export {movieService}