FROM node:14

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ ./

RUN npm run build

FROM nginx:stable-alpine

COPY --from=0 /app/build /usr/share/nginx/html
COPY nginx-boogiedk_me.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]