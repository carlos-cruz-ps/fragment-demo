FROM mhart/alpine-node:8.9.1

WORKDIR /app

COPY package.json ./package.json

RUN yarn

CMD [ "yarn", "start" ]