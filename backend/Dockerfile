FROM node:17-alpine
WORKDIR /usr/app
COPY package.json ./
RUN yarn install
COPY . .
EXPOSE 3333
CMD ["yarn", "dev"]


# FROM node:17-alpine AS builder
# WORKDIR /app
# COPY . .
# RUN yarn install --frozen-lockfile
# RUN yarn build

# FROM node:17-alpine AS deps
# WORKDIR /app
# COPY . .
# RUN yarn install --production=true

# FROM node:17-alpine
# WORKDIR /app
# COPY --from=builder /app/dist ./dist
# COPY --from=deps /app/node_modules ./node_modules
# COPY package.json ./package.json

# ENTRYPOINT [ "node", "dist/server.js" ]