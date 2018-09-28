FROM node:8.12-alpine
ENV API_HOST todo-server-container
ENV API_PORT 3000
RUN mkdir /todo-app
WORKDIR /todo-app
COPY package.json .
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start"]
