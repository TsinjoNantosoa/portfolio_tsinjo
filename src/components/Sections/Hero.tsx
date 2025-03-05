
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Facebook, Github, Linkedin, Mail } from "lucide-react";
import Button from "../UI/Button";
import CounterItem from "../UI/CounterItem";
import ProfileImage from "../UI/ProfileImage";
import AnimatedText from "../UI/AnimatedText";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(13,255,163,0.08)_0,rgba(0,0,0,0)_60%)]"></div>
      
      <div className="container mx-auto px-4 pb-16 pt-12 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-mono text-lg text-white/70"
            >
              Full Stack Developer
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-bold leading-tight sm:text-6xl"
            >
              Hello I'm<br />
              <span className="text-neon">Tsinjo Nantosoa</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 max-w-xl text-lg text-white/70"
            >
              I excel at crafting elegant digital experiences and I am proficient in{" "}
              <AnimatedText
                textArray={[
                  "React.js",
                  "Spring Boot",
                  "NestJS",
                  "Data Science",
                  "Machine Learning",
                ]}
                className="text-neon font-semibold"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 flex flex-wrap items-center gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                className="group"
                icon={<Download size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />}
              >
                DOWNLOAD CV
              </Button>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="mailto:tsinjonantosoa@mail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 mx-auto max-w-md lg:order-2"
          >
            <ProfileImage className="aspect-square w-full max-w-md" />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          <CounterItem value={6} label="Moth of experience" delay={0} />
          <CounterItem value={10} label="Projects completed" suffix="+" delay={1} />
          <CounterItem value={12} label="Technologies mastered" delay={2} />
          <CounterItem value={100} label="Code commits" suffix="+" delay={3} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
