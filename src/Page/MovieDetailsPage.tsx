import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../services/movieService";
import {IMovie} from "../interfaces/movie";
import {MovieDetails} from "../components/MoviesContainer/MovieDetails";
import {IGenres} from "../interfaces/movie/genreInterface";
import {genreService} from "../services/genreService";


interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {

    const {id} = useParams()
    console.log(id)
    const [movieDetails, setMovieDetails] = useState<IMovie[]>(null);

    useEffect(()=> {
        movieService.getById(id).then(({data}) => setMovieDetails([data]))
    }, [id])

    console.log(movieDetails)

    return (
        <>
            {movieDetails && movieDetails.map((movie: IMovie) => <MovieDetails key={movie.id} movieDetails={movie}/>)}
        </>
    );
};

export {MovieDetailsPage};