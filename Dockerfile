FROM nginx
RUN mkdir /etc/nginx/certificate
COPY nginx/certificate/ssl-certificate.* /etc/nginx/certificate/
COPY nginx/default-ssl.conf /etc/nginx/conf.d/default-ssl.conf