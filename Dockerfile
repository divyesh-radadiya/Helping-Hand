FROM node:14
COPY ./package.json ./
COPY ./package-lock.json ./
COPY . ./
WORKDIR ./
CMD [ "npm" , "start" ]