"use client"

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi'
import { EMAIL, LOCATION, NAME } from '@/constants/personal'
import { FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN } from '@/constants/social'
import { PROFILE_IMAGE } from '@/constants/assets'

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative w-full px-4 sm:px-0"
                    >
                        <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden relative w-full md:w-4/5 lg:w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient opacity-20 z-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                    src={PROFILE_IMAGE}
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-24 h-24 sm:w-32 sm:h-32 bg-gradient rounded-lg -z-10"></div>
                            <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-24 h-24 sm:w-32 sm:h-32 bg-gray-800 rounded-lg border border-gray-700 -z-10"></div>
                        </div>
                    </motion.div>

                    <div className="relative overflow-x-hidden px-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Full Stack Engineer</h3>
                            <p className="text-gray-300 mb-6">
                                I'm a passionate full stack engineer with 2+ years of experience crafting beautiful, functional websites and applications. I blend technical expertise with creative problem-solving to build seamless digital experiences.
                            </p>
                            <p className="text-gray-300 mb-6">
                                My approach combines clean code, innovative design, and user-centered thinking. I specialize in modern Java, JavaScript frameworks, responsive design, and building scalable web applications.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div>
                                    <p className="font-medium mb-1">Name:</p>
                                    <p className="text-gray-400">{NAME}</p>
                                </div>
                                <div>
                                    <p className="font-medium mb-1">Email:</p>
                                    <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-white">{EMAIL}</a>
                                </div>
                                <div>
                                    <p className="font-medium mb-1">Location:</p>
                                    <p className="text-gray-400">{LOCATION}</p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <a href={GITHUB} target='_blank' className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-all">
                                    <FiGithub />
                                </a>
                                <a href={LINKEDIN} target='_blank' className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-all">
                                    <FiLinkedin />
                                </a>
                                <a href={INSTAGRAM} target='_blank' className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-all">
                                    <FiInstagram />
                                </a>
                                <a href={FACEBOOK} target='_blank' className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 hover:bg-gray-700 transition-all">
                                    <FiFacebook />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}