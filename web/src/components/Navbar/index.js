import React from 'react'
import './styles.css'

function Navbar(props){
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
            <span className="title-card">The Newspaper</span>
                { props.children }
            </ul>
        </nav>
    );
}

export default Navbar;