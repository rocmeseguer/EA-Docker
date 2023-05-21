FROM nginx:latest

# Copia els fitxers de configuració de l'aplicació web
COPY webapp.conf /etc/nginx/conf.d/

# Copia el contingut de l'aplicació web a la carpeta arrel
COPY webapp /usr/share/nginx/html/

# Especifica la comanda que s'executarà en iniciar el contenidor
CMD ["nginx", "-g", "daemon off;"]

