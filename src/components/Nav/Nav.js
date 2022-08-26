import React from "react";
import "../../index.css";
import { Link } from 'react-router-dom';


function Nav() {
    return (
    <nav>
        <h1>Daniel Stefani</h1>
        <div>
            <Link to='/about'>
            <button>About Me</button>
            </Link>
            <Link to='/work'>
            <button>Work</button>
            </Link>
            <Link to='/contact'>
            <button>Contact</button>
            </Link>
            <button>Resume</button>
        </div>
    </nav>
    );
}
export default Nav;