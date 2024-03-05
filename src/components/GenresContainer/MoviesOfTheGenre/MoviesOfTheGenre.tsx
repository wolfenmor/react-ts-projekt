import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {movieService} from "../../../services/movieService";
import {IMovie} from "../../../interfaces/movie";
import {MovieOfTheGenre} from "./MovieOfTheGenre";
import {UseGenrePageQuery} from "../../../hooks/UseGenrePageQuery";
import css from "./moviesOfTheGenre.module.css"
interface IProps extends PropsWithChildren {

}

const MoviesOfTheGenre: FC<IProps> = () => {
    const {id, name} = useParams()
    const [moviesGenre, setMoviesGenre] = useState<IMovie[]>([]);
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    const {prevPage, nextPage, page} = UseGenrePageQuery();

    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        movieService.getByGenreId(id, page).then(({data}) => {
                setMoviesGenre(data.results)
            setPrevNext({prev: data.page > 1, next: data.page < data.total_pages})
            setCurrentPage(data.page)
            }
        )
    }, [page])


return(
    <div className={css.Container}>
        <div className={css.GenreBox}>
            {moviesGenre && moviesGenre.length > 0 && (
                <img className={css.GenreImg} src={`https://image.tmdb.org/t/p/w200/${moviesGenre[1].backdrop_path}`} alt={moviesGenre[0].original_title} />
            )}
            <div>
            <p>Movies of the Genre</p>
            <h3>{name}</h3>
            </div>
        </div>
    <div className={css.Box}>
        {moviesGenre && moviesGenre.map((movie : IMovie) => <MovieOfTheGenre key={movie.id} movie={movie}/>)}
    </div>
    <div className={css.Buttons}>
    <button disabled={!prevNext.prev} onClick={prevPage}>prev</button>
        <div>{currentPage}</div>
    <button disabled={!prevNext.next} onClick={nextPage}>next</button>
    </div>
    </div>
);
};

export {MoviesOfTheGenre};