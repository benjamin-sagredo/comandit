'use client'
import { Header } from "@/app/_components/header/page";
import styles from './page.module.css'
import { SubirFoto } from "@/app/_components/subirFoto/page";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function analisis(){
    const router = useRouter()
    const [foto, setFoto] = useState(null)
    const url = 'http://localhost:8000/subir-archivo/'

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (foto) {
            console.log("Imagen seleccionada:", foto);
            const formData = new FormData()
            formData.append('file', foto)
            try {
                const req = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                    },
                    body: formData,
                })
            const resp = await req.json()
            console.log('Respuesta del backend:', resp)
            }catch(err) {
                console.error(err)
            }
        }
        router.push('/pages/resultados')
    };

    return (
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.subirImagen}>
                <SubirFoto setFoto={setFoto}/>
            </div>
            <div className={styles.containerBotonAnalisis}>
                <button onClick={handleSubmit} className={styles.botonBoton}>
                    Analizar
                </button>
                
            </div>
        </div>
        
        </>
    );
}