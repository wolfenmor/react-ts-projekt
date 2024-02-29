import {createContext, FC, PropsWithChildren, useState} from "react";

interface IProps extends PropsWithChildren {

}

const Context = createContext<any>(null);
const ContextProvider: FC<IProps> = ({children}) => {
    const [trigger, setTrigger] = useState<boolean>(false);
    
    const changeTrigger = () => {
      setTrigger((prev: boolean)=> !prev);
        console.log(trigger)
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