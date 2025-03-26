
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    
    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 stagger-animation">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              MERN Stack Developer
            </span>
            <h1 className="heading-xl mb-6 text-balance">
              Crafting <span className="text-gradient">Digital</span> Experiences
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="button-primary">
                View Projects
              </a>
              <a href="#contact" className="button-secondary">
                Contact Me
              </a>
            </div>
          </div>
          
          <div 
            ref={heroRef}
            className="lg:w-1/2 transition-transform duration-200 ease-out"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-75 animate-pulse-subtle"></div>
              <div className="glass rounded-2xl p-8 relative">
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary animate-float">&lt;/&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
