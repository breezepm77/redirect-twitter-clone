import { NavLink } from 'react-router-dom';
import NotFoundImg from '../img/404.jpg';
import './NotFound.css';

function NotFound() {
    return (
        <>
        <div className="overflowcontainer">
        <div className="img__container">
        <div className="paddingcontainer">
        <div className="Navlink__container">
       <div className="navlink-div2">
       <NavLink className="Singuppage" to="/Home">Home</NavLink>
       </div>
       <div className="navlink-div3">
       <NavLink className="Singuppage" to="/">SingUp</NavLink>
       </div>
        </div>
        </div>
        <div className="img__mini--container">
            <img className="imgnotfound" src={NotFoundImg} alt="img"/>
        </div>
        </div>
        </div>
        </>
    )
}
export default NotFound