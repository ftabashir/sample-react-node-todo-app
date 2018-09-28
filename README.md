docker network create todo-network
docker build --no-cache --tag todo-mongo:1 db
docker run --name todo-mongo-container --net todo-network todo-mongo:1
docker build --no-cache --tag todo-server:1 server
docker run --name todo-server-container --net todo-network --publish 3000 todo-server:1
docker build --no-cache --tag todo-client:1 client
docker run --name todo-client-container --net todo-network --publish 3001 todo-client:1
