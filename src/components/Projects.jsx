"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiMaximize2, FiX } from 'react-icons/fi'
import { projects } from '@/constants/projects'

export default function Projects() {
    const [filter, setFilter] = useState('all')
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter)

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'game', name: 'Game' },
    ]

    const [activeProject, setActiveProject] = useState(null)

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient mx-auto"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                        Explore my latest projects showcasing my skills in web development, design, and problem-solving.
                        Each project reflects my passion for creating intuitive and impactful digital experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${filter === category.id
                                ? 'bg-gradient text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover-up"
                        >
                            <div className="relative overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                                <button
                                    onClick={() => setActiveProject(project)}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-900 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                                >
                                    <FiMaximize2 className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex space-x-3">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target='_blank'
                                            className="flex items-center text-sm text-gray-300 hover:text-white"
                                        >
                                            <FiExternalLink className="mr-1" /> Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.githubLink}
                                        target='_blank'
                                        className="flex items-center text-sm text-gray-300 hover:text-white"
                                    >
                                        <FiGithub className="mr-1" /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal */}
                {activeProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="absolute inset-0 bg-black bg-opacity-60"
                            onClick={() => setActiveProject(null)}
                        ></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative bg-gray-900 rounded-xl p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 border border-gray-700"
                        >
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
                            >
                                <FiX className="w-6 h-6" />
                            </button>

                            <div className="mb-6">
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                                />
                            </div>

                            <h2 className="text-2xl font-bold mb-4">{activeProject.title}</h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {activeProject.tech.map((tech, idx) => (
                                    <span key={idx} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="prose prose-invert max-w-none mb-6">
                                <p>{activeProject.description}</p>
                            </div>

                            <div className="flex space-x-4">
                                {activeProject.demoLink && (
                                    <a
                                        href={activeProject.demoLink}
                                        target='_blank'
                                        className="px-6 py-2 bg-gradient text-white rounded-full flex items-center"
                                    >
                                        <FiExternalLink className="mr-2" /> Live Demo
                                    </a>
                                )}
                                <a
                                    href={activeProject.githubLink}
                                    target='_blank'
                                    className="px-6 py-2 bg-gray-800 text-white rounded-full flex items-center"
                                >
                                    <FiGithub className="mr-2" /> View Code
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    )
}