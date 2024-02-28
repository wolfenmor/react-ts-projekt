import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movie";
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, poster_path, original_title} = movie;
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
            <div><NavLink to={`/movies/${id}`}>{original_title}</NavLink></div>
        </div>
    );
};

export {Movie};