import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderNav.scss";
import { BsSuitHeartFill } from "react-icons/bs"
// import { BiGame } from "react-icons/bi";
import { IoIosClipboard } from "react-icons/io"

export default function HeaderNav() {
    const navigate = useNavigate();
    return (
        <header className="header-container">
                <nav className="header-nav">
                    <button className="invis-button" onClick={() => navigate("/dashboard")}>
                        <IoIosClipboard className="clipboard" alt="bookmark icon" />
                    </button>
                    <button className="invis-button" onClick={() => navigate("/")}>
                        <h1 className="main-title">PlayPals</h1>   
                    </button >
                    <button className="invis-button" onClick={() => navigate("/favorite-Activities")}>
                        <BsSuitHeartFill className="dude" alt="little dude icon" />      
                    </button>  
                </nav>
        </header>
    );
}