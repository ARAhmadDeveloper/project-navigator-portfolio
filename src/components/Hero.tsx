
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      // Applying a more subtle effect
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${y * -3}deg) translateZ(10px)`;
    };
    
    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
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

  const blurVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40"
        variants={blurVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-40"
        variants={blurVariants}
        initial="hidden"
        animate="visible"
      />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              MERN Stack Developer
            </motion.span>
            <motion.h1 
              className="heading-xl mb-6 text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Crafting <span className="text-gradient">Digital</span> Experiences
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <a href="#projects" className="button-primary">
                View Projects
              </a>
              <a href="#contact" className="button-secondary">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={heroRef}
            className="lg:w-1/2" // Removed transition-transform here as it's handled by JS/Framer Motion
            style={{ transformStyle: "preserve-3d" }} // Important for 3D transforms on children
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, duration: 1 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-75 animate-pulse-subtle"></div>
              <div className="glass rounded-2xl p-8 relative shadow-lg shadow-primary/20 ">
                <div className="w-full aspect-square shadow-lg shadow-primary/20 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="98"
                      height="98"
                      fill="none"
                      stroke="url(#border-gradient)"
                      strokeWidth="1"
                      strokeDasharray="98 98 98 98"
                      strokeLinecap="round"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="384;288;192;96;0;384"
                        keyTimes="0;0.25;0.5;0.75;1;1"
                        dur="3.5s"
                        repeatCount="indefinite"
                      />
                    </rect>
                    <defs>
                      <linearGradient id="border-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="rgb(99,102,241)" stopOpacity="0.5" />
                        <stop offset="0.5" stopColor="rgb(232,121,249)" stopOpacity="0.5" />
                        <stop offset="1" stopColor="rgb(99,102,241)" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <motion.div
                    className="absolute w-32 h-32 bg-primary/20 rounded-full blur-2xl -top-10 -left-10"
                    variants={blurVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.8} 
                  />
                  <motion.div
                    className="absolute w-32 h-32 bg-secondary/20 rounded-full blur-2xl -bottom-10 -right-10"
                    variants={blurVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0.9}
                  />
                  
                  <motion.div 
                    className="text-1xl font-bold font-mono text-primary relative z-10" 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      y: [0, -8, 0] 
                    }}
                    transition={{ 
                      scale: { type: "spring", stiffness: 100, delay: 0.8 },
                      opacity: { type: "spring", stiffness: 100, delay: 0.8 },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1 
                      }
                    }}
                  >
                    <span className="text-gradient">&lt;ARAHMAD/&gt;</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
