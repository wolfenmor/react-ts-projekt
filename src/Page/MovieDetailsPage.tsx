import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {IMovie} from "../interfaces/movie";
import {MovieDetails} from "../components/MoviesContainer/MovieDetails";

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {

    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState<IMovie[] | null>(null);

    useEffect(()=> {
        movieService.getById(id).then(({data}) => setMovieDetails([data]))
    }, [id])

    return (
        <div>
            {movieDetails && movieDetails.map((movie: IMovie) => <MovieDetails key={movie.id} movieDetails={movie}/>)}
        </div>
    );
};

export {MovieDetailsPage};