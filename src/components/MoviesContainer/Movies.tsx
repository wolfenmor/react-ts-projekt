import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movie";
import {movieService} from "../../services/movieService";
import {Movie} from "./Movie";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const Movies: FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    const [query, setQuery] = useSearchParams({page: "1"})
    const [prevNext, setPrevNext] = useState({prev: null, next: null});

    useEffect(() => {
        movieService.getAll(query.get("page")).then(({data}) => {
                setMovies(data.results)
            setPrevNext({prev: data.page > 1, next: data.page < data.total_pages})
            }
        )
    }, [query.get("page")])

    const prev = () => {
      setQuery(prev => {
          const prevPage = +prev.get("page") - 1;
          setPrevNext({ prev: prevPage > 0, next: true });
          prev.set("page", prevPage.toString())
          return prev
      })
    }
    const next = () => {
        setQuery(next => {
            const nextPage = +next.get("page") + 1;
            setPrevNext({ prev: true, next: true });
            next.set("page", nextPage.toString())
            return next
        })
    }
    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <button disabled={!prevNext.prev} onClick={prev}>Prev</button>
            <button disabled={!prevNext.next} onClick={next}>Next</button>
        </div>
    );
};

export {Movies};