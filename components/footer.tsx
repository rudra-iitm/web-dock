'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, ChevronRight } from 'lucide-react'
import { Logo } from './Logo'

export const Footer = () => {
  return (
    <footer className="relative mt-16 bg-black text-white">
      {/* Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-full">
        <svg 
          className="relative block w-full h-[50px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="separatorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0A1F7D" />
              <stop offset="100%" stopColor="#020B3F" />
            </linearGradient>
          </defs>
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="url(#separatorGradient)"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.h2 
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo textSize="[2rem]" logoSize="60" />
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Write and run Node.js frameworks like Next.js and React directly in your browser. 
              Experience seamless development without the need for local setups.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SocialIcon Icon={Github} href="https://github.com" />
              <SocialIcon Icon={Twitter} href="https://twitter.com" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
            </motion.div>
          </div>
          <div>
            <motion.h3 
              className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </motion.ul>
          </div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-400">© {new Date().getFullYear()} Web Dock. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

const SocialIcon = ({ Icon, href }: { Icon: React.ElementType, href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* @ts-expect-error: Icon does not have a size prop in its type definition */}
    <Icon size={24} />
  </motion.a>
)

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link href={href} passHref>
      <motion.a
        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
        whileHover={{ x: 5 }}
      >
        <ChevronRight className="mr-2 opacity-0 group-hover:opacity-100 text-[#0A1F7D]" size={16} />
        <span className="group-hover:bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] group-hover:bg-clip-text group-hover:text-transparent">
          {children}
        </span>
      </motion.a>
    </Link>
  </li>
)

