FROM nginx:1.21-alpine
RUN rm -f /etc/nginx/conf.d/*
COPY ./nginx /etc/nginx/conf.d/