# Certificado SSL
SSL predecesor de TLS es una forma segura den transportar tráfico web

# Autofirmar certificado
```bash
mkdir certificate
cd certificate
openssl req -new -newkey rsa:4096 -x509 -sha256 \
    -days 365 -nodes \
    -out ssl-certificate.crt \
    -keyout ssl-certificate.key
```
