FROM node:lts
WORKDIR /app
ADD . /app
RUN npm install
RUN npm start

EXPOSE 3000