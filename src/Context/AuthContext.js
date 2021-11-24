import { createContext, useState, useEffect } from "react";

let Context = createContext()

function Provider({children}){
    let [state, setState] = useState(window.localStorage.getItem('token') || '')

    useEffect(() =>{
        window.localStorage.setItem('token', state)
    }, [state])
    return(<>
        <Context.Provider value={{state, setState}}>{children}</Context.Provider>
    </>)
}

export {Provider, Context}