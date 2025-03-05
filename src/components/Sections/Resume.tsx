import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaJava, FaReact, FaPython, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiSpringboot, SiNestjs, SiMongodb, SiPostgresql, SiMysql, SiJavascript, SiTensorflow, SiTableau,SiTypescript } from "react-icons/si";
import ExperienceCard from "../UI/ExperienceCard";

const skillIcons: { [key: string]: IconType } = {
  Java: FaJava,
  "C++": SiCplusplus,
  Python: FaPython,
  TypeScript: SiTypescript,
  TailwindCSS: SiTailwindcss,
  "Spring Boot": SiSpringboot,
  NestJS: SiNestjs,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  JavaScript: SiJavascript,
  "React.js": FaReact,
  "Machine Learning": SiTensorflow,
  "Deep Learning": SiTensorflow,
  "Data Analysis": SiTableau,
};


const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills" | "about">("experience");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const experience = [
    { period: "2o24", title: "Full Stack Developer", company: "personal project.", isActive: true },
    { period: "Summer 2021", title: "Front-End Developer with react js", company: "personal project", isActive: false },
    { period: "2024 - 2025", title: " Web Developer", company: "E-commerce", isActive: false },
    { period: "2025", title: "", company: "Backend developer", isActive: false },
  ];

  const education = [
    { period: "2024", title: "BSc in Applied Mathematics, Computer Science, and Statistics", company: "MISA, University of Antananarivo", isActive: true },
    { period: "2024 - 2025 (Ongoing)", title: "MSc in Applied Mathematics, Computer Science, and Statistics", company: "MISA, University of Antananarivo", isActive: false },
  ];

  const skills = Object.keys(skillIcons);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="mb-6 text-3xl font-bold">
                Why hire <span className="text-neon">me?</span>
              </h2>
              <p className="mb-8 text-white/70">
                With extensive experience in full-stack development and data science, I bring technical expertise and creative problem-solving skills to every project.
              </p>

              <div className="space-y-3">
                {["experience", "education", "skills", "about"].map((tab) => (
                  <button
                    key={tab}
                    className={`w-full rounded-md px-4 py-3 text-left transition-all ${
                      activeTab === tab ? "bg-neon text-black" : "bg-darkcard text-white hover:bg-darkcard/80"
                    }`}
                    onClick={() => setActiveTab(tab as any)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-3">
            <h3 className="mb-6 text-2xl font-bold">
              {activeTab === "experience" && "My experience"}
              {activeTab === "education" && "My education"}
              {activeTab === "skills" && "My skills"}
              {activeTab === "about" && "About me"}
            </h3>

            {activeTab === "experience" && (
              <div className="space-y-4">
                {experience.map((item, index) => (
                  <ExperienceCard key={index} period={item.period} title={item.title} company={item.company} isActive={item.isActive} index={index} />
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-4">
                {education.map((item, index) => (
                  <ExperienceCard key={index} period={item.period} title={item.title} company={item.company} isActive={item.isActive} index={index} />
                ))}
              </div>
            )}

            {activeTab === "skills" && (
              <div className="flex flex-wrap gap-4 relative">
                {skills.map((skill, index) => {
                  const Icon = skillIcons[skill];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="relative flex flex-col items-center"
                    >
                      <div className="p-4 rounded-full bg-darkcard hover:bg-neon/20 transition-all">
                        <Icon className="text-3xl text-white/80 hover:text-neon" />
                      </div>
                      {hoveredSkill === skill && (
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute bottom-12 bg-darkcard text-white/80 px-3 py-1 rounded-md text-sm"
                        >
                          {skill}
                        </motion.span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}

            {activeTab === "about" && (
              <div className="rounded-lg bg-darkcard p-6">
                <p className="mb-4 text-white/70">
                  I'm Sandaniaina Tsinjo Nantosoa, a passionate full-stack developer and data scientist with a love for solving complex problems.
                </p>
                <p className="mb-4 text-white/70">
                  My journey in tech began with Java and C++, but I quickly expanded my skills to include modern web technologies and data science.
                </p>
                <p className="text-white/70">
                  When I'm not coding, I enjoy contributing to open-source projects, mentoring junior developers, and learning new technologies.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
