FROM jerasin/base-angular-nest:1.0 AS runtime-stage
WORKDIR /app
COPY . .
EXPOSE ${WEB_PORT}
CMD [ "yarn" , "start:web" , "--host=0.0.0.0" ]