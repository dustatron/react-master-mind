FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install yarn
RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]
