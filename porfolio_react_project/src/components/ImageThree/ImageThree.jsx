import React from 'react';
import styles from './ImageThree.module.css';

function ImageThree() {
    return (
        <div className={styles.imageContainer}>
            <img src="/pic3.JPEG" alt="Image Three" className={styles.image} />
        </div>
    );
}

export default ImageThree;