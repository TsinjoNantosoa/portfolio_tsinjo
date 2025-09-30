<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Facebook } from "lucide-react";
=======

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Facebook, Github, Linkedin, Mail } from "lucide-react";
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
import Button from "../UI/Button";
import CounterItem from "../UI/CounterItem";
import ProfileImage from "../UI/ProfileImage";
import AnimatedText from "../UI/AnimatedText";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(13,255,163,0.08)_0,rgba(0,0,0,0)_60%)]"></div>
<<<<<<< HEAD

=======
      
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
      <div className="container mx-auto px-4 pb-16 pt-12 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-mono text-lg text-white/70"
            >
<<<<<<< HEAD
              Data Engineer & Analyst
            </motion.div>

=======
              Full Stack Developer
            </motion.div>
            
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-5xl font-bold leading-tight sm:text-6xl"
            >
              Hello I'm<br />
<<<<<<< HEAD
              <span className="text-neon">SANDANIAINA Tsinjo Nantosoa</span>
            </motion.h1>

=======
              <span className="text-neon">Tsinjo Nantosoa</span>
            </motion.h1>
            
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 max-w-xl text-lg text-white/70"
            >
<<<<<<< HEAD
              Master's student in Computer Science (MISA) passionate about{" "}
              <AnimatedText
                textArray={[
                  "Data Engineering",
                  "Data Analysis",
                  "Business Intelligence",
                  "Big Data",
                  "Cloud Computing",
=======
              I excel at crafting elegant digital experiences and I am proficient in{" "}
              <AnimatedText
                textArray={[
                  "React.js",
                  "Spring Boot",
                  "NestJS",
                  "Data Science",
                  "Machine Learning",
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
                ]}
                className="text-neon font-semibold"
              />
            </motion.div>
<<<<<<< HEAD

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-white/70"
            >
              Located at: Lot 122BIS Ambohimahintsy – Ambohimangakely
            </motion.p>

=======
            
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
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
<<<<<<< HEAD
                icon={
                  <Download
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1"
                  />
                }
              >
                DOWNLOAD CV
              </Button>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/TsinjoNantosoa"
=======
                icon={<Download size={16} className="transition-transform duration-300 group-hover:-translate-y-1" />}
              >
                DOWNLOAD CV
              </Button>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
<<<<<<< HEAD
                  href="https://www.linkedin.com/in/sandaniaina-tsinjo-nantosoa-b6209a330/"
=======
                  href="https://linkedin.com"
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
<<<<<<< HEAD
                  href="https://web.facebook.com/sandaniaina.tsinjo.nantosoa.2025"
=======
                  href="https://facebook.com"
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
<<<<<<< HEAD
                  href="https://www.datacamp.com/portfolio/sandaniainatsinjonantosoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon text-sm"
                  aria-label="DataCamp Portfolio"
                >
                  DC
                </a>
                <a
                  href="mailto:tsinjonantosoa@gmail.com"
=======
                  href="mailto:tsinjonantosoa@mail.com"
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-darkcard transition-all duration-300 hover:border-neon hover:text-neon"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>
<<<<<<< HEAD

=======
          
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 mx-auto max-w-md lg:order-2"
          >
            <ProfileImage className="aspect-square w-full max-w-md" />
          </motion.div>
        </div>
<<<<<<< HEAD

=======
        
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
<<<<<<< HEAD
          <CounterItem value={77} label="DataCamp Courses" suffix="+" delay={0} />
          <CounterItem value={230} label="Hours of Training" suffix="+" delay={1} />
          <CounterItem value={7} label="Major Certifications" delay={2} />
          <CounterItem value={3} label="Data Projects" suffix="+" delay={3} />
=======
          <CounterItem value={6} label="Moth of experience" delay={0} />
          <CounterItem value={10} label="Projects completed" suffix="+" delay={1} />
          <CounterItem value={12} label="Technologies mastered" delay={2} />
          <CounterItem value={100} label="Code commits" suffix="+" delay={3} />
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
