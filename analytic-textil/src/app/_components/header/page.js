import styles from './page.module.css'
import Image from 'next/image';
import logoComandit from '../../../../public/comandit.png'

export function Header() {
    return (
        <>
        <div className={styles.containerHeader}>
            <Image
                className={styles.logo}
                src={logoComandit}
                width={200}
                height={180}
                alt='Logo de comandit'
            />
            <ul className={styles.ul_style}>
                <li>Home</li>
                <li>Sobre nosotros</li>
                <li>Planes</li>
                <li>Contáctanos</li>
            </ul>
        </div>
        </>
    );
}