'use client'
import { Header } from "@/app/_components/header/page";
import styles from './page.module.css'
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/app/_components/loading";
import { LoadingDivResultados } from "@/app/_components/loadingDivResultados/page";
import Link from "next/link";


export default function resultados(){
    const [filename, setFilename] = useState()
    const [foto, setFoto] = useState()
    const [analisis, setAnalisis] = useState(null)
    const [loading, setLoading] = useState(true);
    const urlNombreArchivo = 'http://localhost:8000/nombre/'
    const urlFoto = 'http://localhost:8000/foto/'
    const urlAnalisis = 'http://localhost:8000/analizar-foto/'

    const handleFinishLoading = () => {
        setLoading(false)
    }

    async function analiza() {
        try {
            const req = await fetch(urlAnalisis, {
                'Accept': 'application/json'
            })
            if(!req.ok){
                throw new Error('Error no puede ser')
            }
            const resp = await req.json()
            setAnalisis(resp)
            console.log(resp)
        } catch (error) {
            console.error(error)
        }
    }

    async function getFile() {
        try {
            const req = await fetch(urlNombreArchivo)
            if(!req.ok) {
                throw new Error('Error en la request')
            }
            const data = await req.json()
            console.log(data)
            setFilename(data["Imagen"])
        } catch (error) {
            console.error('ERROR:', error)
        }            
    }

    async function fetchFoto() {
        try {
            const req = await fetch(urlFoto+filename)
            if(!req.ok) {
                throw new Error('Error en el fetch de la imagen al backend')
            }

            const blob = await req.blob()
            const url = URL.createObjectURL(blob)
            setFoto(url)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFile()
        fetchFoto()
        analiza()

    }, [filename])

    if(loading){
        return <Loading onFinish={handleFinishLoading}/>
    }

    return (
        <>
        <Header />
        <div className={styles.container1}>
            <div className={styles.foto}> 
                <h2>Última imagen subida</h2>
                {foto && (
                    <Image src={foto} width={500} height={400} alt="Imagen analizada" className={styles.preview}/>
                )}
            </div>
            <div className={styles.container2}>
                <div className={styles.composicion}>
                    {!analisis
                    ?
                        <LoadingDivResultados />
                    : (
                        <div className={styles.resultados}>
                            <p>{analisis[0]}</p>
                            <p>{analisis[1]}</p>
                        </div>
                    )
                    }
                </div>
                <div className={styles.consejos}>
                    <p className={styles.cabecera}>Consejos de uso</p>
                    <ul className={styles.listado}>
                        <li><b>Lavar con agua fría o tibia:</b> El poliéster es sensible al calor, por lo que es mejor lavarlo con agua fría o tibia para evitar que se deforme o encoja.</li>
                        <li><b>Secar al aire o a baja temperatura: </b>Es preferible secar la tela de poliéster al aire. Si usas secadora, selecciona una temperatura baja para evitar dañar las fibras.</li>
                        <li><b>Planchar a baja temperatura: </b>El poliéster puede derretirse con calor excesivo, así que si necesitas plancharlo, usa una temperatura baja y, si es necesario, coloca un paño protector entre la plancha y la tela.</li>
                    </ul>
                </div>                
            </div>
 
        </div>
        <Link href={'/pages/analisis'} className={styles.botonVolver}>Analizar otra imagen</Link>      
        </>
    );
}