'use client'

import { motion } from 'framer-motion'

const templates = [
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'React framework for production',
    icon: '⚡',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'express',
    name: 'Express',
    description: 'Fast, unopinionated web framework',
    icon: '🚂',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    description: 'Progressive Node.js framework',
    icon: '🐱',
    color: 'from-red-500 to-red-700',
  },
  {
    id: 'fastify',
    name: 'Fastify',
    description: 'Fast and low overhead web framework',
    icon: '🏃',
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    id: 'remix',
    name: 'Remix',
    description: 'Full stack React framework',
    icon: '💿',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'nuxt',
    name: 'Nuxt.js',
    description: 'Vue.js framework',
    icon: '💚',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 'gatsby',
    name: 'Gatsby',
    description: 'Static site generator for React',
    icon: '💜',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    id: 'adonis',
    name: 'AdonisJS',
    description: 'Full-stack framework',
    icon: '🔷',
    color: 'from-cyan-500 to-cyan-700',
  }
]

interface TemplateListProps {
    onSelectTemplate: (templateName: string) => void
  }

export function TemplateList({ onSelectTemplate }: TemplateListProps) {
  return (
    <div className="p-4 space-y-4">
      {templates.map((template, index) => (
        <motion.div
          key={template.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.03,
            transition: { duration: 0.2 }
          }}
          onClick={() => onSelectTemplate(template.name)}
          role="button"
          tabIndex={0}
          aria-label={`Select ${template.name} template`}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center p-4 rounded-lg bg-gradient-to-r ${template.color} cursor-pointer transition-all duration-300 shadow-lg`}
        >
          <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4">
            <span className="text-2xl">{template.icon}</span>
          </div>
          <div>
            <div className="font-medium text-lg">{template.name}</div>
            <div className="text-sm text-white text-opacity-80">{template.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

