FROM node:16

#Create app directory
WORKDIR /src

#Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source
COPY . .

EXPOSE 8888
CMD [ "node" , "index.js"]