import { useState, useEffect} from "react";
import "../styles/Chat.css"

type Message = {
    sender: "user" | "bot";
    text: string;
  };
  
  const responses: Record<string, string> = {
    buy: "Звісно! З радістю допоможу\nРадий вітати тебе серед кураторів! До сплати 390грн\nМоно: 5375 4115 9012 5097",
    admin: "Ожидайте пару минут ⏳",
  };
export default function Chat () { 
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
      // при заходе сразу сообщение от бота
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
                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
                >
                {msg.text}
            </div>
            ))}
        </div>

        <div className="buttons">
          <button onClick={() => handleUserChoice("buy")}>
            Хочу купити код доступу
          </button>
          <button onClick={() => handleUserChoice("admin")}>
            Мені потрібен адмін
          </button>
        </div>
      </div>
    </div>
      );
    };
