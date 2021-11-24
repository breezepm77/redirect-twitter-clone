import { createContext, useState, useEffect } from "react";

let Context = createContext()

function Provider({children}){
    let [user, setUser] = useState(window.localStorage.getItem('user') || null)

    useEffect(() =>{
        if(user) {
            window.localStorage.setItem('user', user)
        }else {
            window.localStorage.removeItem('user')
        }
    }, [user])
    return(<>
        <Context.Provider value={{user, setUser}}>{children}</Context.Provider>
    </>)
}

export {Provider, Context}