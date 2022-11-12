# Chat App: a real time chat application

![](/ReadMe_images/logo.jpg)

This repo was created to help users Dockerize Flask + React + PostgreSQL application that uses HTTP and WebSocket communication protocols.

The app is a simple chat application that is built using React (front-end), Flask REST (back-end), Flask WebSocket (back-end), and PostgreSQL (db).

The chat app gets all historical messages on the rendering of the page, posts new messages to the database when a user submits the message and also updates the messages posted in real-time for all the users to see without re-rendering the page. (see demo below)

# Tech Stack 📚

**Client:** JavaScript, ReactJS, socket.io

**Server:** Python, Flask, Flask-RESTX, gunicorn, SQLAlchemy, flask-socketio

**Database:** PostgreSQL

**Other:** Docker

# Folder Structure

![](/ReadMe_images/Blank%20diagram.jpeg)

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

5. Run the following command to create and reset the Messages table in the database.

- This command can be used any time you want to delete and reset all the data in the database

```bash
docker-compose exec backend python manage.py reset_db
```

Open a browser to the local host **http://localhost:3000/** and start enjoying the app

# Demo

The browser on the left is Google Chrome and the Browser on the right is Firefox. The demo below displays a chat communication between two users using WebSocket communication. Notice that when a message is sent by one user, the other user receives the message without having to re-render the component or the page. Also the mssages being sent are saved to the database, so when the page is re-loaded or opened on a new tab all the historical messages are fetched on the rendering of the page.

![](/ReadMe_images/demo.gif)

## Endpoints

### /messages

The **/messages** endopint can take a GET and a POST as shown below. POST will save the message to the database and GET will fetch all messages from the database

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
