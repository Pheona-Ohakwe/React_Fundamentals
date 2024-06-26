import React from 'react';
import styles from './ImageOne.module.css';

function ImageOne() {
    return (
        <div className={styles.imageContainer}>
            <h2>Gallery</h2>
            <img src="/pic1.JPG" alt="Image One" className={styles.image} />
        </div>
    );
}

export default ImageOne;