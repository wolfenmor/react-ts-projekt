import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./Layouts";
import {ErrorPage, GenresPage, MoviesPage} from "./Page";
import {MovieDetailsPage} from "./Page/MovieDetailsPage";
import {MoviesOfTheGenre} from "./components/GenresContainer/MoviesOfTheGenre/MoviesOfTheGenre";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"movies"}/>
            },
            {
                path: "movies", element: <MoviesPage/>
            },
            {
              path: "movies/:id", element: <MovieDetailsPage/>
            },
            {
                path: "genres", element: <GenresPage/>
            },
            {
                path: "genre/:id/:name", element: <MoviesOfTheGenre/>
            }
        ]
    }
]);

export {router}