import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Search} from "../components/SearchContainer/Search";
import {movieService} from "../services/movieService";
import {IMovie} from "../interfaces/movie";
import {UseMoviePageQuery} from "../hooks/UseMoviePageQuery";

interface IProps extends PropsWithChildren {

}

const SearchPage: FC<IProps> = () => {
    const {title} = useParams()

    const [movies, setMovies] = useState<any>([]);

    const [prevNext, setPrevNext] = useState({prev: null, next: null});
    const {prevPage, nextPage, page} = UseMoviePageQuery();

    useEffect(() => {
        movieService.getBySearch(title, page).then(({data}) => {
                setMovies(data.results)
                setPrevNext({prev: data.page > 1, next: data.page < data.total_pages})
            }
        )
    }, [title, page])
    console.log(movies)
    return (
        <div>
            {movies && movies.map((movie: IMovie) => <Search key={movie.id} movie={movie}/>)}
            <button disabled={!prevNext.prev} onClick={prevPage}>prev</button>
            <button disabled={!prevNext.next} onClick={nextPage}>next</button>
        </div>
    );
};

export {SearchPage};