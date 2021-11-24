import {Outlet, Navigate, useLocation} from 'react-router-dom'
import useAuth from '../Hooks/UseAuth';
import useUser from '../Hooks/UseUser';

function Public(){

    let [token] = useAuth()

    const {pathname} = useLocation()

    if(token === 'bor' && pathname === '/Login'){
        return <Navigate to="/Home"/>
    }
    if(token == 'otish mumkin' && pathname == '/'){
        return <Navigate to="/Login"/>
    }
    return <Outlet/>
    
}

export default Public;