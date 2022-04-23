FROM node:14

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
COPY . .

WORKDIR ./
CMD [ "npm" , "start" ]