import "./App.css";
import Messages from "./components/Messages";
import TextField from "./components/TextField";
import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_SERVICE_URL}/messages`)
      .then((response) => response.json())
      .then((responseData) => {
        setMessages(responseData);
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
