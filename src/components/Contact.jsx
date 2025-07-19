import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="text-white pt-24 pb-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-xl p-8 md:p-12 shadow-lg space-y-10"
                >
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-sm uppercase tracking-widest text-gray-500 font-medium"
                        >
                            Contact
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-4xl md:text-5xl font-bold text-white mt-2"
                        >
                            Get in Touch with Me!
                        </motion.h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Left - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <p className="text-sm text-gray-400 uppercase">My Address:</p>
                                <p className="text-lg font-semibold">Abhishek, Yadav , India</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 uppercase">Contact Number:</p>
                                <p className="text-lg font-semibold">+91 9974873358</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 uppercase">Email Us:</p>
                                <p className="text-lg font-semibold">abhishekyadav997487@gmail.com</p>
                            </div>
                        </motion.div>

                        {/* Right - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center space-y-8"
                        >
                            <p className="text-lg text-gray-300 text-center">
                                Want to connect directly? Book a call with me!
                            </p>
                            <a
                                href="https://cal.com/abhishek-yadav-fdr7zx/15min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 shadow"
                            >
                                Book a Call
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
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
                        Let's Work Together
                        </a>
                </div>
            </motion.div>
        </section>
    );
}
