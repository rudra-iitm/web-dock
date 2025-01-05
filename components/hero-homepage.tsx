'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const codeEditorControls = useAnimation()

  useEffect(() => {
    if (isHovered) {
      codeEditorControls.start({
        scale: 1.02,
        transition: { duration: 0.3 }
      })
    } else {
      codeEditorControls.start({
        scale: 1,
        transition: { duration: 0.3 }
      })
    }
  }, [isHovered, codeEditorControls])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <main className="container mx-auto px-4 h-screen flex items-center">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex flex-col items-center'>
            <div className="flex items-center space-x-2">
            <svg width='120' height='120' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z" fill="#020B3F"/>
                <path d="M20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8Z" fill="white"/>
                <path d="M20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11Z" fill="#020B3F"/>
                <path d="M23 17.5C23 16.6716 23.6716 16 24.5 16H28.5C29.3284 16 30 16.6716 30 17.5V21.5C30 22.3284 29.3284 23 28.5 23H24.5C23.6716 23 23 22.3284 23 21.5V17.5Z" fill="#34A853"/>
                <path d="M10 26.5C10 25.6716 10.6716 25 11.5 25H15.5C16.3284 25 17 25.6716 17 26.5V30.5C17 31.3284 16.3284 32 15.5 32H11.5C10.6716 32 10 31.3284 10 30.5V26.5Z" fill="#FBBC05"/>
            </svg>
            <h1 className="text-8xl font-extrabold bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] bg-clip-text text-transparent drop-shadow-lg">
              Web Dock
            </h1>
            </div>
            <span className="text-3xl bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] bg-clip-text text-transparent">
                {" "}
                Dev Environments Inside Your Browser
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Experience the power of Node.js frameworks without any setup. Code, test, and deploy
            your applications seamlessly with WebDock.
          </motion.p>

          {/* Code Editor Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative mt-12"
          >
            <motion.div
              className={cn(
                "rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-xl",
                "transition-all duration-300",
                isHovered ? "shadow-[0_0_50px_rgba(10,31,125,0.5)]" : ""
              )}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                setMousePosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top
                })
              }}
              animate={codeEditorControls}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-radial from-[#0A1F7D]/20 to-transparent rounded-lg"
                style={{
                  background: isHovered
                    ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(10,31,125,0.2), transparent 50%)`
                    : "none",
                }}
              />
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-xs hover:bg-[#020B3F]/20 transition-colors duration-300"
                >
                  <Play className="w-4 h-4 mr-2" /> Run Code
                </Button>
              </div>
              <motion.pre
                className="text-sm text-gray-300 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <code>{`import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from WebDock! 🚀');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`}</code>
              </motion.pre>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -z-10 inset-0 bg-gradient-to-r from-[#020B3F]/40 to-[#0A1F7D]/40 blur-3xl"
              animate={{
                scale: isHovered ? 1.05 : 1,
                opacity: isHovered ? 0.8 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </main>
    </div>
  )
}