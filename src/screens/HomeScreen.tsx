import HomeHeader from "./components/HomeHeader";
import './styles/HomeScreen.css'

export default function Home() {
  return (
    <div className="home-container">
      {/* Синий блок приветствия (только для авторизованных) */}
      <HomeHeader user= {{name: " Andriy", surname: " Luzhko"}}></HomeHeader>

      {/* Основной контент страницы */}
     
    </div>
  );
}