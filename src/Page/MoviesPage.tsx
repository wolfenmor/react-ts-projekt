import {FC, PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";
import {Movies} from "../components";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {
    return (
        <>
            <Outlet/>
            <Movies/>
        </>
    );
};

export {MoviesPage};