# Etapa de construcción
# Etapa de construcción
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Paso de depuración para verificar la existencia de la carpeta dist
RUN ls -la /app/dist

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist/transport-frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]