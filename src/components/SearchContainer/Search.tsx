import {FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

import {IMovie} from "../../interfaces/movie";
import {Rating} from "../../Ratings/Ratings";
import css from "./SearchCss/Search.module.css"

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Search: FC<IProps> = ({movie}) => {
    const {poster_path, original_title, vote_average} = movie;
    return (
        <div className={css.Box}>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
            <span><NavLink to={`/movies/${movie.id}`}>{original_title}</NavLink></span>
            <section>
                <Rating numberOfStars={10} name={"rating"} starRatedColor={"gold"} rating={vote_average}
                        starDimension={"15px"}
                />
            </section>
        </div>
    );
};
export {Search};

/*`/movies/${movie.id}`*/