import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const MovieDetails: FC<IProps> = () => {
    return (
        <div>
            MovieDetails
        </div>
    );
};

export {MovieDetails};