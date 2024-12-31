import {Header} from './_components/header/page'
import styles from './page.module.css'
import fondo1 from '../../../../public/2324.jpg'

export default function About(){
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
            </div>
        
        </>
    );    
}