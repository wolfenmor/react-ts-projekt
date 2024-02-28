import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movie";
import {IGenres} from "../../interfaces/movie/genreInterface";
import {NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    movieDetails: IMovie
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {original_title, backdrop_path, overview, genres} = movieDetails;

    return (
        <div>
            {original_title}
            <br/>
            <img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt={original_title}/>
            <br/>
            {overview}
            {movieDetails && genres.map(genre => <h5 key={genre.id}><NavLink to={`/genre/${genre.id}/${genre.name}`}>{genre.name} </NavLink></h5>)}

        </div>
    );
};

export {MovieDetails};