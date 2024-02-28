import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const SearchPage: FC<IProps> = () => {
return(
<div>
    <input></input>
</div>
);
};

export {SearchPage};