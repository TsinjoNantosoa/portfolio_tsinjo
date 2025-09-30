<<<<<<< HEAD
=======

>>>>>>> a11d90a2e344754d04085594c87810099c858c44
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../UI/ServiceCard";

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
<<<<<<< HEAD
      title: "Data Engineering & Cloud",
      description: "Building data pipelines using Python (pandas, PySpark), ETL/ELT with Airflow & dbt, Big Data processing with Kafka, and Cloud solutions with AWS (EC2, S3, IAM).",
=======
      title: "Web Development",
      description: "Building responsive and performant web applications with modern frameworks like React, Vue, and Angular.",
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
      delay: 0,
    },
    {
      number: "02",
<<<<<<< HEAD
      title: "Data Analysis & BI",
      description: "Creating interactive reports and dashboards using Power BI (DAX), performing EDA, data cleaning, and visualization with Matplotlib & Seaborn.",
=======
      title: "Backend Development",
      description: "Creating robust server-side applications using Spring Boot, NestJS, and various database technologies.",
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
      delay: 1,
    },
    {
      number: "03",
<<<<<<< HEAD
      title: "Machine Learning",
      description: "Developing ML models using Scikit-learn and TensorFlow for classification and regression tasks, including model tuning and evaluation.",
=======
      title: "Data Science",
      description: "Analyzing complex datasets to extract valuable insights and patterns using Python and R.",
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
      delay: 2,
    },
    {
      number: "04",
<<<<<<< HEAD
      title: "DevOps & Infrastructure",
      description: "Implementing CI/CD pipelines, containerization with Docker & Kubernetes, and building APIs with FastAPI. Strong expertise in Git and Shell scripting.",
=======
      title: "Machine Learning",
      description: "Developing intelligent systems that can learn from data and make predictions using TensorFlow and PyTorch.",
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
      delay: 3,
    },
  ];

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
<<<<<<< HEAD
            My <span className="text-neon">Expertise</span>
          </h2>
          <p className="text-white/70">
            Master's student in Computer Science (MISA) with expertise in Data Engineering,
            Analysis and Business Intelligence. Over 220 hours of DataCamp training and
            multiple certifications in data technologies.
=======
            My <span className="text-neon">Services</span>
          </h2>
          <p className="text-white/70">
            I offer a range of services to help businesses and individuals
            achieve their technological goals with elegant and efficient
            solutions.
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
