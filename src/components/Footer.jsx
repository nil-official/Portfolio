"use client"

import Link from 'next/link'
import { FiArrowUp } from 'react-icons/fi'
import { EMAIL, LOCATION, NAME } from '@/constants/personal'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="bg-gray-950 pt-12 pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <p className="text-gray-400 mt-4 max-w-md">
                            Creating beautiful, functional, and user-friendly web applications is my passion.
                            Let's work together to bring your vision to life.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Me</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">{LOCATION}</li>
                            <li>
                                <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-white transition-colors">{EMAIL}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {NAME}. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-all"
                    >
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    )
}