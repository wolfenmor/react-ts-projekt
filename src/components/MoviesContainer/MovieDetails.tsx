import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movie";

interface IProps extends PropsWithChildren {
    movieDetails: IMovie
    key: number
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {original_title, backdrop_path, overview} = movieDetails;
    return (
        <div>
            {}
            {original_title}
            <br/>
            <img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt={original_title}/>
            <br/>
            {overview}
        </div>
    );
};

export {MovieDetails};