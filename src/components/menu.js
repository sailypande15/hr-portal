import React from "react";
import { Link } from "react-router-dom";
import '../styles/menu.css'
import { useSelector} from "react-redux";


function Menu(){
    return(
       

            <nav className="navbar navbar-expand-lg navbar-dark menu" style={{paddingLeft:"20px"}}>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Employees</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Departments</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Apply Now</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={"/"}>About</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link" to={"/"}>Contact</Link>
                    </li>
                </ul> 
                            
                
            </div>
            </nav>
    )
}

export default Menu;