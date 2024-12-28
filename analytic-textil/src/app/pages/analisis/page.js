import { Header } from "@/app/_components/header/page";
import styles from './page.module.css'
import { SubirFoto } from "@/app/_components/subirFoto/page";

export default function analisis(){
    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.subirImagen}>
                <SubirFoto />
            </div>
        </div>
        
        </>
    );
}