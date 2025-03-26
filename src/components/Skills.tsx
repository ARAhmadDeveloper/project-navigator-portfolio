
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon: string; // Using a placeholder for now
}

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-bar-fill');
            bars.forEach((bar) => {
              if (bar instanceof HTMLElement) {
                const width = bar.dataset.width;
                bar.style.width = width || '0%';
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const skillsData: Record<string, Skill[]> = {
    frontend: [
      { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
      { name: 'JavaScript', level: 85, category: 'frontend', icon: '📜' },
      { name: 'HTML/CSS', level: 95, category: 'frontend', icon: '🎨' },
      { name: 'Redux', level: 80, category: 'frontend', icon: '🔄' },
      { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: '🌬️' },
    ],
    backend: [
      { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
      { name: 'Express', level: 90, category: 'backend', icon: '🚂' },
      { name: 'RESTful APIs', level: 90, category: 'backend', icon: '🔌' },
      { name: 'GraphQL', level: 75, category: 'backend', icon: '⚡' },
      { name: 'JWT/Auth', level: 80, category: 'backend', icon: '🔐' },
    ],
    database: [
      { name: 'MongoDB', level: 90, category: 'database', icon: '🍃' },
      { name: 'Mongoose', level: 85, category: 'database', icon: '🦕' },
      { name: 'SQL', level: 70, category: 'database', icon: '🗃️' },
      { name: 'Redis', level: 65, category: 'database', icon: '📦' },
    ],
    tools: [
      { name: 'Git/GitHub', level: 90, category: 'tools', icon: '🐙' },
      { name: 'Docker', level: 75, category: 'tools', icon: '🐳' },
      { name: 'AWS', level: 70, category: 'tools', icon: '☁️' },
      { name: 'CI/CD', level: 75, category: 'tools', icon: '🔄' },
      { name: 'Testing', level: 80, category: 'tools', icon: '🧪' },
    ],
  };

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-lg mr-2">{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="skill-bar-fill h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
          data-width={`${skill.level}%`}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="section-container" ref={containerRef}>
        <div className="text-center mb-16 stagger-animation">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            MY EXPERTISE
          </span>
          <h2 className="heading-lg mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a MERN stack developer, I've honed my skills across the entire web development spectrum.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass rounded-xl p-8">
            <h3 className="heading-md mb-6 text-center">Frontend Development</h3>
            {skillsData.frontend.map(renderSkillBar)}
          </div>
          
          <div className="glass rounded-xl p-8">
            <h3 className="heading-md mb-6 text-center">Backend Development</h3>
            {skillsData.backend.map(renderSkillBar)}
          </div>
          
          <div className="glass rounded-xl p-8">
            <h3 className="heading-md mb-6 text-center">Database</h3>
            {skillsData.database.map(renderSkillBar)}
          </div>
          
          <div className="glass rounded-xl p-8">
            <h3 className="heading-md mb-6 text-center">Tools & Deployment</h3>
            {skillsData.tools.map(renderSkillBar)}
          </div>
        </div>
        
        <div className="mt-20 glass rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="heading-md mb-6 text-center">MERN Stack Expertise</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-4xl">⚛️</span>
              </div>
              <h4 className="font-semibold">MongoDB</h4>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-4xl">🚂</span>
              </div>
              <h4 className="font-semibold">Express</h4>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-4xl">⚛️</span>
              </div>
              <h4 className="font-semibold">React</h4>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-4xl">🟢</span>
              </div>
              <h4 className="font-semibold">Node.js</h4>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              I specialize in building full-stack applications using the MERN (MongoDB, Express, React, Node.js) stack, creating responsive, scalable, and modern web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
