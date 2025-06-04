"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { EMAIL, LOCATION } from '@/constants/personal'
import { FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN } from '@/constants/social'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitMessage({
                type: 'success',
                text: 'Your message has been sent successfully!',
            })

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })

            // Clear message after 5 seconds
            setTimeout(() => {
                setSubmitMessage(null)
            }, 5000)
        }, 1500)
    }

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
                    <div className="w-24 h-1 bg-gradient mx-auto"></div>
                    <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                        Feel free to reach out using the contact form or through any of the provided channels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {submitMessage && (
                                <div className={`p-3 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                                    }`}>
                                    {submitMessage.text}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 rounded-lg bg-gradient text-white font-medium shadow-lg hover-up flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        <FiSend className="mr-2" /> Send Message
                                    </span>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center mr-4 shrink-0">
                                        <FiMapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Location</h4>
                                        <p className="text-gray-400">{LOCATION}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center mr-4 shrink-0">
                                        <FiMail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-1">Email</h4>
                                        <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-white">{EMAIL}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-medium mb-4">Follow Me</h4>
                                <div className="flex space-x-3">
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
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}