
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero section might have its own more specific animations, so not wrapping it here initially */}
      <Hero />
      <SectionWrapper>
        <Projects />
      </SectionWrapper>
      <SectionWrapper>
        <Skills />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export default Index;
