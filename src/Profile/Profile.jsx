import { Navigate, NavLink } from "react-router-dom"
import useAuth from '../Hooks/UseAuth';
import './Profile.css';
import { useRef, useState } from "react";
import TwitterLogo from '../img/twitter-logo.svg';
import HomeLogo from '../img/home outline.svg';
import ProfileLogo from '../img/profile outline.svg';
import ExploreLogo from '../img/explore.svg';
import NotificationLogo from '../img/notification.svg';
import MoreLogo from '../img/more.svg';
import ListsLogo from '../img/lists.svg';
import BookmarksLogo from '../img/Vector12.svg';
import MessagesLogo from '../img/messages.svg';
import Profilepicture from '../img/Profile';
import Tyomniy from '../img/Vector.svg';
import Ustoz from "../img/ustoz.jpg";
import Muhammad from "../img/Muhammad aka.jpg";
import Zohidbek from "../img/Zohidbek aka.jpg";
import Xojiakbar from "../img/Xojiakbar aka.jpg";
import Baxtiyor from "../img/Baxtyor aka.jpg";
import ImageLogo from '../img/image.svg';
import GifLogo from '../img/gif.svg';
import ScheduleLogo from '../img/schedule.svg';
import SmileLogo from '../img/smile.svg';
import StatusLogo from '../img/stats.svg';
import useUser from "../Hooks/UseUser";
import commentLogo from '../img/comment.svg';
import retweetLogo from '../img/retweet.svg';
import shareLogo from '../img/share.svg';
import likeLogo from '../img/like.svg';
import statisticsLogo from '../img/statistics.svg';
import likeFillogo from '../img/like fill.svg';
import shashlik from '../img/image 8.png';
import searchicon from '../img/search.svg';
import settingsicons from '../img/settings.svg';
import locationIcon from '../img/Frame.svg';
import CopyIcon from '../img/Frame (1).svg';
import BirthdayIcon from '../img/Frame (2).svg';
import JoinderIcon from '../img/Frame (3).svg';
import TwitterWallpaper from '../img/twitterwallpaper.jpg';


function Profile() {
    // let [token, setToken] = useAuth()
    let tyomniy = useRef()
    let tyomniy__mini = useRef()
    let header = useRef()
    let tweet__btn = useRef()
    let [obj] = useUser()
    let text = useRef()
    let title = useRef()
    let xojibtn = useRef()
    let muhammadbtn = useRef()

    let countcomment = 122;
    let value = 122;
    let counter = useRef()
    let counter1 = useRef()
    let counter2 = useRef()

    let data = JSON.parse(obj)


    return (
        <>
            <div ref={tyomniy} className="home__mini-container">
            <div ref={tyomniy__mini} className="tyomniy">
                <header ref={header} className="home__header">
            <img className="header__logo" src={TwitterLogo} alt="img" />
            <ul className="header__list">
                <li className="header__item">
                <NavLink className="header__navlink" to="/Home">
                <img className="header__link--img" src={HomeLogo} alt="img" />
                Home</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Profile">
                <img className="header__link--img" src={ExploreLogo} alt="img" />
                Explore</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Profile">
                <img className="header__link--img" src={NotificationLogo} alt="img" />
                Notifications</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Home">
                <img className="header__link--img" src={MessagesLogo} alt="img" />
                Messages</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Home">
                <img className="header__link--img" src={BookmarksLogo} alt="img" />
                Bookmarks</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Profile">
                <img className="header__link--img" src={ListsLogo} alt="img" />
                Lists</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Profile">
                <img className="header__link--img" src={ProfileLogo} alt="img" />
                Profile</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Home">
                <img className="header__link--img" src={MoreLogo} alt="img" />
                More</NavLink>
                </li>
            </ul>
            <NavLink className="header__btn" to="/Home">
                Tweet
            </NavLink>
            <NavLink className="Profile__navlink" to="/Profile">
                <img className="Profile__link--img" src={Profilepicture} alt="img" />
                <span className="header__link--span">
                <h2 className="Profile__link-title">{data.username}</h2>
                <a className="Profile__link--link" href="#">{data.email}</a>
                </span>
                <img className="Profile__link--logo" src={MoreLogo} alt="img" />
            </NavLink>
        </header>
        <main className="main">
            <div className="main__container">
        <div className="main__header">
        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
        <NavLink className="profile__icon fa-solid fa-arrow-left" to="/Home"/>
                <h2 className="main__header--title">Home</h2>
                <p ref={text} className="main__header--text">18 Following</p>
            <img className="main__header--img" src={Tyomniy} alt="img"  onClick={() => {
                tyomniy.current.classList.toggle('toggle')
                tyomniy__mini.current.classList.toggle('toggle__mini')
                header.current.classList.toggle('border')
            }}/>
        </div>
        <div className="main__next--profile">
        <div className="img__div">
            <i className="img__div--icon fa-solid fa-leaf"/>
             <h2 className="img__div--title">{data.username}</h2>
            </div>
            <span className="main__next--span">
            <img className="main__next--img-profile" src={Profilepicture} alt="img"/>
            </span>
            <h2 className="main__next--title">{data.username}</h2>
            <p className="main__next--text">{data.email}</p>
            <h3 className="main__next--more">{data.username} is a web programmer</h3>
            <ul className="main__next--list--profile">
                <li className="main__next--item--profile">
                    <img className="main__next--icon" src={locationIcon} alt="img" />
                    <p  className="main__next--item-text">Toshkent</p>
                </li>
                <li className="main__next--item--profile">
                    <img className="main__next--icon" src={CopyIcon} alt="img" />
                    <p  className="main__next--item-text">{data.email}</p>
                </li>
                <li className="main__next--item--profile">
                    <img className="main__next--icon" src={BirthdayIcon} alt="img" />
                    <p className="main__next--item-text">May 2009</p>
                </li>
                <li className="main__next--item--profile">
                    <img className="main__next--icon" src={JoinderIcon} alt="img" />
                    <p className="main__next--item-text">Joined November 2021</p>
                </li>
            </ul>
            <NavLink to="/SingUp" className="tweet__btn--profile" ref={tweet__btn}>Edit Profile</NavLink>
            <div className="span__div">
            <span className="tweet__span--profile"><h3 className="tweet__title--profile" ref={title}>18 Following</h3></span>
            <span className="tweet__span--profile"><h3 className="tweet__title--profile">1.7k Followers</h3></span>
            </div>
            <ul className="tweet__list">
                <li className="tweet__item">
                    <h2 className="tweet__title">Tweets</h2>
                </li>
                <li className="tweet__item">
                    <h2 className="tweet__title">Tweets & replies</h2>
                </li>
                <li className="tweet__item">
                    <h2 className="tweet__title">Media</h2>
                </li>
                <li className="tweet__item">
                    <h2 className="tweet__title">Likes</h2>
                </li>
            </ul>
        </div>
        <div className="main__next2">
            <span className="main__next2--span">
            <img className="main__next2--img" src={Profilepicture} alt="img" />
            <h2 className="main__next2--title">{data.username}</h2>
            </span>
            <p className="main__next2--text">assolomu alekum font awesomedan iconni qanaq qilib ulidi</p>
           <ul className="main__next2--list">
               <li className="main__next2--item">
               <img className="main__next2--icon" src={commentLogo} alt="img" />
               <p className="main__next2--count">14</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={retweetLogo} alt="img" />
               <p className="main__next2--count">6</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={likeLogo} alt="img" onClick={(e) => {
                   e.target.classList.toggle('focus')
                   if(e.target.classList.contains('focus')){
                    e.target.src = likeFillogo
                   counter.current.textContent = '123'
                   }else {
                    e.target.src = likeLogo
                    counter.current.textContent = '122'
                   }
               }}/>
               <p ref={counter} className="main__next2--count">122</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={shareLogo} alt="img" />
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={statisticsLogo} alt="img" />
               </li>
           </ul>
        </div>
        <div className="main__next2">
            <span className="main__next2--span">
            <img className="main__next2--img" src={Profilepicture} alt="img" />
            <h2 className="main__next2--title">{data.username}</h2>
            </span>
            <p className="main__next2--text">siladayam 100% bosa yonchasiga scroll tushib qovottimi</p>
           <ul className="main__next2--list">
               <li className="main__next2--item">
               <img className="main__next2--icon" src={commentLogo} alt="img" />
               <p className="main__next2--count">8</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={retweetLogo} alt="img" />
               <p className="main__next2--count">6</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={likeLogo} alt="img" onClick={(e) => {
                   e.target.classList.toggle('focus')
                   if(e.target.classList.contains('focus')){
                    e.target.src = likeFillogo
                    counter1.current.textContent = '3'
                   }else {
                    e.target.src = likeLogo
                    counter1.current.textContent = '2'
                   }
               }}/>
               <p ref={counter1} className="main__next2--count">2</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={shareLogo} alt="img" />
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={statisticsLogo} alt="img" />
               </li>
           </ul>
        </div>
        <div className="main__next3">
            <span className="main__next2--span">
            <img className="main__next2--img" src={Profilepicture} alt="img" />
            <h2 className="main__next2--title">{data.username}</h2>
            </span>
            <p className="main__next2--text">Twitter <br /> Wallpaper</p>
            <img className="main__next2--abed" src={TwitterWallpaper} alt="img" />
           <ul className="main__next2--list">
               <li className="main__next2--item">
               <img className="main__next2--icon" src={commentLogo} alt="img" />
               <p className="main__next2--count">8</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={retweetLogo} alt="img" />
               <p className="main__next2--count">6</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={likeLogo} alt="img" onClick={(e) => {
                   e.target.classList.toggle('focus')
                   if(e.target.classList.contains('focus')){
                    e.target.src = likeFillogo
                    counter2.current.textContent = '43'
                   }else {
                    e.target.src = likeLogo
                    counter2.current.textContent = '42'
                   }
               }}/>
               <p ref={counter2} className="main__next2--count">42</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={shareLogo} alt="img" />
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={statisticsLogo} alt="img" />
               </li>
           </ul>
        </div>
            </div>
        </main>
        <footer className="footer">
        <span className="footer__span">
            <img className="footer__icon" src={searchicon} alt="img" />
        <input className="footer__input" type="text" placeholder="Search Twitter"/>
        </span>
        <div className="footer__wrapper">
            <span className="footer__wrapper--span">
            <h2 className="footer__wrapper--title">
            Trends for you
            </h2>
            <img className="footer__wrapper--icon" src={settingsicons} alt="" />
            </span>
            <div className="footer__list--div">
            <ul className="footer__wrapper--list">
                <li className="footer__wrapper--item">
                    <p className="footer__wrapper--list-text">Trending in Uzbekistan</p>
                    <h2 className="footer__wrapper--list-title">Revolution</h2>
                    <p className="footer__wrapper--text">2.3k Tweets</p>
                </li>
                <li className="footer__wrapper--item">
                    <p className="footer__wrapper--list-text">Trending in Russian</p>
                    <h2 className="footer__wrapper--list-title">Revolution</h2>
                    <p className="footer__wrapper--text">8.3m Tweets</p>
                </li>
                <li className="footer__wrapper--item">
                    <p className="footer__wrapper--list-text">Trending in America</p>
                    <h2 className="footer__wrapper--list-title">Revolution</h2>
                    <p className="footer__wrapper--text">14.6m Tweets</p>
                </li>
            </ul>
            <ul className="footer__wrapper--list-more">
                <li className="footer__wrapper--item-more">
                    <img className="footer__wrapper--item-icon" src={MoreLogo} alt="img" />
                </li>
                <li className="footer__wrapper--item-more">
                    <img className="footer__wrapper--item-icon" src={MoreLogo} alt="img" />
                </li>
                <li className="footer__wrapper--item-more">
                    <img className="footer__wrapper--item-icon" src={MoreLogo} alt="img" />
                </li>
            </ul>
            </div>
            <NavLink className="footer__wrapper--Navlink" to="/Profile">Show more</NavLink>
        </div>
        <div className="footer__dropped">
            <h2 className="footer__dropped--title">You might like</h2>
            <ul className="footer__dropped--list">
                <li className="footer__dropped--item">
                   <span className="footer__dropped--span">
                   <img className="footer__dropped--img" src={Xojiakbar} alt="img" />
                    <h2 className="footer__dropped--item-title">XojiAkbar</h2>
                   </span>
                    <p className="footer__dropped--text">@sultonov_017</p>
                    <button ref={xojibtn} className="footer__dropped--btn" onClick={(e) => {
                    e.target.classList.toggle('follow')
                    if(e.target.classList.contains('follow') && muhammadbtn.current.classList.contains('follow')){
                        e.target.textContent = 'Unfollow'
                        muhammadbtn.current.textContent = 'Unfollow'
                        text.current.textContent = '20 Following'
                        title.current.textContent = '20 Following'
                    }else if(e.target.classList.contains('follow') && !muhammadbtn.current.classList.contains('follow')){
                        text.current.textContent = '19 Following'
                        title.current.textContent = '19 Following'
                        muhammadbtn.current.textContent = 'Follow';
                        e.target.textContent = 'Unfollow';
                    }else if(!e.target.classList.contains('follow') && muhammadbtn.current.classList.contains('follow')){
                        text.current.textContent = '19 Following'
                        title.current.textContent = '19 Following'
                        muhammadbtn.current.textContent = 'Unfollow';
                        e.target.textContent = 'Follow';
                    }else {
                        e.target.textContent = 'Follow'
                        text.current.textContent = '18 Following'
                        e.target.textContent = 'Follow';
                        title.current.textContent = '18 Following'
                    }
                    }}>Follow</button>
                </li>
                <li className="footer__dropped--item">
                   <span className="footer__dropped--span">
                   <img className="footer__dropped--img" src={Muhammad} alt="img" />
                    <h2 className="footer__dropped--item-title">Muhammad</h2>
                   </span>
                    <p className="footer__dropped--text">@muhammadmka</p>
                    <button ref={muhammadbtn} className="footer__dropped--btn" onClick={(e) => {
                    e.target.classList.toggle('follow')
                    if(e.target.classList.contains('follow') && xojibtn.current.classList.contains('follow')){
                        xojibtn.current.textContent = 'Unfollow'
                        e.target.textContent = 'Unfollow'
                        text.current.textContent = '20 Following'
                        title.current.textContent = '20 Following'
                    }else if(e.target.classList.contains('follow') && !xojibtn.current.classList.contains('follow')){
                        text.current.textContent = '19 Following'
                        title.current.textContent = '19 Following'
                        xojibtn.current.textContent = 'Follow';
                        e.target.textContent = 'Unfollow';
                    }else if(!e.target.classList.contains('follow') && xojibtn.current.classList.contains('follow')){
                        xojibtn.current.textContent = 'UnFollow';
                        e.target.textContent = 'Follow';
                        text.current.textContent = '19 Following'
                        title.current.textContent = '19 Following'
                    }else {
                        xojibtn.current.textContent = 'Follow';
                        e.target.textContent = 'Follow';
                        text.current.textContent = '18 Following'
                        title.current.textContent = '18 Following'
                    }
                    }}>Follow</button>
                </li>
            </ul>
            <NavLink className="footer__wrapper--Navlink" to="/Profile">Show more</NavLink>
        </div>
        <ul className="footer__list">
            <li className="footer__item">
                <a className="footer__link" href="#">Terms of Service</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="#">Privacy Policy</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="#">Cookie Policy</a>
            </li>
        </ul>
        <ul className="footer__list">
            <li className="footer__item">
                <a className="footer__link" href="#">Imprint</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="#">Ads Info</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="#">© 2021 Twitter, Inc.</a>
            </li>
        </ul>
        </footer>
            </div>
            </div>
            </>
    )
}

export default Profile