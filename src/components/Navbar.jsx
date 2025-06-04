"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-2' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end md:justify-center h-16">

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline gap-8">
                            <Link href="#about" className="px-3 py-2 rounded-md font-medium hover:bg-gray-800 hover:text-white transition-all">
                                About
                            </Link>
                            <Link href="#skills" className="px-3 py-2 rounded-md font-medium hover:bg-gray-800 hover:text-white transition-all">
                                Skills
                            </Link>
                            <Link href="#projects" className="px-3 py-2 rounded-md font-medium hover:bg-gray-800 hover:text-white transition-all">
                                Projects
                            </Link>
                            <Link href="#contact" className="px-3 py-2 rounded-md font-medium hover:bg-gray-800 hover:text-white transition-all">
                                Contact
                            </Link>
                            <Link href="/resume.pdf" target='_blank' className="px-4 py-2 rounded-md font-medium bg-gradient text-white shadow-lg hover:opacity-90 transition-all">
                                Resume
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="glass-effect px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                        About
                    </Link>
                    <Link href="#skills" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                        Skills
                    </Link>
                    <Link href="#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                        Projects
                    </Link>
                    <Link href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                        Testimonials
                    </Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                        Contact
                    </Link>
                    <Link href="/resume.pdf" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium bg-gradient text-white shadow-lg hover:opacity-90 mt-3">
                        Resume
                    </Link>
                </div>
            </div>
        </nav>
    )
}