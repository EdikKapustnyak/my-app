import Header from "./components/Header";
import './styles/HomeScreen.css'

export default function Home() {
  return (
    <div className="home-container">
      {/* Синий блок приветствия (только для авторизованных) */}
      <Header user= {{name: " Andriy", surname: " Luzhko"}}></Header>

      {/* Основной контент страницы */}
     
    </div>
  );
}