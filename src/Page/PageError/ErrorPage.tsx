import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const ErrorPage: FC<IProps> = () => {
    return (
        <div>

            Error 404
        </div>
    );
};

export {ErrorPage};