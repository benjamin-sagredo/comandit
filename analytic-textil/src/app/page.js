import {Header} from './_components/header/page'
import styles from './page.module.css'
import Image from 'next/image';
import fondo1 from '../../public/2324.jpg'
import Link from 'next/link';


export default function landingPage( {children }) {
    return (
        <>
        <div>
            <Header />
        </div>
        <div className={styles.imgdiv}>
            <Image
                className={styles.img}
                src={fondo1}
                width={1200}
                height={450}
                alt="Imagen del landing page"
            />
            <h1 className={styles.textoimg}>Líderes en reconocimiento de fibras textiles</h1>
        </div>

        <div className={styles.containerBoton}>
            <div className={styles.boton}>
                <Link href="/pages/analisis">Haz aquí tu análisis</Link>
            </div>
        </div>
        
        <div>
            <div className={styles.quienes}>
                <h1>QUIENES SOMOS</h1>
                <br></br>
                <p>COMANDIT es una empresa desarrolladora de solcuiones tecnologicas y de software innovadoras y personalizadas que potencien el crecimiento y la eficiencia de empresas de todos los tamaños y sectores</p>
            </div>
        </div>
        </>
    );
}