FROM node:23-alpine AS frontend-build
WORKDIR /app/frontend
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run buildCSS
RUN npm run build

FROM node:23-alpine as backend
WORKDIR /app
COPY server/package*.json ./
RUN npm ci --only=production
COPY server ./

COPY --from=frontend-build /app/frontend/dist /dist
EXPOSE 9999
CMD ["node", "server.js"]
