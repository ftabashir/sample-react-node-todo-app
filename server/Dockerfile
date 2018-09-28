FROM node:8.12-alpine
ENV DB_HOST todo-mongo-container
RUN mkdir /todo-app
WORKDIR /todo-app
COPY package.json .
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
