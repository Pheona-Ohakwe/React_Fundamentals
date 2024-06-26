import React from 'react';
import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.overlay}>
                <h1>Kayla Ard</h1>
            </div>
        </header>
    );
}

export default Header;