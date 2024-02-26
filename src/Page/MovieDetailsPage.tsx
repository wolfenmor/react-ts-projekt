import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../services/movieService";

interface IProps extends PropsWithChildren {

}

const MovieDetailsPage: FC<IProps> = () => {

    const {id} = useParams()
    console.log(id)
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(()=> {
        movieService.getById(id).then(({data}) => setMovieDetails(data))
    }, [])

    console.log(movieDetails)
    return (
        <div>
            MovieDetailsPage
        </div>
    );
};

export {MovieDetailsPage};