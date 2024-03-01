import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movie";
import {movieService} from "../../services/movieService";
import {Movie} from "./Movie";
import {UseMoviePageQuery} from "../../hooks/UseMoviePageQuery";
import css from "./MovieCss/movies.module.css"
interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    const {prevPage, nextPage, page} = UseMoviePageQuery();

    useEffect(() => {
        movieService.getAll(page).then(({data}) => {
                setMovies(data.results)
            setPrevNext({prev: data.page > 1, next: data.page < data.total_pages})
            }
        )
    }, [page])

    return (
        <div className={css.Container}>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <button disabled={!prevNext.prev} onClick={prevPage}>Prev</button>
            <button disabled={!prevNext.next} onClick={nextPage}>Next</button>
        </div>
    );
};

export {Movies};