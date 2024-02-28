import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IGenres} from "../../interfaces/movie/genreInterface";
import {genreService} from "../../services/genreService";
import {ISetState} from "../../types/setStateType";
import {movieService} from "../../services/movieService";
import {IMovie} from "../../interfaces/movie";
import {Movie} from "../MoviesContainer";
import {Genre} from "./Genre";

interface IProps extends PropsWithChildren {

}

const Genres: FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenres[]>(null);

    useEffect(()=> {
    genreService.getAll().then(({data}) => {
        setGenres(data.genres)
    })
    }, [])

    return (
        <div>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};