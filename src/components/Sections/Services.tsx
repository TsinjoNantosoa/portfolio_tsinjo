
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../UI/ServiceCard";

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description: "Building responsive and performant web applications with modern frameworks like React, Vue, and Angular.",
      delay: 0,
    },
    {
      number: "02",
      title: "Backend Development",
      description: "Creating robust server-side applications using Spring Boot, NestJS, and various database technologies.",
      delay: 1,
    },
    {
      number: "03",
      title: "Data Science",
      description: "Analyzing complex datasets to extract valuable insights and patterns using Python and R.",
      delay: 2,
    },
    {
      number: "04",
      title: "Machine Learning",
      description: "Developing intelligent systems that can learn from data and make predictions using TensorFlow and PyTorch.",
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
            My <span className="text-neon">Services</span>
          </h2>
          <p className="text-white/70">
            I offer a range of services to help businesses and individuals
            achieve their technological goals with elegant and efficient
            solutions.
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
