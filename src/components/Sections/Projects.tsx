<<<<<<< HEAD
=======

>>>>>>> a11d90a2e344754d04085594c87810099c858c44
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "../UI/ProjectCard";

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
<<<<<<< HEAD

  // === Projets depuis ton CV ===
  const projects = [
    {
      number: "01",
      title: "Pipeline IoT Kafka-Spark avec AWS S3",
      description:
        "Simulation de flux IoT → Traitement temps réel avec Spark Structured Streaming → Stockage S3 (Parquet). Déploiement conteneurisé.",
      technologies: ["Kafka", "Spark", "AWS S3", "Docker"],
      imageUrl: "/public/portfolio-uploads/iot-pipeline.png",
      githubLink: "https://github.com/ton-projet-iot",
=======
  
  const projects = [
    {
      number: "01",
      title: "Frontend Project",
      description: "A modern e-commerce website built with React and TailwindCSS.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      imageUrl: "/public/lovable-uploads/a1854c67-43af-43d1-ba2d-1df6a980ca68.png",
      // demoLink: "https://demo.example.com",
      githubLink: "https://github.com",
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
      isHighlighted: true,
    },
    {
      number: "02",
<<<<<<< HEAD
      title: "Pipeline ETL Orchestré (Airflow/PostgreSQL)",
      description:
        "Extraction API → Producteur Kafka Python → Orchestration Airflow → PostgreSQL. Déploiement Docker Compose.",
      technologies: ["Airflow", "PostgreSQL", "Kafka", "Docker"],
      imageUrl: "/public/portfolio-uploads/etl-pipeline.png",
      githubLink: "https://github.com/ton-projet-etl",
    },
    {
      number: "03",
      title: "ETL Météo avec Airflow TaskFlow API",
      description:
        "Extraction API (Open Notify) → TaskFlow API (Airflow 2.0) pour une automatisation évolutive.",
      technologies: ["Airflow", "Python", "API", "TaskFlow"],
      imageUrl: "/public/portfolio-uploads/weather-etl.png",
      githubLink: "https://github.com/ton-projet-meteo",
    },
    {
      number: "04",
      title: "Projets Machine Learning",
      description:
        "Classification & régression avec Scikit-learn : prétraitement, tuning, évaluation de modèles.",
      technologies: ["Scikit-learn", "Python", "ML"],
      imageUrl: "/public/portfolio-uploads/ml-projects.png",
      githubLink: "https://github.com/ton-projet-ml",
    },
    {
      number: "05",
      title: "Projets DataCamp",
      description:
        "Exemples : Retail Data Pipeline, Cleaning an Orders Dataset with PySpark, Motorcycle Sales Analysis.",
      technologies: ["PySpark", "SQL", "DataCamp"],
      imageUrl: "/public/portfolio-uploads/datacamp-projects.png",
      githubLink: "https://github.com/ton-projet-datacamp",
    },
  ];

  // === 1. Afficher 2 projets par slide
  const projectsPerSlide = 2;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

=======
      title: "Data Analysis Dashboard",
      description: "An interactive dashboard for visualizing complex data sets.",
      technologies: ["Python", "Pandas", "D3.js"],
      imageUrl: "/public/lovable-uploads/a9b755fb-3be0-41b9-bd78-854f712f5b36.png",
      // demoLink: "https://demo.example.com",
      githubLink: "https://github.com",
    },
    {
      number: "03",
      title: "Machine Learning API",
      description: "A RESTful API that provides machine learning predictions.",
      technologies: ["Python", "TensorFlow", "Flask"],
      imageUrl: "/public/lovable-uploads/866d7073-6a3d-4781-8bfa-a33170dd02a4.png",
      // demoLink: "https://demo.example.com",
      githubLink: "https://github.com",
    },
    {
      number: "04",
      title: "Backend Service",
      description: "A microservice architecture built with Spring Boot.",
      technologies: ["Java", "Spring Boot", "PostgreSQL"],
      imageUrl: "/public/lovable-uploads/2a53418f-2a7c-4d60-84d5-3771b331e01c.png",
      // demoLink: "https://demo.example.com",
      githubLink: "https://github.com",
    },
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            My <span className="text-neon">Projects</span>
          </h2>
          <p className="text-white/70">
<<<<<<< HEAD
            Academic and personal projects that showcase my skills in{" "}
            <span className="text-neon">Data Engineering</span>,{" "}
            <span className="text-neon">Machine Learning</span> and{" "}
            <span className="text-neon">Cloud</span>.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const start = slideIndex * projectsPerSlide;
              const end = start + projectsPerSlide;
              const slideProjects = projects.slice(start, end);

              return (
                <div
                  key={slideIndex}
                  className="grid w-full flex-shrink-0 grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-2"
                >
                  {slideProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      number={project.number}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      imageUrl={project.imageUrl}
                      githubLink={project.githubLink}
                      isHighlighted={project.isHighlighted}
                      index={index}
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Controls */}
          {projects.length > projectsPerSlide && (
=======
            Here are some of my recent projects that showcase my skills and
            expertise in web development and data science.
          </p>
        </motion.div>
        
        <div className="lg:hidden">
          {/* Mobile slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <ProjectCard
                    number={project.number}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    // demoLink={project.demoLink}
                    githubLink={project.githubLink}
                    isHighlighted={project.isHighlighted}
                    index={index}
                  />
                </div>
              ))}
            </div>
            
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
            <div className="mt-6 flex justify-center gap-2">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neon transition-all hover:bg-neon/80"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neon transition-all hover:bg-neon/80"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
<<<<<<< HEAD
          )}
=======
          </div>
        </div>
        
        {/* Desktop grid */}
        <div className="hidden grid-cols-1 gap-6 lg:grid lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              number={project.number}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              // demoLink={project.demoLink}
              githubLink={project.githubLink}
              isHighlighted={project.isHighlighted}
              index={index}
            />
          ))}
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
        </div>
      </div>
    </section>
  );
};

export default Projects;
