FROM node:latest

# Estableix el directori de treball a /app
WORKDIR /app

# Copia els fitxers de l'API a la imatge
COPY api /app

# Instal·la les dependències de l'API
RUN npm install

# Exposa el port 3000 per a l'API
EXPOSE 3000

# Especifica la comanda que s'executarà en iniciar el contenidor
CMD ["npm", "start"]

