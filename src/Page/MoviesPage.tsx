import {FC, PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";
import {Movies} from "../components";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {
    return (
        <div>
            <Outlet/>
            <Movies/>
        </div>
    );
};

export {MoviesPage};