import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movie";
import css from "./searchCss.module.css"
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Search: FC<IProps> = ({movie}) => {

    console.log(movie)
    return (
        <div className={css.Search}>
            <NavLink to={`/movies/${movie.id}`}>{movie.original_title}</NavLink>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}></img>
        </div>
    );
};
export {Search};