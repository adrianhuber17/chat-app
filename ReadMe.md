# Chat App -> a real time chat application

This repo was created to help users Dockerize an application that utilizes HTTP and WebSocket communication protocols.

The app is a simple chat application that is built using React (front-end), Flask REST (back-end), Flask WebSocket (back-end), and PostgreSQL (db).

The chat app GETs all historical messages on the rendering of the page, POSTs new messages to the database when a user submits the message and also updates the messages posted in real-time for all the users to see.

# Tech Stack 📚

**Client:** JavaScript, ReactJS, socket.io

**Server:** Python, Flask, Flask-RESTX, gunicorn, SQLAlchemy, flask-socketio

**Database:** PostgreSQL

**Other:** Docker

# Configuring the repo for the first time and running the application

## Docker

To be able to run this project you will need Docker Desktop installed on your computer. Docker installation instructions: `https://www.docker.com/products/docker-desktop/`

The instructions below will allow you to run this project on your local computer using **docker-compose**

1. Run the following command in the terminal to download a copy of the repo to your local machine

```bash
  git clone https://github.com/adrianhuber17/chat-app.git
```

- Navigate into the new sub-folder created called **chat-app**.

2. After the project repo is downloaded navigate into the project directory

```bash
  cd chat-app
```

3. Manually open Docker desktop or run the command below to open Docker

```bash
 open -a Docker
```

4. Once the Docker desktop is runnning, type the command below to create and start the container in detached mode and build the image

```bash
  docker-compose up -d --build
```

At this point the container with the app should be running in your local computer

Services are running on **Port 3000** (front-end React), **Port 5001** (back-end REST), **Port 5004** (back-end WebSocket). Please make sure you have no other app running on these ports

5. Run the following command to create and reset the Messages table in the database

```bash
docker-compose exec backend python manage.py reset_db
```

Open a browser to the local host **http://localhost:3000/** and start enjoying the app

# Demo

![](/ReadMe_images/demo.gif)

## Endpoints

### /messages

The **/messages** endopint can take a GET and a POST as shown below. POST will save the message into the database ans GET will fetch all messages in the database

```bash
curl --header "Content-Type: application/json" \
--request POST \
--data '{"text":"Second message!"}' \
http://127.0.0.1:5004/messages
```

![](/ReadMe_images/post_message.png)

```bash
curl "http://127.0.0.1:5004/messages"
```

![](/ReadMe_images/get_message.png)

### /ping

There is also a second endpoint to test a simple response and confirm that the app is running

```bash
curl  http://127.0.0.1:5004/ping
```

![](/ReadMe_images/curl_ping.png)
