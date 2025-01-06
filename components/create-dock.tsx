'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Search, Globe, Lock, Zap } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TemplateList } from './template-list'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'

export function CreateDock() {
    const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0A1F7D] to-[#020B3F]">
            Create a new Dock
          </span>
        </motion.h2>
        
        <Tabs defaultValue="template" className="mb-8">
          <TabsList className="bg-zinc-900 border-none w-full">
            <TabsTrigger value="template" className=" w-1/2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[rgb(10,31,125)] data-[state=active]:to-[#020B3F] text-white data-[state=active]:text-white">
              Choose a Template
            </TabsTrigger>
            <TabsTrigger value="github" className="w-1/2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0A1F7D] data-[state=active]:to-[#020B3F] text-white data-[state=active]:text-white">
              Import from GitHub
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
              <Input 
                placeholder="Search Templates"
                className="pl-10 bg-zinc-900 border-[#0A1F7D] focus:border-[#020B3F]"
              />
            </div>
            <ScrollArea className="h-[400px] rounded-md border border-zinc-800">
              <TemplateList onSelectTemplate={setSelectedTemplate} />
            </ScrollArea>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <label className="block text-sm mb-2">Title</label>
              <Input 
                placeholder="Name your dock"
                className="bg-zinc-900 border-zinc-700 focus:border-[#0A1F7D]"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Selected Template</label>
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                {selectedTemplate ? (
                  <span className="text-blue-400">{selectedTemplate}</span>
                ) : (
                  <span className="text-zinc-500">No template selected</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm mb-4">Privacy</label>
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer"
                >
                  <Globe className="mr-3 text-blue-400" />
                  <div className="flex-1">
                    <div>Public</div>
                    <div className="text-sm text-zinc-400">Anyone can view and fork this dock.</div>
                  </div>
                  <input type="radio" name="privacy" className="text-[#0A1F7D]" defaultChecked />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-3 rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer"
                >
                  <Lock className="mr-3 text-purple-400" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      Private
                      <Badge className="bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] text-white">
                        Pro
                      </Badge>
                    </div>
                    <div className="text-sm text-zinc-400">Only you can see and edit this dock.</div>
                  </div>
                  <input type="radio" name="privacy" className="text-[#0A1F7D]" />
                </motion.div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-[#0A1F7D] to-[#020B3F] hover:opacity-90 text-white"
              >
                <Zap className="mr-2" />
                Create Dock
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

