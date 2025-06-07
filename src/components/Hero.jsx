"use client"

import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <h2 className="text-xl md:text-2xl text-gray-300 font-light">Hello, I'm</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                            <span className="text-gradient">Niladri Chakraborty</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl md:text-3xl font-medium mb-8 h-16"
                    >
                        <TypeAnimation
                            sequence={[
                                'Full Stack Engineer',
                                2000,
                                'Aspiring Software Developer',
                                2000,
                                'Data Analytics Enthusiast',
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="text-gray-300"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <a href="#contact" className="px-8 py-3 rounded-full bg-gradient text-white font-medium shadow-lg hover-up shadow-indigo-500/20">
                            Hire Me
                        </a>
                        <a href="#projects" className="px-8 py-3 rounded-full bg-gray-800 text-white font-medium shadow-lg hover-up border border-gray-700">
                            My Work
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}