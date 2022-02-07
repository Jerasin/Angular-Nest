FROM jerasin/base-angular-nest:1.0 AS runtime-stage
WORKDIR /app
COPY . .
EXPOSE ${API_PORT}
CMD [ "yarn" , "start:api" ]
