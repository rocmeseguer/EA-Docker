FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src/

# Alternativas para instalar dependencias
# 1) npm install -- instala les dependències i actualitza package-lock.json
# 2) npm ci -- instal·la les dependències exactes de package-lock.json
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
