import { createContext, Dispatch, ReactNode, useState } from "react";

type Props = {
    children: ReactNode
}

type ContextState = {
    darkMode: boolean,
    darModeHandler: Dispatch<any>
}

const INITIAL_CONTEXT = {
    darkMode: false,
    darModeHandler: () => null
};

export const DarkModeContext = createContext<ContextState>( INITIAL_CONTEXT );

const DarkModeProvider = ( { children } : Props ) => {

    const [ darkMode, setDarkMode ] = useState<boolean>( false );

    const darModeHandler = () => {
        setDarkMode( prevValue => {
            return ! prevValue;
        });
    };

    return ( 
        <>
            <DarkModeContext.Provider value={{darkMode, darModeHandler}}>
                {children}
            </DarkModeContext.Provider>
        </>
     );
}
 
export default DarkModeProvider;