from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from pathlib import Path
from fastapi.middleware.cors import CORSMiddleware
import subprocess, re

dir_imagenes = Path("imgs/")
data_imagen = {
    "nombre": None
}

class Img(BaseModel):
    nombre: str | None = None


app = FastAPI()
origins = [
    "http://localhost",
    "https://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"mensaje": "Hola pianola"}


@app.get("/analizar-foto/")
async def analizar():
    output = subprocess.run(["python3", "IA/validador.py", dir_imagenes/data_imagen["nombre"]], capture_output=True, encoding='utf-8')
    texto_limpio = re.sub(r'\u001b\[[0-9;]*[mK]', '', output.stdout) # Saca los caracteres ANSI que venian del output de la terminal
    resultado = re.search(r"Resultado:\s*(.*?)\s*\(Confianza: (\d+\.\d+%)\)", texto_limpio) # Esta busca los resultados del análisis entre el texto
    if resultado:
        material = resultado.group(1)
        confianza = resultado.group(2) 
        return{f"Resultado: {material}", f"Confianza: {confianza}"}
    else:
        return {"No se pudo"}



@app.post("/subir-archivo/")
async def subir_archivo(file: UploadFile):
    contenido = await file.read()
    if not dir_imagenes.exists():
        dir_imagenes.mkdir(parents=True, exist_ok=True)

    f = open(dir_imagenes/file.filename, 'wb')
    f.write(contenido)
    f.close()
    Img.nombre = file.filename
    data_imagen["nombre"] = file.filename
    return {"Archivo guardado como": file.filename, "tipo": file.content_type}


@app.post("/test-post/")
async def test_post(item: Img):
    item_dict = item.dict()
    if item.nombre == 5:
        print('cinco')
    return item


@app.get("/nombre/")
async def nombre_imagen():
    if data_imagen["nombre"] is not None:
        return {"Imagen": Img.nombre}
    else:
        return {"No hay un nombre definido aún"}