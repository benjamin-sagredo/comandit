import { Header } from "@/app/_components/header/page";
import styles from './page.module.css'


export default function resultados({foto}){
    
    return (
        <>
        <Header />
        <div className={styles.container1}>
            <div className={styles.foto}>
                Aqui iria la foto
            </div>
            <div className={styles.container2}>
                <div className={styles.composicion}>
                    COMPOSICION
                </div>
                <div className={styles.consejos}>
                    CONSEJOS DE USO
                </div>                
            </div>

        </div>
        </>
    );
}