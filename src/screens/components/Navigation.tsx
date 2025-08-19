import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import homeIcon from "../img/icons/home.svg";
import courseIcon from "../img/icons/course.svg";
import scriptsIcon from "../img/icons/broken.svg";
import profileIcon from "../img/icons/profile.svg";

const navItems = [
  { path: "/", icon: homeIcon, label: "Головна" },
  { path: "/courses", icon: courseIcon, label: "Курси" },
  { path: "/scripts", icon: scriptsIcon, label: "Скріпти" },
  { path: "/profile", icon: profileIcon, label: "Профіль" },
];

export default function Navigation() {
  const location = useLocation();
  
  const hideNavOn = ["/chat"];
  const shouldShowNav = !hideNavOn.includes(location.pathname);

  if (!shouldShowNav) return null;

  return (
    <nav className="nav">
      {navItems.map((item) => (
        <NavItem
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          icon={<img src={item.icon} alt={item.label} className="nav-img" />}
          label={item.label}
        />
      ))}
    </nav>
  );
}