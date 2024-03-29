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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {prevPage, nextPage, page} = UseMoviePageQuery();

    useEffect(() => {
        movieService.getAll(page).then(({data}) => {
                setMovies(data.results)
            setPrevNext({prev: data.page > 1, next: data.page < data.total_pages})
            setCurrentPage(data.page)
            }
        )
    }, [page])

    console.log(movies)
    return (
        <div className={css.Container}>
            <div className={css.Box}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.Button}>
                <button disabled={!prevNext.prev} onClick={prevPage}>Prev</button>
                <div>{currentPage}</div>
                <button disabled={!prevNext.next} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {Movies};