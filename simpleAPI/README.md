# Simple TypeScript API with Docker and MongoDB

Esta API REST desarrollada con TypeScript y containerizada con Docker utiliza MongoDB para contar hits.

## Arquitectura

En el contexto del proyecto completo:
- Se ejecuta en la red interna `backend-network`
- No expone puertos al exterior directamente
- Es accesible a través del proxy inverso en `/api/*`
- Se comunica con MongoDB en la misma red interna

## Prerrequisitos

- Docker instalado en el sistema
- Git (opcional, solo si quieres clonar el repositorio)

## Construcción de la imagen

Para construir la imagen Docker, ejecuta el siguiente comando desde el directorio del proyecto:

```bash
docker build -t simple-api .
```

## Ejecución del contenedor

Para ejecutar el contenedor, utiliza:

```bash
docker run -p 3000:3000 simple-api
```

## Acceder a la API

Una vez que el contenedor esté en ejecución, puedes acceder a la API en:
- http://localhost:3000/counter

Esta ruta devolverá un contador incremental que registra el número de veces que se ha accedido a la ruta.

## Variables de entorno

La aplicación utiliza las siguientes variables de entorno:

- `PORT`: Puerto donde se ejecuta la API
  - Valor por defecto: 3000
  - Ejemplo: `PORT=8000`

- `MONGO_URL`: URL de conexión a MongoDB
  - Valor por defecto: 'mongodb://mongo:27017/hitcounter'
  - Formato: 'mongodb://[username:password@]host[:port]/database'
  - Ejemplo: `MONGO_URL=mongodb://user:pass@localhost:27017/mydb`

### Configuración en desarrollo local

```bash
# Usando valores personalizados
PORT=8000 MONGO_URL=mongodb://localhost:27017/mydb npm start

# Usando valores por defecto
npm start
```

### Configuración en Docker Compose

```yaml
# Como parte del stack completo
version: '3.8'
services:
  api:
    build: .
    expose:
      - "3000"
    environment:
      - MONGO_URL=mongodb://mongo:27017/hitcounter
    networks:
      - backend-network
```

## Endpoints

- `/counter`: Incrementa y devuelve el contador de hits
  - Accesible a través del proxy como `/api/counter`
