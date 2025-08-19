import { useNavigate } from "react-router-dom"
import arrowIcon from "../img/icons/arrow.svg"
import bellIcon from "../img/icons/bell.svg"
import "../styles/ChatHeader.css"
export default function ChatHeader() { 
    const navigate = useNavigate()
    return (
        <div className="header-conteiner">
            <button className="chat-btn arrow" onClick={() => navigate("/")}><img className="chat-icon" src={arrowIcon} alt="стрелка" /></button>
            <h1 className="chat-txt">ЧатБОТ</h1>
            <button className="chat-btn"><img className="chat-icon" src={bellIcon} alt="Уведомления" /></button>
        </div>
    )
}