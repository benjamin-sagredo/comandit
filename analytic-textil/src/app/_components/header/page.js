import styles from './page.module.css'
import Image from 'next/image';
import logoComandit from '../../../../public/comandit.png'
import Link from 'next/link';


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
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/">Sobre nosotros</Link>
                </li>
                <li>
                    <Link href="/">Planes</Link>
                </li>
                <li>
                    <Link href="/">Contactanos</Link>
                </li>
            </ul>
        </div>
        </>
    );
}