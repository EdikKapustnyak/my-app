import { useState } from "react";
import "../styles/ProfileInfo.css";

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!isLoggedIn) {
    return (
      <div className="auth-container">
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          Увійти
        </button>
        <button className="register-btn">Реєстрація</button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Профіль</h1>
      </header>

      <div className="profile-info">
        <div className="avatar-placeholder">👤</div>
        <h2 className="profile-name">Анастасія Лужко</h2>

        {/* Особиста інформація */}
        <div className="info-card">
          <button
            className="info-btn"
            onClick={() => toggleSection("personal")}
          >
            Особиста інформація
          </button>
          {openSection === "personal" && (
            <ul>
              <li><b>Ім’я:</b> Анастасія Лужко</li>
              <li><b>Пошта:</b> anastitest@gmail.com</li>
              <li><b>Нік телеграм:</b> @ananansik</li>
            </ul>
          )}
        </div>

        {/* Мої сертифікати */}
        <div className="info-card">
          <button
            className="info-btn"
            onClick={() => toggleSection("certs")}
          >
            Мої сертифікати
          </button>
          {openSection === "certs" && (
            <ul>
              <li>У вас немає сертифікатів</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
