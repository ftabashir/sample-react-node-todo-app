FROM node:8.12-alpine
ENV DB_HOST todo-mongo-container
RUN mkdir /todo-app
WORKDIR /todo-app
ADD . ./
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
