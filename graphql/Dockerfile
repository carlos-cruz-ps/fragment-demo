FROM mhart/alpine-node:8.9.1

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn global add nodemon
RUN yarn

COPY . .

CMD ["npm", "start"]