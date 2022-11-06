import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_BACKEND_SERVICE_URL}/messages`)
    fetch(`http://localhost:5004/messages`)
      .then((response) => response.json())
      .then((responseData) => {
        setMessages(responseData);
        setLoad(true);
      });
  }, []);

  function handleClick() {
    const data = { text: message };
    fetch(`http://localhost:5004/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.status === "error") {
          console.log("error", responseData);
          return;
        }
        const updatedMessages = [...messages, responseData.message];
        setMessages(updatedMessages);
        setMessage("");
      });
  }

  function onTyping(event) {
    setMessage(event.target.value);
  }

  if (messages.length === 0) {
    return (
      <>
        {load && (
          <>
            <p>No Messages</p>
            <input
              type="text"
              id="message"
              values={message}
              onChange={onTyping}
            ></input>
            <button disabled={!message} onClick={handleClick}>
              Submit
            </button>
          </>
        )}
      </>
    );
  }

  return (
    <>
      {load &&
        messages.map((message) => (
          <li className="list-message" id={message.id} key={message.id}>
            <b className="message">Message: {message.text}</b>
            <b>Date: {message.date}</b>
          </li>
        ))}

      <input
        type="text"
        id="message"
        value={message}
        onChange={onTyping}
      ></input>
      <button disabled={!message} onClick={handleClick}>
        Submit
      </button>
    </>
  );
}
