FROM node:16

WORKDIR /src

#Install app dependencies
COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 8888
CMD ["npm run start"]