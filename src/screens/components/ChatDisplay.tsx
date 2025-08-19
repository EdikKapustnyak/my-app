import { useState, useEffect } from "react";
import "../styles/ChatDisplay.css";
import botAvatar from "../img/chat-robot.png";
import arrowNext from "../img/icons/arrow.svg"

type Message = {
  sender: "user" | "bot";
  text: string;
};

const responses: Record<string, string> = {
  buy: "Звісно! З радістю допоможу\nРадий вітати тебе серед кураторів! До сплати 390грн\nМоно: 5375 4115 9012 5097",
  admin: "Ожидайте пару минут ⏳",
};

export default function ChatDisplay() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([{ sender: "bot", text: "Чим я можу тобі допомогти?" }]);
  }, []);

  const handleUserChoice = (choice: "buy" | "admin") => {
    const userMessage: Message = {
      sender: "user",
      text:
        choice === "buy"
          ? "Хочу купити код доступу"
          : "Мені потрібен адмін",
    };
    const botMessage: Message = {
      sender: "bot",
      text: responses[choice],
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  return (
    <div className="app">
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message-row ${msg.sender}`}
            >
              {msg.sender === "bot" && (
                <div className="avatar-container">
                  <img className="avatar" src={botAvatar} alt="Bot" />
                </div>
              )}
              <div>
                <div className={`message ${msg.sender}`}>
                  {msg.sender === "bot" && (
                  <p className="sender-name">Чат БОТ</p>
                  )}  
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="buttons">
          <button onClick={() => handleUserChoice("buy")} className="buy-btn">
            Хочу купити код доступу
            <img src={arrowNext} alt="Дальше" />
          </button>
          <button onClick={() => handleUserChoice("admin")} className="admin-btn">
            Мені потрібен адмін
            <img src={arrowNext} alt="Дальше" color="rgba(29, 85, 136, 1)"/>
          </button>
        </div>
      </div>
    </div>
  );
}
