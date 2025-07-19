import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = ["Home", "About", "Project", "Experience", "Contact"];

    const [contactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    return (
        <section className="px-4 pt-6 pb-12">
            <header className="absolute w-full z-50 transition-all duration-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
                        className="flex items-center"
                    >
                        <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                            Abhigwal Yadav
                        </span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <nav className="lg:flex hidden space-x-8">
                        {navItems.map((item, index) => {
                            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                            return (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.2 }}
                                >
                                    <Link
                                        to={path}
                                        className="relative text-white hover:text-violet-600 dark:text-gray-200 font-medium transition-colors duration-300 group"
                                    >
                                        {item}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* Desktop Icons + Hire Me */}
                    <div className="md:flex hidden items-center space-x-4">
                        {/*
                            { Icon: FiGithub, url: "https://github.com/Abhigwal123" },
                            { Icon: FiLinkedin, url: "https://www.linkedin.com/in/abhishekyadav-web/" },
                            { Icon: FiTwitter, url: "https://x.com/abhigwal25944" }
                        */}
                        { [
                            
                            // { Icon: FiLinkedin, url: "https://www.linkedin.com/in/abhishekyadav-web/" },
                            { Icon: FiTwitter, url: "https://x.com/abhigwal25944" }
                        ].map(({ Icon, url }, i) => (
                            <motion.a
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3 + i * 0.1, duration: 0.8 }}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
                        >
                            <Link
                                to="https://cal.com/abhishek-yadav-fdr7zx/15min"
                                className="ml-4 inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
                            >
                                Hire me
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            whileTap={{ scale: 0.7 }}
                            onClick={toggleMenu}
                            className="text-gray-300"
                        >
                            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:hidden overflow-hidden bg-gray-900 dark:bg-gray-800 shadow-lg px-4 py-5 space-y-5"
                >
                    <nav className="flex flex-col space-y-3">
                        {navItems.map(item => {
                            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                            return (
                                <Link
                                    to={path}
                                    onClick={toggleMenu}
                                    className="text-gray-300 font-medium py-2"
                                    key={item}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="pt-4 border-t border-gray-700">
                        <div className="flex space-x-5">
                            <a href="https://github.com/Abhigwal123" target="_blank" rel="noopener noreferrer">
                                <FiGithub className="h-5 w-5 text-gray-300" />
                            </a>
                            <a href="https://x.com/abhigwal25944" target="_blank" rel="noopener noreferrer">
                                <FiTwitter className="h-5 w-5 text-gray-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/abhishekyadav-web/" target="_blank" rel="noopener noreferrer">
                                <FiLinkedin className="h-5 w-5 text-gray-300" />
                            </a>
                        </div>
                        <button
                            onClick={() => {
                                toggleMenu();
                                openContactForm();
                            }}
                            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 text-white font-bold"
                        >
                            Contact Me
                        </button>
                    </div>
                </motion.div>


            </header>
        </section>
    );
};

export default Header;
