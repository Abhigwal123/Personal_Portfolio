import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen w-full bg-black text-white px-4 pt-24 pb-20">

            <motion.div
                className="flex flex-col lg:flex-row items-stretch justify-center max-w-6xl mx-auto gap-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >

                {/* Left Side - Image Box */}
                <div className="w-full lg:w-1/2 bg-gray-900 flex flex-col justify-center items-center p-10 rounded-lg shadow-lg text-center">
                    <img
                        src="/img.png"
                        alt="Preety Profile"
                        className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-violet-600 shadow-2xl mb-4"
                    />
                    <h1 className="text-4xl font-bold text-white mb-1">Abhigwal Yadav</h1>
                    <p className="text-gray-400 text-sm md:text-base">
                        Im a Fullstack Developer for creating dynamic and responsive web applications ,RAG models,CRM and more.
                    </p>
                </div>

                {/* Right Side - Text + Buttons + Company */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {/* Text and Buttons */}
                    <div className="bg-gray-900 p-10 rounded-lg shadow-lg flex flex-col justify-center">
                        <p className="text-xl text-gray-300 mb-2">Hello There!</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-violet-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            I’m Abhigwal Yadav 
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
                            I specialize in full-stack development, focusing on building scalable web applications, AI-powered RAG systems, and custom CRM platforms
                            <br /> Available for Freelancing.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://cal.com/abhishek-yadav-fdr7zx/15min"
                                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold transition duration-300"
                            >
                                Hire Me
                            </a>
                            <a
                                href="https://cal.com/abhishek-yadav-fdr7zx/15min"
                                className="px-6 py-3 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white rounded-full font-semibold transition duration-300"
                                download
                            >
                                Book A Call
                            </a>
                        </div>
                    </div>

                    {/* Company Profile Section */}
                    <div className="bg-gray-900 p-8 rounded-lg shadow-lg relative">
                        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Companies I Worked With</h2>
                        <div className="overflow-hidden w-full">
                            <div
                                className="flex gap-8 items-center company-marquee"
                                style={{
                                    minWidth: "100%",
                                }}
                            >
                                {[
                                    "Q Spders Pvt ltd",
                                    "SSV Infoech",
                                    "Tomato Tech LLP",
                                    
                                ].concat([
                                    "Q Spders Pvt ltd",
                                    "SSV Infoech",
                                    "Tomato Technology LLP",
                                    "Tech Mahindra",
                                    "Wipro",
                                    "Infosys",
                                    "TCS",
                                    "Capgemini"
                                ]).map((company, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-gray-800 py-4 px-8 rounded text-center text-gray-300 text-base font-semibold shadow"
                                        style={{ minWidth: 220 }}
                                    >
                                        {company}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <style>
                            {`
                            .company-marquee {
                                animation: company-marquee 32s linear infinite;
                                will-change: transform;
                            }
                            @keyframes company-marquee {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            `}
                        </style>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
