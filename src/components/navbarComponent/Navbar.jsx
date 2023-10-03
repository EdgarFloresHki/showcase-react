import React,{useState} from "react";
// ROUTING
import { Link } from "react-router-dom";
//MENU DATA
import {NavMenu} from './NavMenuData';

function Navbar(){
    return (
        <React.Fragment>
            <nav>
                {NavMenu.map((item,index) =>{
                    return(
                        <li key={index}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </nav>
        </React.Fragment>

    );
}

export default Navbar;