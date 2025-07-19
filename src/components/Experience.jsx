import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Web Developer",
    company: "Freelancer",
    duration: "2022 - 2024",
    description: "Designed and developed responsive templates and modern frontend websites.",
  },
  {
    role: "Python Developer",
    company: "Qspiders & SSV Infotech",
    duration: "2024 - 2025",
    description: "Build and maintained web applications using React, Django/FastAPI/Flask, and Mysql,postgreSQL,Sqllite.",
  },
  {
    role: "Fullstack Developer",
    company: "Tomato Technology LLP",
    duration: "2025 - Present",
    description: "Collaborated with clients for website development, branding, and product strategy.",
  },
];

export default function Experience() {
  return (
    <section className="text-white pt-24 pb-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Professional Journey</h1>
          <p className="text-gray-400">Explore my diverse design and development experience</p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="bg-gray-900 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 rounded-xl p-6 flex flex-col justify-between"
            >
              <p className="text-sm text-gray-500 mb-1">{exp.duration}</p>
              <h2 className="text-lg font-bold text-red-500 mb-1">{exp.role}</h2>
              <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-900 text-white py-12 rounded-xl shadow-lg mx-4 sm:mx-10 lg:mx-20"
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's collaborate to build something exceptional
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you're looking for design, development, or both — I'm ready to bring your vision to life.
            </p>
           <a
              href="https://cal.com/abhishek-yadav-fdr7zx/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 shadow inline-block"
            >
              Book a Call
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
