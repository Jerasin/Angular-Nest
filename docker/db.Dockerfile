FROM mysql:8
COPY ./mysql/conf.d/ /etc/mysql/conf.d/

EXPOSE 3306