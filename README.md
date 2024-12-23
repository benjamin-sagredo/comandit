# comandit
Repositorio para el proyecto de piinfo

# Instalar ambiente virtual de python
python3 -m venv .analytic-textil-back

# Activar ambiente virtual
source analytic-textil-back/bin/activate

# Instalar todo dentro del entorno
pip install "fastapi[standard]"
pip install tensorflow[and-cuda]
pip install Pillow

# Cómo probar solo el backend
FastAPI viene con una URL para ir probando los endpoints: localhost:8000/docs
Desde ahí se ven los endpoints disponibles y las acciones que se pueden hacer

Dentro de src/ deben existir dos carpetas, IA/ e imgs/ pero esta última hice que se creara
automaticamente si no existe. Dentro de la carpeta IA/ va todo lo que subió el max al drive.

Dentro del archivo validador.py se debe agregar al MODEL_PATH la carpeta IA/, quedando de la
siguiente forma: MODEL_PATH = "IA/modelo_poliester.h5"
Si no funciona revisen desde donde se está ejecutando el validador.py que puede ser distinto
en Mac o Windows