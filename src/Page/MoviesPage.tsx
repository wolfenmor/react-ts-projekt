import {FC, PropsWithChildren} from "react";

import {Movies} from "../components";

interface IProps extends PropsWithChildren {

}

const MoviesPage: FC<IProps> = () => {
    return (
        <>
            <Movies/>
        </>
    );
};

export {MoviesPage};