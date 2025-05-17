import '../styles/Footer.css';

export default function Footer() {
    return (
      <footer className="footer">
        <a
          href="https://github.com/GibranOL"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <img src="/src/assets/images/iconos-Skills/github.svg" alt="GitHub" />
        </a>
  
        <a
          href="mailto:gibranoliva.l@gmail.com"
          className="footer-icon"
        >
          <img src="/src/assets/images/iconos-Skills/icons8-mail.svg" alt="Email" />
        </a>
  
        <a
          href="https://www.linkedin.com/in/gibran-oliva"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <img src="/src/assets/images/iconos-Skills/icons8-linkedin.svg" alt="LinkedIn" />
        </a>
      </footer>
    );
  }