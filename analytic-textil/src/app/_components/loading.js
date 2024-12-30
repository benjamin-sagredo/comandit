import React, { useEffect, useState } from 'react';
import styles from './loading.module.css';
import Image from 'next/image';

export default function Loading ({ onFinish }) {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (onFinish) {
            setTimeout(() => {
                setFade(true)
                setTimeout(onFinish, 2000)
            }, 3000)
        }
    }, [onFinish]);
    
    
    return (
    <div className={`${styles.loadingWrapper} ${fade ? styles.fadeOut : ''}`}>
        <Image 
            className={styles.logo}
            src={'/analytictextil.png'}
            width={500}
            height={200}
            alt={'Logo'}        
        />
        <div className={styles.spinner}></div>
        <p>Cargando...</p>
    </div>
    );
};
