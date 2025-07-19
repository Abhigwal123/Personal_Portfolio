import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    category: "AI",
    title: "Eka Care",
    images: ["/ekacare.png"],
    description: "Full-stack health records app for scheduling and management.",
    demo: "https://www.eka.care/",
    tech: ["Next.js", "Rest API", "Postgres", "Tailwind CSS", "Docker", "AWS", "OAuth"],
  },
  {
    category: "AI",
    title: "Cleango",
    images: ["/cleango.png"],
    description: "Cleaning service website for Goverment project for Smart City .",
    demo: "https://cleanical.org.il/%d7%a8%d7%90%d7%a9%d7%99-english/",
    tech: ["React", "FastAPI", "SQLite", "Nvidia", "Numpy", "AWS", "Docker"],
  },
  {
    category: "Ecommerce",
    title: "Tiger Balm",
    images: ["/tigerbalm.png"],
    description: "Official U.S. product site for Tiger Balm.",
    demo: "https://www.tigerbalm.com/us/",
    tech: ["React", "FastAPI", "SQLite", "Nvidia", "Numpy", "AWS", "Docker"],
  },
  {
    category: "Finance",
    title: "FinLab",
    images: ["/finlab.png"],
    description: "Financial insights platform for startups and analysts.",
    demo: null,
    tech: ["Next.js", "Rest API", "Postgres", "Tailwind CSS", "Docker", "AWS"],
  },
  {
    category: "Chatbot",
    title: "OpenupChat",
    images: ["/OpenupChat.png"],
    description: "Open-source AI-powered chat platform.",
    demo: null,
    tech: ["React", "FastAPI", "MySQL", "Docker", "LangChain", "AWS"],
  },
  {
    category: "Finance",
    title: "Stock Analyzer",
    images: ["/Stockanalyzer.png"],
    description: "Visual stock data analyzer with ML integration.",
    demo: null,
    tech: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Python-Library"],
  },
  {
    category: "Ecommerce",
    title: "Ecommerce Platform",
    images: ["/ecommerce.png"],
    description: "Full-featured e-commerce MVP for a client brand.",
    demo: null,
    tech: ["Next.js", "Rest API", "Postgres", "Tailwind CSS", "Docker", "AWS"],
  },
];


const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef();

  // Auto-move carousel
  useEffect(() => {
    if (!hovered) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % project.images.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [hovered, project.images.length]);

  // Manual navigation
  const prev = () => setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
  const next = () => setCurrent((prev) => (prev + 1) % project.images.length);

  return (
    <div
      className="relative bg-gray-800 rounded-xl overflow-hidden group transition shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: 340, width: "100%" }}
    >
      {/* Carousel Image */}
      <div className="relative w-full h-48 sm:h-56 flex items-center justify-center">
        <img
          src={project.images[current]}
          alt={project.title}
          className="w-full h-full object-cover transition"
        />
        {/* Carousel Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
              style={{ zIndex: 2 }}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition"
              style={{ zIndex: 2 }}
              aria-label="Next image"
            >
              &#8594;
            </button>
          </>
        )}
        {/* Carousel Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {project.images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: idx === current ? "#a21caf" : "#fff",
                opacity: idx === current ? 1 : 0.5,
                cursor: "pointer",
                display: "inline-block",
              }}
            />
          ))}
        </div>
      </div>
      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="mb-3 text-gray-100">{project.description}</p>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow"
          >
            Demo
          </a>
        )}
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {project.tech && project.tech.map((t) => (
            <span
              key={t}
              className="bg-gray-700 text-xs px-3 py-1 rounded-full text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* Title */}
      <div className="p-4">
        <p className="text-red-400 text-sm">{project.category}</p>
        <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
      </div>
    </div>
  );
}

export default function Project() {
  const [selected, setSelected] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Responsive: 1 project on mobile, 2 on tablet/desktop
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((proj) => proj.category === selected);

  const maxIndex = Math.max(0, filteredProjects.length - visibleCount);

  const nextProjects = () => setCarouselIndex((i) => (i + 1 > maxIndex ? 0 : i + 1));
  const prevProjects = () => setCarouselIndex((i) => (i - 1 < 0 ? maxIndex : i - 1));

  // Reset carousel index if filter changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [selected, visibleCount]);

  return (
    <section className="py-12 sm:py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Works & Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map(tag => (
            <motion.button
              key={tag}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              onClick={() => setSelected(tag)}
              className={`px-4 py-1 border border-gray-400 text-sm rounded-full transition duration-300 ${
                selected === tag
                  ? "bg-red-600 text-white"
                  : "hover:bg-red-600 hover:text-white text-gray-200"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Carousel Controls */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 gap-4">
          <button
            onClick={prevProjects}
            className="bg-gray-700 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition"
            aria-label="Previous projects"
          >
            &#8592;
          </button>
          <button
            onClick={nextProjects}
            className="bg-gray-700 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition"
            aria-label="Next projects"
          >
            &#8594;
          </button>
        </div>

        {/* Projects Carousel */}
        <div className={`flex gap-6 sm:gap-8 justify-center`}>
          {filteredProjects
            .slice(carouselIndex, carouselIndex + visibleCount)
            .map((proj, i) => (
              <div
                key={i}
                className="w-full max-w-xs sm:max-w-sm flex-shrink-0"
                style={{ flex: `0 0 ${visibleCount === 1 ? "100%" : "45%"}` }}
              >
                <ProjectCard project={proj} />
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gray-900 text-white py-10 sm:py-12 rounded-xl shadow-lg mx-2 sm:mx-10 lg:mx-16"
        >
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Are You Ready to kickstart your project with a touch of magic?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Reach out and let's make it happen ✨. I'm also available for full-time or part-time opportunities to push the boundaries of design and deliver exceptional work.
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
