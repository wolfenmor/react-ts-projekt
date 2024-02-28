import {FC, PropsWithChildren} from "react";
import {IGenres} from "../../interfaces/movie/genreInterface";
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenres
}

const Genre: FC<IProps> = ({genre}) => {
    console.log(genre)
    return (
        <div>
            <NavLink to={`/genre/${genre.id}/${genre.name}`}>{genre.name}</NavLink>
        </div>
    );
};

export {Genre};