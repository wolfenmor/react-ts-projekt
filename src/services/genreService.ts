import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IGenres} from "../interfaces/movie/genreInterface";
import {IMovie} from "../interfaces/movie";

const genreService = {
    getAll:():IRes<IGenres> => apiService.get(urls.genres.base),
    getById: (id: string):IRes<IGenres> => apiService.get(urls.genres.byIds(id))
}

export {genreService}