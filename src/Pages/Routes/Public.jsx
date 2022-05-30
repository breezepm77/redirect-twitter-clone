import {Outlet, Navigate, useLocation} from 'react-router-dom'
import useAuth from '../../Hooks/UseAuth';

function Public(){

    let [token] = useAuth()

    const {pathname} = useLocation()

    if(token === 'otish mumkin' && pathname === '/'){
        return <Navigate to="/Home"/>
    }
    if(token == 'otish mumkin' && pathname == '/'){
        return <Navigate to="/Home"/>
    }
    return <Outlet/>
    
}

export default Public;