import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Testimonials data
const testimonials = [
  {
    quote: "Abhishek has a rare ability to combine deep AI knowledge with full-stack product development. His leadership on the Clean2Go platform transformed a raw idea into a deployable smart city solution.",
    name: "Cameron Trew",
    role: "— Client, Clean2Go Team",
  },
  {
    quote: "Fast, reliable, and friendly. Our MVP was live in weeks and the process was seamless.",
    name: "Tushar",
    role: "CEO, Tigerbalm",
  },
  {
    quote: "The best MVP experience we’ve had. Great communication and top-notch results.",
    name: "Tim Cock",
    role: "CEO, Eka Care",
  },
  {
    quote: "The CRM landed perfectly as I was expecting , Thanks Abhigwal And Team for the great work.",
    name: "Alex Smith",
    role: "QA, FinLab",
  },
];

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleManualNav = (fn) => {
    clearInterval(intervalRef.current);
    fn();
    intervalRef.current = setInterval(() => {
      setCurrent((prevIdx) => (prevIdx + 1) % testimonials.length);
    }, 5000);
  };

  return (
    <section
      id="testimonials"
      className="py-12 px-2 md:px-5 flex flex-col items-center justify-center relative"
    >
      <div className="w-full text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#a21caf" }}>About My Work Testimonials </h2>
        <p className="text-lg mb-4" style={{ color: "#fff" }}>Genuine feedback from those who’ve worked with us.</p>
      </div>
      <div className="flex flex-col items-center w-full">
        <div
          className="relative mx-auto"
          style={{
            width: "100%",
            maxWidth: 900,
            minHeight: 320,
            background: "#fff",
            borderRadius: "2rem",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
            overflow: "hidden",
            padding: "3.5rem 2.5rem 2.5rem 2.5rem",
            border: "1.5px solid #a21caf",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="p-0 flex flex-col items-center justify-center" style={{ minHeight: 180 }}>
            <div className="mb-4 w-full text-center">
              <span className="mb-2 block" style={{ color: "#a21caf", fontSize: "3.5rem", lineHeight: 1 }}>“</span>
              <p className="mb-4 italic" style={{ color: "#232334", fontWeight: 500, lineHeight: 1.5, maxWidth: 700, margin: "0 auto", fontSize: "1.25rem" }}>
                {testimonials[current].quote}
              </p>
            </div>
            <div className="text-center">
              <span className="font-bold" style={{ color: "#a21caf", fontSize: "1.2rem" }}>{testimonials[current].name}</span>
              <div className="text-gray-700" style={{ fontSize: "1.05rem" }}>{testimonials[current].role}</div>
            </div>
          </div>
          {/* Carousel Controls */}
          <button
            className="btn btn-dark absolute top-1/2 left-0 -translate-y-1/2"
            style={{
              borderRadius: "50%",
              opacity: 0.7,
              left: 10,
              zIndex: 2,
              width: 44,
              height: 44,
              background: "#a21caf",
              color: "#fff",
              border: "none",
              fontSize: 22,
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}
            onClick={() => handleManualNav(prev)}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className="btn btn-dark absolute top-1/2 right-0 -translate-y-1/2"
            style={{
              borderRadius: "50%",
              opacity: 0.7,
              right: 10,
              zIndex: 2,
              width: 44,
              height: 44,
              background: "#a21caf",
              color: "#fff",
              border: "none",
              fontSize: 22,
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}
            onClick={() => handleManualNav(next)}
            aria-label="Next"
          >
            &#8594;
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  display: "inline-block",
                  background: idx === current ? "#a21caf" : "#e0e0e0",
                  opacity: idx === current ? 1 : 0.5,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onClick={() => handleManualNav(() => setCurrent(idx))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="text-white pt-24 pb-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* About Me + Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-md grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: About Text */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/img.png"
              alt="Bentos Walker"
              className="rounded-lg shadow-md w-full max-w-sm object-cover"
            />
          </motion.div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-gray-300 mb-4">
              Full-stack developer and AI engineer with expertise in FastAPI, Django, Flask, and React. I build scalable web apps, intelligent RAG systems, and custom CRM solutions. Skilled in deploying using Docker and CI/CD. <br />
              Currently leading the second phase of Clean2GO — a smart waste management platform using Jetson-based edge AI, DeepStream, and custom object detection. I build end-to-end, production-ready systems that scale.

            </p>
            <p className="text-gray-400">
             
                I’m passionate about building scalable, real-world AI solutions that combine performance with usability.
            </p>
          </div>

          {/* Right: Image */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/img1.png"
              alt="Bentos Walker"
              className="rounded-lg shadow-md w-full max-w-sm object-cover"
            />
          </motion.div> */}
        </motion.div>


        {/* Testimonials Section */}
        <TestimonialCarousel />

      </div>

      {/* CTA Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 mb-24 bg-gray-900 text-white py-16 rounded-xl shadow-lg mx-6 sm:mx-12 md:mx-24 lg:mx-32"
      >
        <div className="max-w-5xl mx-auto text-center px-6 sm:px-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Are You Ready to kickstart your project with a touch of magic?
          </h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
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
      </motion.div> */}
    </section>
  );
}
