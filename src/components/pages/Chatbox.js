import React, { useState} from "react";
import "./Chatbox.css";


const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const addMessage = (name, text) => {
    const newMessage = { name, message: text };
    setMessages((prevMessages) => [newMessage, ...prevMessages]);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      addMessage("User", message); // Add user message

      fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: JSON.stringify({ message }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((r) => {
          addMessage("Mavis", r.answer);  // Add chatbot message
        })
        .catch((error) => {
          console.error("Error:", error);
          addMessage(
            "Mavis",
            "Sorry, I am having trouble responding at the moment. \nTry again later :("
          );
        });

      setMessage(""); // Clear the input after sending
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="container">
      <div className="chatbox">
        <div className={`chatbox__support ${isOpen ? "chatbox--active" : ""}`}>
          <div className="chatbox__header">
            {/* Header content */}
            <div class="chatbox__image--header">
              <img
                src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                alt="bot-icon"
              />
            </div>
            <div class="chatbox__content--header">
              <h4 class="chatbox__heading--header">Chat support</h4>
              <p class="chatbox__description--header">
                Hi. My name is Mavis. What do you want to know about Christian?
              </p>
            </div>
          </div>
          <div className="chatbox__messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`messages__item ${
                  msg.name === "Mavis"
                    ? "messages__item--visitor"
                    : "messages__item--operator"
                }`}
              >
                {msg.message}
              </div>
            ))}
            
          </div>

          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyUp={handleEnterKey}
            />
            <button
              className="chatbox__send--footer send__button"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
        <div className="chatbox__button" onClick={toggleChatbox}>
          <img src="/images/chatbox-icon.svg" alt="chat-button" />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
