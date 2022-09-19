# syntax=docker/dockerfile:1

FROM node:16
ENV NODE_EVN=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "index.js" ]
EXPOSE 3000
