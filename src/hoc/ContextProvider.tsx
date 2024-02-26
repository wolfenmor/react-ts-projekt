import {createContext, FC, PropsWithChildren, useState} from "react";

interface IProps extends PropsWithChildren {

}

const Context = createContext(null);
const ContextProvider: FC<IProps> = ({children}) => {
    const [trigger, setTrigger] = useState(null);
    
    const changeTrigger = () => {
      setTrigger((prev: boolean)=> (!prev));
    }
    return (
        <div>
            <Context.Provider value={{trigger, changeTrigger}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {
    ContextProvider,
    Context
};