import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../../interfaces/movie";
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MovieOfTheGenre: FC<IProps> = ({movie}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.original_title}/>
            <NavLink to={`/movies/${movie.id}`}><h4>{movie.original_title}</h4></NavLink>
        </div>
    );
};

export {MovieOfTheGenre};