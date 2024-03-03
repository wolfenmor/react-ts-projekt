import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces/movie";

interface IProps extends PropsWithChildren {
    res: IMovie
}

const Search: FC<IProps> = ({res}) => {
    console.log(res)
return(
<div>
Search
</div>
);
};

export {Search};