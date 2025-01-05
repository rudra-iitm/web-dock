'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'
import { Logo } from './Logo'
import { SocialIcon } from './footer'

export function Header() {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-between px-10 py-4 bg-black h-[135px]">
        {/* Logo */}
        <Logo textSize={'4xl'} logoSize={'70'} />

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
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
      </div>

      <div className="absolute left-0 w-full overflow-hidden leading-[0] transform">
        <svg
          className="relative block w-full h-[40px]"
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
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#separatorGradient)"
          ></path>
        </svg>
      </div>
    </header>
  )
}
