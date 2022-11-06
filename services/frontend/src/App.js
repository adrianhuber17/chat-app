import "./App.css";
import Messages from "./components/Messages";
import TextField from "./components/TextField";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [messages, setMessages] = useState([]);
  // const [socketInstance, setSocketInstance] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_SERVICE_URL}/messages`)
      .then((response) => response.json())
      .then((responseData) => {
        setMessages(responseData);
      });
  }, []);
  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_WEBSOCKET_SERVICE_URL}`, {
      transports: ["websocket"],
      cors: {
        origin: "http://localhost:3000/",
        withCredentials: true,
      },
    });
    // setSocketInstance(socket);

    socket.on("connect", (data) => {
      console.log("connected");
      console.log("socket - connected users:", data);
    });
  }, []);
  return (
    <div className="App">
      {messages.length !== 0 ? (
        <Messages messages={messages} />
      ) : (
        <p>No Messages</p>
      )}
      <TextField messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
