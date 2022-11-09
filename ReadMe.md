# Chat App -> a real time chat application

Add information here....

# Tech Stack 📚

**Client:** ReactJS, JavaScript, socket.io

**Server:** Python, Flask, Flask-RESTx, SQLAlchemy, PostgreSQL, flask-socketio

**Database:** PostgreSQL

**Other:** Docker

## Configuring the repo for the first time and running application

### Docker

To be able to run this project you will need Docker Desktop installed on your computer. Docker installation instructions: `https://www.docker.com/products/docker-desktop/`

The instructions below will allow you to run this project on your local computer using **docker-compose**

1. Run the following command in the terminal to download a copy of the repo to your local machine

```bash
  git clone https://github.com/adrianhuber17/chat-app.git
```

- Navigate into the new sub-folder created called **chat-app**.
- Run the following commands to create an environment and install the dependencies:

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

Open a browser to the local host **http://localhost:3000/** and start enjoying the app.
