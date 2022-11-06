export default function Messages({ messages }) {
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
