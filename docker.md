# Docker

## Development: Node JS
Para correr con `Dockerfile.dev`. Borrar contenedor si previamente existe:
```bash
docker rm -f firma_wa_dev
```
Compilar imagen:
```bash
docker build -t firma_wa_dev . -f Dockerfile.dev
```
Arrancar contenedor
```bash
mkdir build
docker run -dit \
    --name firma_wa_dev \
    -v $(pwd)/src:/usr/src/app/src \
    -v $(pwd)/public:/usr/src/app/public \
    -v $(pwd)/build:/usr/src/app/build \
    -p 3000:3000 \
    firma_wa_dev
```
Revisar logs del contenedor
```bash
docker logs --tail 1000 -f firma_wa_dev 
```
Conectarse a la shell del contenedor
```bash
docker exec -it firma_wa_dev /bin/bash
```

## Production: Nginx
```bash
docker rm -f firma_wa
docker run -dit --name firma_wa -v $(pwd)/build:/usr/share/nginx/html -p 80:80 nginx
docker exec -it firma_wa /bin/bash
```