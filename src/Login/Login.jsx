import {NavLink} from "react-router-dom";
import { useRef } from "react";
import TwitterLogo from '../img/twitter-logo.svg';
import useAuth from '../Hooks/UseAuth';
import useUser from '../Hooks/UseUser';
import './Login.css';
import { Navigate } from "react-router";

function SingUp() {
    let inputtel = useRef()
    let tellink = useRef()
    let emaillink = useRef()

    let [token, setToken] = useAuth()
    let [user, setUser] = useUser()
    return (
        <>
        <div className="containerlogin">
        <form
            className="formlogin"
            onSubmit={(e) => {
            e.preventDefault();
            setToken('bor')

            if(inputtel.current.value < 8 && emaillink.current.value < 10) {
                setToken('')
                emaillink.current.style.border = '1px solid red';
                emaillink.current.setAttribute('placeholder', 'your email should not be smaller than 10')
                inputtel.current.style.border = '1px solid red';
                inputtel.current.setAttribute('placeholder', 'your password should not be smaller than 3')
            }else if(inputtel.current.value < 8){
                setToken('')
                inputtel.current.style.border = '1px solid red';
                inputtel.current.setAttribute('placeholder', 'your password should not be smaller than 3')
            }else if(emaillink.current.value < 10){
                setToken('')
                emaillink.current.style.border = '1px solid red';
                emaillink.current.setAttribute('placeholder', 'your email should not be smaller than 10')
            }else{
                setToken('bor')
                let obj = {
                    username: inputtel.current.value,
                    email: emaillink.current.value
                }
                setUser(JSON.stringify(obj))
            }

        // return <Navigate to="/Login"/>

        }}>
        <img className="form__logologin" src={TwitterLogo} alt="img" />
        <h1 className="form__titlelogin">Login to twitter</h1>
        <input ref={inputtel} className="form__inputnamelogin" type="text" placeholder="Name and Username"/>
        <input ref={emaillink} placeholder="email address" className="form__inputtellogin" type="email" pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"/>
        <div className="form__divbtn">
        {/* <NavLink type="submit" className="form__btnlogin" to="/Login">Log In</NavLink> */}
        <button type="submit" className="form__btnlogin">Login</button>
        </div>
        <NavLink className="form__password" to="/">Forgot Password?</NavLink>
        <NavLink className="form__singin" to="/">Sign up to Twitter</NavLink>
        </form>
        </div>
        </>
    )
}
export default SingUp;