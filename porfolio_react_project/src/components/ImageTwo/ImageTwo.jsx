import React from 'react';
import styles from './ImageTwo.module.css';

function ImageTwo() {
    return (
        <div className={styles.imageContainer}>
            <img src="/bash.jpg" alt="Image Two" className={styles.image} />
        </div>
    );
}

export default ImageTwo;