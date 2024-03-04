import {FC} from "react";
import StarRatings from "react-star-ratings";

export interface IRatingProps {
    rating?: number;
    starRatedColor?: string;
    changeRating?: (newRating: number) => void;
    numberOfStars: number;
    name: string
    starDimension?: string;
}
export const Rating: FC<IRatingProps> = ({rating,starRatedColor, changeRating, numberOfStars, name, starDimension }) => {

    return (
        <StarRatings
            rating={rating}
            starRatedColor={starRatedColor}
            changeRating={changeRating}
            numberOfStars={numberOfStars}
            name={name}
            starDimension={starDimension}
        />
    );
}
