FROM node:17-alpine AS builder
WORKDIR /app 
COPY . .
RUN yarn 
EXPOSE 3000
ENTRYPOINT ["yarn", "start"]