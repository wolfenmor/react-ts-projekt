import {useContext} from "react";

import {Context} from "../hoc/ContextProvider";

const UseAppContext = () => {
    const {trigger, changeTrigger} = useContext(Context)
    return [trigger, changeTrigger]
}

export {UseAppContext}