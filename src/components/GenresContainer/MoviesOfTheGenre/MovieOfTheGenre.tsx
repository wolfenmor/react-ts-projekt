import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../../interfaces/movie";
import {NavLink} from "react-router-dom";
import css from "./movieOfTheGenre.module.css"
import {Rating} from "../../../Ratings/Ratings";
interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MovieOfTheGenre: FC<IProps> = ({movie}) => {
    return (
        <div className={css.Block}>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.original_title}/>
            <span><NavLink to={`/movies/${movie.id}`}><h4>{movie.original_title}</h4></NavLink></span>
            <section>
                <Rating numberOfStars={10} name={"rating"} starRatedColor={"gold"} rating={movie.vote_average}
                        starDimension={"15px"}
                />
            </section>
        </div>
    );
};

export {MovieOfTheGenre};