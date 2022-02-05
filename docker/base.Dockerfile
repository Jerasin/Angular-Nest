FROM node:14-alpine AS base-stage
WORKDIR /app
COPY package.json \
     yarn.lock \
     decorate-angular-cli.js \
     angular.json \
     ./

RUN apk add --no-cache --virtual .gyp \
    python3 \
    make \
    g++ \
    && yarn --frozen-lcokfile --network-timeout 600000 \
    && yarn cache clean \
    && apk del .gyp;