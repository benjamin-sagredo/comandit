'use client'
import { Header } from "@/app/_components/header/page";
import styles from './page.module.css'
import { SubirFoto } from "@/app/_components/subirFoto/page";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function analisis(){
    const [foto, setFoto] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (foto) {
            console.log("Imagen seleccionada:", foto);
        }
    };

    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.subirImagen}>
                <SubirFoto setFoto={setFoto}/>
            </div>
            <div className={styles.containerBoton}>
                <Link href="/pages/resultados" className={styles.botonAnalizar}>Analizar</Link>
            </div>
        </div>
        
        </>
    );
}