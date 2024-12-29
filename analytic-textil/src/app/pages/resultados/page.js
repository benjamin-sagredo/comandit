'use client'
import { Header } from "@/app/_components/header/page";
import styles from './page.module.css'
import { useEffect, useState } from "react";
import Image from "next/image";


export default function resultados(){
    const [filename, setFilename] = useState()
    const [foto, setFoto] = useState()
    const [analisis, setAnalisis] = useState()
    const urlNombreArchivo = 'http://localhost:8000/nombre/'
    const urlFoto = 'http://localhost:8000/foto/'
    const urlAnalisis = 'http://localhost:8000/analizar-foto/'

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

    return (
        <>
        <Header />
        <div className={styles.container1}>
            <div className={styles.foto}>
            {foto && (
                <Image src={foto} width={400} height={400} alt="Imagen analizada"/>
            )}
            </div>
            <div className={styles.container2}>
                <div className={styles.composicion}>
                    {analisis && (
                        <div>
                            {analisis[0]}
                            <br></br>
                            {analisis[1]}
                        </div>
                    )}
                </div>
                <div className={styles.consejos}>
                    CONSEJOS DE USO
                </div>                
            </div>

        </div>
        </>
    );
}