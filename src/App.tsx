import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./screens/components/Navigation";
import { routes } from "./screens/api/routes";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-content">
          <Routes>
            {routes.map((item) => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}
          </Routes>
        </div>
        
        <Navigation />
      </div>
    </Router>
  );
}