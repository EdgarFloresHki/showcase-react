import React,{useState} from "react";
import hklogo from './hklogo.png'
// ROUTING
import { Link } from "react-router-dom";
//MENU DATA
import {NavMenu} from './NavMenuData';

//CSS
import './Navbar.css';


function Navbar(){
    const [navbar, setNavbar] = useState(true);

    const showNavbar = () => setNavbar(!navbar);
    return (
        <React.Fragment>
            <nav className={navbar ? "nav-menu active" : "nav-menu"}>
                <li><img src="{hklogo}" alt=""/></li>
                <ul className="nav-menu-items">
                    {NavMenu.map((item,index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </React.Fragment>

    );
}

export default Navbar;