import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {poster_path, original_title} = movie;

    console.log(poster_path)

    return (
        <div>
            <div>{original_title}</div>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title}/>
        </div>
    );
};

export {Movie};