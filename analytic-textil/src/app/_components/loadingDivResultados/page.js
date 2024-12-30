import React from "react";
import styles from './page.module.css'

export function LoadingDivResultados(){
    return (
        <div className={styles.loadingWrapper}>
            <div className={styles.loader}></div>
        </div>
        );
}