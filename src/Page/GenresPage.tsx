import {FC, PropsWithChildren} from "react";
import {Genres} from "../components/GenresContainer";

interface IProps extends PropsWithChildren {

}

const GenresPage: FC<IProps> = () => {
    return (
        <div>
            <Genres/>
        </div>
    );
};

export {GenresPage};