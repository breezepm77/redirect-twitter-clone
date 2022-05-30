import { useRef, useEffect, useState } from "react";
import TwitterLogo from '../../assets/img/dusyeri.png';
import './Singup.css';
import useAuth from '../../Hooks/UseAuth';
import logo from '../../assets/img/logo.png';
import { NavLink } from "react-router-dom";


function SingUp() {
    let inputtel = useRef()
    let btn = useRef()
    let inputname = useRef()
    let iconSlashRef = useRef()
    let iconRef = useRef()
    
    let [inputName, setInputName] = useState()
    let [inputTel, setInputTel] = useState()
    
    let [token, setToken] = useAuth()

    
        useEffect(() => {
            fetch('http://api.iwin.production.cmosteknoloji.com/api/Account/token', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: inputName,
                    password: inputTel
                })
            })
            .then(response => response.json())
            .then(data => {
                if(data.token) {
                    setToken('otish mumkin')
                }
            })
        }, [inputName, inputTel])

    return (
        <>
        <header className='header'>
          <div className="header-flex-section">
          <div className="header-right-section">
          <NavLink style={{textDecoration: 'none'}} to='/Home'>
          <img style={{width: '222px', marginTop: '-18px'}} src={logo} alt="img" />
          </NavLink>
          </div>
           <div className="header-left-section">
           <NavLink to="/ekle" className='header-logout'>Ekle</NavLink>
           <p className='header-logout' onClick={() => {
               setToken(false)
           }}>Log Out</p>
           </div>
          </div>
          </header>
        <div className="container">
       <div className="flex-section">
       <form className="login" onSubmit={(e) => {
            e.preventDefault()
            setInputName(inputtel.current.value)
            setInputTel(inputname.current.value)
        }}>
        <img className="form__logo" src={TwitterLogo} alt="img" />
        <h1 className="form__title">Login account</h1>
        <input ref={inputtel} placeholder="E-posta:" className="form__inputtel" type="tel" pattern="^(?:\d{10,12}|\+\d{10,12}|\w+@\w+\.\w{2,4})$"/>
        <span>
        <input ref={inputname} className="form__inputname" type="password" placeholder="Sifre:"/>
        <div style={{position: 'relative', width: '80%'}} className="eye-icon-section">
        <i ref={iconRef} class="eye-icon fa-regular fa-eye" onClick={(e) => {
                e.target.style.display = 'none';
                iconSlashRef.current.style.display = 'block';
                inputname.current.type = 'password';
        }}></i>
        </div>
        <div style={{position: 'relative', width: '80%'}} className="slash-eye-section">
        <i ref={iconSlashRef} class="slash-eye-icon fa-regular fa-eye-slash" onClick={(e) => {
            e.target.style.display = 'none';
            iconRef.current.style.display = 'block';
            inputname.current.type = 'text';
        }}></i>
        </div>
        </span>
        <div className="form__divbtn">
        <button ref={btn} className="form__btn">Giriş</button>
        </div>
        </form>
       </div>
        </div>
        </>
    )
}
export default SingUp;