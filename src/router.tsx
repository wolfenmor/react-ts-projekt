import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./Layouts";
import {ErrorPage, GenresPage, MoviesPage, SearchPage} from "./Page";
import {MovieDetailsPage} from "./Page/MovieDetailsPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"movies"}/>
            },
            {
                path: "movies", element: <MoviesPage/>, children: [
                    {
                        path: "search", element: <SearchPage/>
                    }
                ]
            },
            {
              path: "movies/:id", element: <MovieDetailsPage/>
            },
            {
                path: "genres", element: <GenresPage/>
            }
        ]
    }
]);

export {router}