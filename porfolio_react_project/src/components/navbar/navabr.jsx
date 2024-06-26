import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
    return (
        <nav id="navbar" className={styles.navbar}>
        <a href="#gallery">Gallery</a>
        </nav>
    );
}

export default Navbar;