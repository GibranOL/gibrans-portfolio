import SkillCard from './cards/SkillCard';
import '../styles/Skills.css';

export default function Skills() {
  const skills = [
    { name: 'React', icon: '/src/assets/images/iconos-Skills/react.svg', color: '#61DAFB' },
    { name: 'Slack', icon: '/src/assets/images/iconos-Skills/slack.svg', color: '#4A154B' },
    { name: 'JavaScript', icon: '/src/assets/images/iconos-Skills/javascript.svg', color: '#F7DF1E' },
    { name: 'HTML5', icon: '/src/assets/images/iconos-Skills/html5.svg', color: '#E34F26' },
    { name: 'CSS3', icon: '/src/assets/images/iconos-Skills/css3.svg', color: '#1572B6' },
    { name: 'Next.js', icon: '/src/assets/images/iconos-Skills/nextdotjs.svg', color: '#444444' },
    { name: 'Firebase', icon: '/src/assets/images/iconos-Skills/firebase.svg', color: '#DD2C00' },
    { name: 'Git', icon: '/src/assets/images/iconos-Skills/git.svg', color: '#F05032' },
    { name: 'GitHub', icon: '/src/assets/images/iconos-Skills/github.svg', color: '#181717' },
    { name: 'Figma', icon: '/src/assets/images/iconos-Skills/figma.svg', color: '#F24E1E' },
  ];

  return (
    <section className="section-wrapper skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}