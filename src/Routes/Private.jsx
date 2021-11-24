import {Outlet, Navigate, useLocation, NavLink} from 'react-router-dom'
import useAuth from '../Hooks/UseAuth';
import PrivateImg from '../img/private.jfif'
import './Private.css'
import useUser from '../Hooks/UseUser';


function Private(){
    
    let [token] = useAuth()
    let [user] = useUser()
    let {pathname} = useLocation()
 
    if(token == 'bor'){
        return <Outlet/> 
    }
    if(token == 'otish mumkin'){
        return (
            <div className="private__div">
                <img className="private__img" src={PrivateImg} alt="img" />
                <div className="link__div">
                <NavLink className="private__btn" to="/SingUp">
                    Sing Up
                </NavLink>
                </div>
            </div>
        )
    }
    if(token == 'bor' && pathname == '/Login'){
        return <Navigate to="/Home"/>
    }else if(token == '' && pathname == '/Home'){
      return (
          <div className="private__div">
              <img className="private__img" src={PrivateImg} alt="img" />
              <div className="link__div">
              <NavLink className="private__btn" to="/SingUp">
                  Sing Up
              </NavLink>
              </div>
          </div>
      )
    }
    return <Navigate to="/SingUp"/>

}

export default Private;