# Especifica la imatge base
FROM ubuntu:22.04

# Executa comandes per a instal·lar dependències i actualitzar el sistema
RUN apt-get update 
RUN apt-get install -y \
    git 


# Definir variables d'entorn per a la imatge
# IMPORTANT! per a paraules clau o certificats millor usar eines com Vault
ENV PORT 8080
ENV IP_ADDRESS=192.168.0.100

CMD ["python", "app.py", "--port=$PORT"]


# Descarrega el codi font de l'aplicació a la imatge amb una URL
ADD https://example.com/myfile.tar.gz /app/

# Còpia el codi font de l'aplicació a la imatge des del host
COPY . /app

# Clona el codi font de l'aplicació a la imatge des del repositori Git
RUN git clone https://github.com/username/repo.git /tmp/repo

