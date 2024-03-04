import {FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

import {IGenres} from "../../interfaces/movie/genreInterface";
import css from "./genre.module.css"
interface IProps extends PropsWithChildren {
    genre: IGenres
}

const Genre: FC<IProps> = ({genre}) => {
    console.log(genre)
    return (
        <div className={css.Genre}>
            <NavLink to={`/genre/${genre.id}/${genre.name}`}>{genre.name}</NavLink>
        </div>
    );
};

export {Genre};