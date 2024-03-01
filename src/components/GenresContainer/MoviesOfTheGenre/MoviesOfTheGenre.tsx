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

    useEffect(() => {
        movieService.getByGenreId(id, page).then(({data}) => {
                setMoviesGenre(data.results)
            setPrevNext({prev: data.page > 1, next: data.page < data.total_pages})
            }
        )
    }, [page])

return(
    <div>
    <div className={css.Container}>
        <h3>{name}</h3>
        {moviesGenre && moviesGenre.map((movie : IMovie) => <MovieOfTheGenre key={movie.id} movie={movie}/>)}
    </div>
    <div>
    <button disabled={!prevNext.prev} onClick={prevPage}>prev</button>
    <button disabled={!prevNext.next} onClick={nextPage}>next</button>
    </div>
    </div>
);
};

export {MoviesOfTheGenre};