// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

export default function Messages({ messages }) {
  // const [socketInstance, setSocketInstance] = useState("");

  // useEffect(() => {
  //   const socket = io(`${process.env.REACT_APP_WEBSOCKET_SERVICE_URL}`, {
  //     transports: ["websocket"],
  //     cors: {
  //       origin: "http://localhost:3000/",
  //       withCredentials: true,
  //     },
  //   });
  //   setSocketInstance(socket);

  //   socket.on("connect", (data) => {
  //     console.log("connected");
  //   });
  // }, [load]);

  return (
    <>
      {messages.map((message) => (
        <li className="list-message" id={message.id} key={message.id}>
          <b className="message">Message: {message.text}</b>
          <b>Date: {message.date}</b>
        </li>
      ))}
    </>
  );
}
