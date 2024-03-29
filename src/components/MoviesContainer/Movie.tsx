import {FC, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

import {IMovie} from "../../interfaces/movie";
import css from "./MovieCss/movie.module.css"
import {Rating} from "../../Ratings/Ratings";
interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, poster_path, original_title, vote_average} = movie;
    return (
        <div className={css.Block}>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
            <span><NavLink to={`/movies/${id}`}>{original_title}</NavLink></span>
            <section>
                <Rating numberOfStars={10} name={"rating"} starRatedColor={"gold"} rating={vote_average}
                        starDimension={"15px"}
                />
            </section>
        </div>
    );
};

export {Movie};