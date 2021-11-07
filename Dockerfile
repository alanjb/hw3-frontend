#stage 1
FROM node:12.16.1-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#stage 2
FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/hw3-frontend/ /usr/share/nginx/html
