interface SkillCardProps {
    name: string;
    icon: string;
    color: string;
  }
  
  export default function SkillCard({ name, icon, color }: SkillCardProps) {
    return (
      <div className="skill-card" style={{ borderColor: color }}>
        <div className="skill-icon-wrapper" style={{ backgroundColor: color }}>
          <img src={icon} alt={name} className="skill-icon" />
        </div>
        <p className="skill-name">{name}</p>
      </div>
    );
  }