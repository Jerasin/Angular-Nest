FROM jerasin/base-angular-nest:1.0 AS runtime-stage
WORKDIR /app
COPY . .
EXPOSE ${API_PORT}
CMD [ "sh","-c","./docker/build-scripts/wait-for/wait-for mysql:3306 -- yarn start:api" ]
