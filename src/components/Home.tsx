import miFoto from '../assets/images/prosentacion_corto.png';
import '../styles/Home.css';

export default function Home() {
  return (
    <section className="section-wrapper home-container">
      <img
        src={miFoto}
        alt="Gibran Oliva"
        className="profile-img"
      />
      <h1 className="title">Hello, I'm Gibran Oliva.</h1>
      <h2 className="subtitle">I design and code for the web & mobile.</h2>
      <p className="description">
        I'm a Front-End Developer and former Game QA Tester based in Vancouver. With experience in JavaScript,
        React, React Native, Node.js, and Android (Java/Kotlin), I bring ideas to life across web and mobile platforms.
        My passion lies in building intuitive user interfaces and engaging digital experiences.
      </p>
    </section>
  );
}