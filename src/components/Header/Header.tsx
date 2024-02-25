import {FC, PropsWithChildren} from "react";
import css from "./Header.module.css"
import {NavLink} from "react-router-dom";
interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    return (
        <ul className={css.Header}>
            <li className={css.LiText}><NavLink to={"movies"}>Movies</NavLink></li>
            <li className={css.LiText}><NavLink to={"Genres"}>Genres</NavLink></li>
            <li className={css.LiText}><NavLink to={"movies/search"}>Search</NavLink></li>
        </ul>
    );
};

export {Header};