import { NavLink } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <>
        <div className="overflowcontainer">
        <div className="img__container">
        <div className="paddingcontainer">
        <div className="Navlink__container">
       <div className="navlink-div2">
       <NavLink className="Singuppage" to="/">BACK TO HOME</NavLink>
       </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default NotFound