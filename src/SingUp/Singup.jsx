import {Routes, Route, NavLink, useLocation, Navigate, Outlet} from "react-router-dom";
import { useRef } from "react";
import TwitterLogo from '../img/twitter-logo.svg';
import './Singup.css';
import useAuth from '../Hooks/UseAuth'


function SingUp() {
    let inputtel = useRef()
    let tellink = useRef()
    let emaillink = useRef()
    let btn = useRef()
    let inputname = useRef()
    let selectyear = useRef()
    let selectday = useRef()
    let selectmonth = useRef()

    let {pathname} = useLocation()
    
    let [token, setToken] = useAuth()
    
    if(token == 'bor' && pathname === '/SingUp'){
        setToken('otish mumkin')
    }


    return (
        <>
        <div className="container">
        <form className="form" onSubmit={(e) => {
            e.preventDefault()
            if(inputname.current.value < 8 && inputtel.current.value < 10){
                setToken('otish mumkin emas')
                inputtel.current.style.border = '1px solid red'
                inputname.current.style.border = '1px solid red'
                inputtel.current.setAttribute('placeholder', 'your tel should not be smaller than 10')
                inputname.current.setAttribute('placeholder', 'your password should not be smaller than 8')
            }else if(inputname.current.value < 8) {
                inputname.current.style.border = '1px solid red'
                inputname.current.setAttribute('placeholder', 'your password should not be smaller than 8')
            }else if(inputtel.current.value < 10) {
                inputtel.current.style.border = '1px solid red'
                inputtel.current.setAttribute('placeholder', 'your tel should not be smaller than 10')
            }else if(selectyear.current.value == 'year' && selectday.current.value == 'day' && selectmonth.current.value == 'month') {
                selectyear.current.style.border = '1px solid red';
                selectday.current.style.border = '1px solid red';
                selectmonth.current.style.border = '1px solid red';
            }else if(selectyear.current.value == 'year') {
                selectyear.current.style.border = '1px solid red';
            }else if(selectday.current.value == 'day') {
                selectday.current.style.border = '1px solid red';
            }else if(selectmonth.current.value == 'month') {
                selectmonth.current.style.border = '1px solid red';
            }else{
                setToken('otish mumkin')
            }
        }}>
        <img className="form__logo" src={TwitterLogo} alt="img" />
        <h1 className="form__title">Create an account</h1>
        <input ref={inputtel} placeholder="Phone Number" className="form__inputtel" type="tel" pattern="^(?:\d{10,12}|\+\d{10,12}|\w+@\w+\.\w{2,4})$"/>
        <NavLink ref={emaillink} className="form__link2" to="/SingUp" onClick={(e) => {
            inputtel.current.setAttribute('placeholder', 'E-mail')
            inputtel.current.setAttribute('type', 'email')
            inputtel.current.setAttribute('pattern', '^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$')
            e.target.style.display = 'none';
            tellink.current.style.display = 'block';
        }}>Use email</NavLink>
        <NavLink ref={tellink} className="form__tellink2" to="/SingUp" onClick={(e) => {
            inputtel.current.setAttribute('placeholder', 'Phone Number')
            inputtel.current.setAttribute('type', 'tel')
            inputtel.current.setAttribute('pattern', '^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$')
            e.target.style.display = 'none';
            emaillink.current.style.display = 'block';
        }}>Use Tel</NavLink>
        <input ref={inputname} className="form__inputname" type="password" placeholder="Password"/>
        <h2 className="form__titlen2">Date of birth</h2>
        <p className="form__text">Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante <br /> phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id <br /> ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.</p>
        <select ref={selectmonth} className="form__select">
        <option className="form__option" selected disabled value="month">Month</option>
            <option className="form__option" value="yanvar">Yanvar</option>
            <option className="form__option" value="fevral">Fevral</option>
            <option className="form__option" value="mart">Mart</option>
            <option className="form__option" value="aprel">Aprel</option>
            <option className="form__option" value="may">May</option>
            <option className="form__option" value="iyun">Iyun</option>
            <option className="form__option" value="iyul">Iyul</option>
            <option className="form__option" value="avgust">Avgust</option>
            <option className="form__option" value="sentyabr">Sentyabr</option>
            <option className="form__option" value="oktyabr">Oktyabr</option>
            <option className="form__option" value="nayabr">Nayabr</option>
            <option className="form__option" value="dekabr">Dekabr</option>
        </select>
        <select ref={selectday} className="form__selectday">
        <option className="form__option" selected disabled value="day">Day</option>
            <option className="form__option" value="2">2</option>
            <option className="form__option" value="4">4</option>
            <option className="form__option" value="6">6</option>
            <option className="form__option" value="8">8</option>
            <option className="form__option" value="10">10</option>
            <option className="form__option" value="12">12</option>
            <option className="form__option" value="14">14</option>
            <option className="form__option" value="16">16</option>
            <option className="form__option" value="18">18</option>
            <option className="form__option" value="20">20</option>
            <option className="form__option" value="22">22</option>
            <option className="form__option" value="24">24</option>
            <option className="form__option" value="26">26</option>
            <option className="form__option" value="28">28</option>
            <option className="form__option" value="30">30</option>
        </select>
        <select ref={selectyear} className="form__selectyear">
        <option className="form__option" selected disabled value="year">Year</option>
            <option className="form__option" value="1981">1981</option>
            <option className="form__option" value="1983">1983</option>
            <option className="form__option" value="1985">1985</option>
            <option className="form__option" value="1987">1987</option>
            <option className="form__option" value="1989">1989</option>
            <option className="form__option" value="1991">1991</option>
            <option className="form__option" value="1993">1993</option>
            <option className="form__option" value="1995">1995</option>
            <option className="form__option" value="1997">1997</option>
            <option className="form__option" value="1999">1999</option>
            <option className="form__option" value="2001">2001</option>
            <option className="form__option" value="2003">2003</option>
            <option className="form__option" value="2005">2005</option>
            <option className="form__option" value="2007">2007</option>
            <option className="form__option" value="2009">2009</option>
        </select>
        <div className="form__divbtn">
        <button ref={btn} className="form__btn">Next</button>
        </div>
        </form>
        </div>
        </>
    )
}
export default SingUp;