import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import chatIcon from "../img/icons/chat.svg";
import bellIcon from "../img/icons/bell.svg";

interface HeaderProps {
  user: {
    name: string,
    surname: string
  };
}

export default function Header({ user }: HeaderProps) {
  const navigate = useNavigate()
  return (
    <header className="header">
      <h2 className="header-title">Привіт!👋 
      <span className="header-span">{user.name} {user.surname}</span>
      </h2> 
      <div className="header-actions">
        <button className="header-btn" onClick={() => navigate("/chat")}>
          <img src={chatIcon} alt="Чат" className="header-icon"/>
        </button>
        <button className="header-btn">
          <img src={bellIcon} alt="Уведомления" className="header-icon"/>
        </button>
      </div>
    </header>
  );
}
