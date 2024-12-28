'use client'

import Form from 'next/form'
import { useState, useRef} from 'react'
import styles from './page.module.css'
import { redirect } from 'next/navigation'
 
export function SubirFoto() {
    const [files, setFiles] = useState(null)
    const inputRef = useRef()

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setFiles(e.dataTransfer.files[0])
    }

    const analizar = (e) => {
        redirect('/')
    }

    return (
    <>
    {!files && (
        <div
            className={styles.container}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            >
            <Form action={analizar}>
                <h1>Arrastra una imagen para analizarla o usa el boton de abajo</h1>
                <input
                    type='file'
                    //onChange={(e) => setFiles(e.target.files)}
                    hidden
                    ref={(inputRef)}
                />     
            </Form>
            <button className={styles.boton}>Seleccionar archivo</button>  
        </div>
    )}
    </>
    )
}