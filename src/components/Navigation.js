import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <>
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about" state={{fromNavigation:true}}>About</Link>
        </div>
        <Outlet />
        </>
    );
}

export default Navigation;