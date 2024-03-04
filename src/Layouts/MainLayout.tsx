import {FC, PropsWithChildren} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../components/Header";
import {UseAppContext} from "../hooks/UseAppContext";
import cssGray from "../stylesheets/cssGray.module.css"
import cssWhite from "../stylesheets/cssWhite.module.css"
interface IProps extends PropsWithChildren {

}

const MainLayout: FC<IProps> = () => {
    const [trigger, ] = UseAppContext()

    return (
        <div className={trigger? cssGray.Body : cssWhite.Body}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};