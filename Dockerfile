# Stage 0, "build-stage", based on Node.js, to build and compile the frontend to a distribution directory that will copy its contents into the nginx html folder
FROM node:14.15.5 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
ARG configuration=production
RUN npm run build -- --outputPath=./dist/out --configuration $configuration

#Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx
COPY --from=build /app/dist/out/ /usr/share/nginx/html
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
