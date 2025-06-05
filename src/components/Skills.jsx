"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiDatabase, FiLayers, FiServer, FiTool } from 'react-icons/fi'

export default function Skills() {
    const progressRefs = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-progress')
                    }
                })
            },
            { threshold: 0.5 }
        )

        progressRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => {
            progressRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref)
            })
        }
    }, [])

    const skills = [
        { name: 'Java', percentage: 70 },
        { name: 'JavaScript', percentage: 60 },
        { name: 'Python', percentage: 65 },
        { name: 'SpringBoot', percentage: 65 },
        { name: 'React.js', percentage: 60 },
        { name: 'Next.js', percentage: 55 },
        { name: 'Express.js', percentage: 60 },
        { name: 'Tailwind CSS', percentage: 75 },
        { name: 'MongoDB', percentage: 60 },
        { name: 'PostgreSQL', percentage: 70 },
    ]

    const categories = [
        {
            icon: <FiMonitor className="w-8 h-8" />,
            title: 'Frontend Development',
            skills: ['Next.js', 'React.js', 'Redux.js', 'Tailwind CSS']
        },
        {
            icon: <FiServer className="w-8 h-8" />,
            title: 'Backend Development',
            skills: ['SpringBoot', 'Node.js', 'Express.js']
        },
        {
            icon: <FiDatabase className="w-8 h-8" />,
            title: 'Database Management',
            skills: ['MongoDB', 'PostgreSQL', 'MySQL']
        },
        {
            icon: <FiTool className="w-8 h-8" />,
            title: 'Testing & Tools',
            skills: ['Postman', 'Git', 'Docker']
        }
    ]

    return (
        <section id="skills" className="py-20 bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient mx-auto"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                        I've developed expertise in various technologies across the full stack development spectrum,
                        enabling me to build complete, scalable solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between mb-2">
                                <h3 className="font-medium text-white">{skill.name}</h3>
                                <span>{skill.percentage}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                <div
                                    ref={(el) => (progressRefs.current[index] = el)}
                                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                                    style={{ '--percent': `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover-up"
                        >
                            <div className="w-16 h-16 rounded-lg bg-gradient flex items-center justify-center mb-4">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="text-gray-400">
                                        • {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}