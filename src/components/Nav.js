import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <div>
            <header>B2Y - Production Managment System</header>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/current-project'}>Current Project</Link></li>
                    <li><Link to={'/project-history'}>Project History</Link></li>
                </ul>
            </nav>
        </div>
    );
}