import { createContext, useState } from "react";

export const fireebaseContext = createContext(null)

export const Authcontext= createContext(null)

export default function Context ({children}){
    const [user,setUserid]=useState(null)
    return(
        <Authcontext.Provider value={{user,setUserid}}>
            {children}
        </Authcontext.Provider>
    )
 } 