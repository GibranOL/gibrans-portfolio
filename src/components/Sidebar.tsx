import '../styles/Sidebar.css';
import avatar from '../assets/images/prosentacion_corto.png'; // Usa tu imagen

export default function Sidebar() {
  return (
    <div className="sidebar-navbar">
      <img src={avatar} alt="Gibran avatar" className="sidebar-avatar" />
      <div className="sidebar-links">
        <a href="#home">{' Home'}</a>
        <a href="#about">{' About Me'}</a>
        <a href="#skills">{' Skills'}</a>
        <a href="#projects">{' Projects'}</a>
      </div>
    </div>
  );
}