'use client'

import Form from 'next/form'
import { useState } from 'react'
import styles from './page.module.css'
import { redirect } from 'next/navigation'
import Image from 'next/image'
 
export function SubirFoto({setFoto}) {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          handleFile(file);
        }
    };


    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation();
        const foto = e.dataTransfer.files[0]
        if(foto) {
            handleFile(foto)
        }
    }

    const handleFile = (f) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
            setFile(f);
        };
        reader.readAsDataURL(f);
        setFoto(f)
    }

    return (
    <>
    <div className={styles.container}>
        {!file && (
            <div
                className={styles.container2}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                >
                <h1>Arrastra una imagen para analizarla o usa el boton de abajo</h1>
                <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    hidden
                    id='file-input'
                />
                <label htmlFor="file-input" className={styles.boton}>
                    Seleccionar archivo
                </label>
            </div>
            
        )}
        {preview && (
            <div className={styles.container}>
                <h1>Imagen a analizar</h1>
                <img src={preview} alt="Vista previa" className={styles.preview} />
                <button onClick={() => {setFile(null); setPreview(null)}}>Cancelar</button>
            </div>
        )}
    </div>    
    </>
    )
}