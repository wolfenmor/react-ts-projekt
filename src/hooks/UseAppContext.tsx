import {useContext} from "react";
import {Context} from "../hoc/ContextProvider";

const UseAppContext:any = () => {
    useContext(Context)
}
const {trigger} = UseAppContext;

console.log(trigger)
export {UseAppContext}