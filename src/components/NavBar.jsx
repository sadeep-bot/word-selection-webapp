import { useLocation, useNavigate } from "react-router-dom";


import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";


const NavBar = () => {
    const location = useLocation();
    const nav = useNavigate();

    const buttonText = location.pathname === "/" ? <IoSettingsOutline size={25} /> :<IoHomeOutline size={25} />;

    const handleOnClick = () => {
        if (location.pathname === "/") {
        nav("/settings");
        } else {
        nav("/"); 
        }
    }

    return(
        <nav className="navbar">
            <button onClick={handleOnClick}>{buttonText}</button>
        </nav>
    )
}

export default NavBar;