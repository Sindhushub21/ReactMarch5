FROM node:latest
WORKDIR /app/server
ENV PATH /app/server/node_modules/.bin$PATH
COPY package*.json .
RUN npm install -g npm@7.6.3 && npm i
COPY . .
EXPOSE 5000
CMD ["npm","start"]