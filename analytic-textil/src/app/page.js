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
                <Link href="/pages/analisis" className={styles.botonAnalisis}>Haz aquí tu análisis</Link>
            </div>
        </div>
        
        <div className={styles.container}>
            <Image src={'/comandit.png'} width={600} height={500} alt='empresa' className={styles.fotoEmpresa}/>
            <div className={styles.quienes}>
                <h1>QUIENES SOMOS</h1>
                <br></br>
                <p>Compañía Analítica de Desarrollo Industrial Tecnológica (COMANDIT) es una empresa desarrolladora de soluciones tecnológicas y de software innovadoras y personalizadas que potencien el crecimiento y la eficiencia de empresas de todos los tamaños y sectores.</p>
                <br></br>
                <p>La empresa nace en base a la necesidad de soluciones tecnológicas que permitan apoyar a las diferentes industrias, enfocándose principalmente en brindar aplicaciones y sistemas que simplifiquen las labores de los trabajadores en distintas áreas.</p>
            </div>
        </div>
        </>
    );
}