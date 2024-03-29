import {FC, PropsWithChildren} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import css from "./Header.module.css"
import {UseAppContext} from "../../hooks/UseAppContext";
import cssInput from "../../stylesheets/input.module.css"
import {Search} from "../SearchContainer/Search";
import {ISearchFormData} from "../../interfaces/searchInterface";

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    const [, changeTrigger] = UseAppContext()

    const {register, handleSubmit, reset} = useForm<ISearchFormData>();
    const navigate = useNavigate()

    const search: SubmitHandler<ISearchFormData> = async (data) => {
        const searchTerm = data.search;
        navigate(`search/${searchTerm}`)
        reset()
    }
    return (
        <ul className={css.Header}>
            <li className={css.LiText}><NavLink to={"movies"}>Movies</NavLink></li>
            <li className={css.LiText}><NavLink to={"Genres"}>Genres</NavLink></li>
            <form onSubmit={handleSubmit(search)}>
                <div className={cssInput.Input}>
                    <input placeholder={"Search"} {...register("search")}/>
                    <button className={cssInput.SearchIcon}><img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaUlEQVR4nO2Wz0pCQRjFf2i6ydop9ArZO1T7FhrlK0TSH+spxNcw61GCaJMFJZn71rqolfHBufBtwjtzLxLkgYELM+ecud98cxhY4Q+hDLSAW+ANmGnY90BztiZXHAIfwHzBGAPNPAwLQM8JPwEXwDawrlEHLoGhW9cVNxo9CX0BJwvEbO5UaxPz6PLOJbQbwNtz5o1Q07I7U/vTULTFfQdKIcSWO9OYsyoCz9I4CiHeiXROPDrSuAkhjUSy7o1FXRp2z1NjKlIlg/GGNKbLNt6MMR7lUOod19mpMRDJEikW19Lox1ynYYbr9CKN49AAGYtoMRiKM3EnwFooueki02IwLfaBb3EPiETXmbdVwt9Q1J8mpp9ANda44MznisGOwqGiYd175c40MU3W18iAhq7FoofAROWtuqzObF5S4Fv2vioYZtpQX93rG6mWp3koqu5lYpvd4r+Y11zZH5ZpnJg/AvfLNl4Bww/dcoIlpDH7/gAAAABJRU5ErkJggg==" alt={"search"}>
                    </img>
                    </button>
                </div>
            </form>
            <button className={css.Theme} onClick={() => changeTrigger()}>Theme</button>
        </ul>
    );
};

export {Header};