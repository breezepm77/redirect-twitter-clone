import {Outlet, Navigate, useLocation, NavLink} from 'react-router-dom'
import useAuth from '../../Hooks/UseAuth';
import './Private.css'


function Private(){
    
    let [token] = useAuth()
    let {pathname} = useLocation()
 
    if(token == 'otish mumkin'){
        return <Outlet/> 
    }
    if(token == 'otish mumkin'){
        return <Navigate to="/Home"/>
    }
    if(token == 'otish mumkin' && pathname == '/'){
        return <Navigate to="/Home"/>
    }else if(token == '' && pathname == '/Home'){
      return <Navigate to='/'/>
    }else if(token == '' && pathname == '/More'){
        return <Navigate to='/'/>
      }else if(token == '' && pathname == '/Ekle'){
        return <Navigate to='/'/>
      }
    return <Navigate to="/SingUp"/>

}

export default Private;