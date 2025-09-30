import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
<<<<<<< HEAD
import { FaJava, FaReact, FaPython } from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiSpringboot,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiTensorflow,
  SiTableau,
  SiTypescript,
  SiApacheairflow,
  SiApachespark,
  SiDocker,
  SiKubernetes,
  SiSnowflake,
  // SiPowerbi,
  SiDbeaver
} from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import ExperienceCard from "../UI/ExperienceCard";

// === Skills du CV ===
const skillIcons: { [key: string]: IconType } = {
  // Langages
  Python: FaPython,
  Java: FaJava,
  "C++": SiCplusplus,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,

  // Frontend & UI
  "React.js": FaReact,
  TailwindCSS: SiTailwindcss,

  // Backend
  "Spring Boot": SiSpringboot,
  NestJS: SiNestjs,

  // Bases de données
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Snowflake: SiSnowflake,

  // Big Data / Orchestration
  "Apache Spark": SiApachespark,
  "Apache Airflow": SiApacheairflow,
  "Apache Kafka": SiApachekafka,
  dbt: SiDbeaver, // pas d'icône officielle dbt, on met DBeaver comme placeholder

  // DevOps / Cloud
  Docker: SiDocker,
  Kubernetes: SiKubernetes,

  // Data Science & BI
  "Machine Learning": SiTensorflow,
  "Deep Learning": SiTensorflow,
  "Data Analysis": SiTableau,
   "Power BI": SiTableau 
};

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "profile" | "experience" | "education" | "skills" | "projects" | "certifications" | "languages"
  >("profile");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const experience = [
    { period: "2024–2025", title: "Pipeline IoT Kafka-Spark avec AWS S3", company: "Projet académique", isActive: true },
    { period: "2024", title: "Pipeline ETL Orchestré (Airflow/PostgreSQL)", company: "Projet académique", isActive: false },
    { period: "2024", title: "ETL Météo avec Airflow TaskFlow API", company: "Projet académique", isActive: false },
    { period: "2023–2024", title: "Projets Machine Learning (Classification & Régression)", company: "Académique & DataCamp", isActive: false },
  ];

  const education = [
    { period: "2024–2025", title: "Master 1 MISA", company: "Université d’Antananarivo", isActive: true },
    { period: "2023–2024", title: "Licence MISA", company: "Université d’Antananarivo", isActive: false },
    { period: "2024", title: "Formation Cloud & Data Flow (Certifiée)", company: "Etech", isActive: false },
    { period: "2021", title: "Bureautique (Word, Excel, PowerPoint)", company: "CFPM (Certifiée)", isActive: false },
  ];

  const certifications = [
    "Data Engineer Associate",
    "Data Analyst Associate",
    "Python Data Associate",
    "SQL Associate",
    "AWS Cloud Practitioner (CLF-C02)",
    "Data Engineer (Career Track)",
    "Data Analyst (Career Track)",
    "Business Intelligence (Career Track)",
    "SQL Fundamentals (Skill Track)",
    "Python Data Fundamentals (Skill Track)",
    "Power BI Fundamentals (Skill Track)",
    "Snowflake Foundations (Skill Track)"
  ];

  const languages = [
    { name: "Malgache", level: "Natif" },
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Professionnel" }
=======
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
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
  ];

  const skills = Object.keys(skillIcons);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
<<<<<<< HEAD
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl font-bold">
                My <span className="text-neon">Resume</span>
              </h2>
              <div className="space-y-3">
                {["profile", "experience", "education", "skills", "projects", "certifications", "languages"].map((tab) => (
=======
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
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
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

<<<<<<< HEAD
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 text-2xl font-bold">
              {activeTab === "profile" && "Profile"}
              {activeTab === "experience" && "Projects & Experience"}
              {activeTab === "education" && "Education"}
              {activeTab === "skills" && "Skills"}
              {activeTab === "projects" && "Personal Projects"}
              {activeTab === "certifications" && "Certifications"}
              {activeTab === "languages" && "Languages"}
            </h3>

            {activeTab === "profile" && (
              <div className="rounded-lg bg-darkcard p-6 text-white/70">
                Étudiant en Master Informatique (MISA) passionné par le Data Engineering,
                la Data Analysis et la Business Intelligence.  
                Expertise : 77 cours DataCamp (230h+), plusieurs Career Tracks & Certifications
                (Data Engineer, Data Analyst, Python, SQL, Power BI, Snowflake, AWS).  
                Objectif : appliquer mes compétences en pipelines de données, Big Data
                (PySpark, Kafka), ETL/ELT (Airflow, dbt), Data Warehousing et Cloud Computing.
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-4">
                {experience.map((item, index) => (
                  <ExperienceCard
                    key={index}
                    period={item.period}
                    title={item.title}
                    company={item.company}
                    isActive={item.isActive}
                    index={index}
                  />
=======
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
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="space-y-4">
                {education.map((item, index) => (
<<<<<<< HEAD
                  <ExperienceCard
                    key={index}
                    period={item.period}
                    title={item.title}
                    company={item.company}
                    isActive={item.isActive}
                    index={index}
                  />
=======
                  <ExperienceCard key={index} period={item.period} title={item.title} company={item.company} isActive={item.isActive} index={index} />
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
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

<<<<<<< HEAD
            {activeTab === "certifications" && (
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                {certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
            )}

            {activeTab === "languages" && (
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                {languages.map((lang, i) => (
                  <li key={i}>
                    {lang.name} : {lang.level}
                  </li>
                ))}
              </ul>
=======
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
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
