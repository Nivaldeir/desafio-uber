FROM node:alpine

WORKDIR /usr/app

COPY packege*.json ./

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["node", "dist/index.js"]