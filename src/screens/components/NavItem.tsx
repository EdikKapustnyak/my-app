import { NavLink } from "react-router-dom";
import '../styles/NavItem.css';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  end?: boolean;
}

export default function NavItem({ to, icon, label, end = false }: NavItemProps) {
  return (
    <NavLink to={to} end={end} className="nav-button">
      {({ isActive }: { isActive: boolean }) => (
        <div className="nav-item">
          {icon}
          {isActive && <span>{label}</span>}
        </div>
      )}
    </NavLink>
  );
}
