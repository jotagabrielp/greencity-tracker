FROM node:18-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["yarn", "run", "start:dev"]
