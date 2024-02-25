import {FC, PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header";

interface IProps extends PropsWithChildren {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};