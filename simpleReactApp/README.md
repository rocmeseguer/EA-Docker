# Simple React App with Docker

Frontend en React que muestra un contador de hits consumiendo una API REST.

## Arquitectura

En el contexto del proyecto completo:
- Se ejecuta en la red interna `backend-network`
- No expone puertos al exterior directamente
- Es servido a través del proxy inverso Nginx
- Se comunica con la API a través de rutas relativas `/api/*`

## Variables de entorno

La aplicación utiliza las siguientes variables de entorno:
- `REACT_APP_API_URL`: URL base de la API
  - Desarrollo local: http://localhost:3000
  - Producción: http://IP/api (ruta relativa a través del proxy)

### Configuración en Docker Compose

```yaml
# Como parte del stack completo
services:
  frontend:
    build: ./simpleReactApp
    expose:
      - "80"
    networks:
      - backend-network
```

Nota: La aplicación se sirve a través del proxy inverso en http://localhost
