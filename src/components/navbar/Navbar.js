import React from 'react'
import { Link , NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        
        <Link to="/" className="navbar-brand">useContext</Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/user" className="nav-item nav-link"> Usuario </NavLink>
                    <NavLink exact activeClassName="active" to="/employee" className="nav-item nav-link"> Empleado</NavLink>
                  
                </div>
            </div>
        
        <h1 className="text-center">home</h1>
    </nav>
    )
}
