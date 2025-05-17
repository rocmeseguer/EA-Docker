# Nginx Proxy Inverso

Proxy inverso que gestiona el acceso a los servicios de la aplicación.

## Arquitectura

- Único servicio expuesto al exterior (puerto 80)
- Conectado a ambas redes Docker:
  - `frontend-network`: Red pública
  - `backend-network`: Red interna para servicios

## Configuración

El proxy:
- Redirige `/` al servicio frontend
- Redirige `/api/*` al servicio API
- Maneja headers para proxy inverso
- Gestiona CORS y seguridad básica

## Uso en Docker Compose

```yaml
services:
  proxy:
    build: ./proxy
    ports:
      - "80:80"
    networks:
      - frontend-network
      - backend-network
```

## Acceso a los Servicios

- Frontend: http://IP/
- API: http://IP/api/
