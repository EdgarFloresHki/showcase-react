import React,{useState} from "react";
import hklogo from './hklogo.png';
// ROUTING
import { Link } from "react-router-dom";
//MENU DATA
import {NavMenu} from './NavMenuData';
import {NavLinks} from "./NavLinksData";

//CSS


function Navbar(){
    const [navbar, setNavbar]       = useState(true);
    const [isDropdown, setDropdown] = useState(false);

    const showNavbar    = () => setNavbar(!navbar);
    const showDropDown = () => setDropdown(!isDropdown);

    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="sidebar" data-color="gray" data-background-color="black">

                    <div className="logo d-flex flex-column align-items-center text-uppercase">
                        <p className="app-txt">Product Showcase</p>
                        <img className="img-fluid w-75" src={hklogo} alt="hki_logo"/>
                    </div>

                    <div className="sidebar-wrapper">
                        <ul className="nav">

                            {NavMenu.map((item,index) =>{
                                return(
                                    <li key={index} className="nav-item">
                                        <Link className="nav-link" to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}



                        </ul>

                        <ul className="nav links-section">
                            <li className="nav-item">
                                <Link className={isDropdown ? "nav-link" : "nav-link collapsed"} onClick={showDropDown} >
                                    <p>Links<b className="caret"></b></p>
                                </Link>

                                <div className={isDropdown ? "collapse show" : "collapse hiden"}>
                                    <ul className="nav">
                                        {NavLinks.map((item,index) =>{
                                            return(
                                                <li key={index} className="nav-item">
                                                    <Link target="_blank" className="nav-link" to={item.link}>
                                                        <span>{item.title}</span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Navbar;