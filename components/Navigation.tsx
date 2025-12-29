'use client'

import { useState } from 'react'
import { Menu, X, Sparkles, User, LogIn } from 'lucide-react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                AI Repurposer
              </span>
            </div>
            
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                {['Features', 'Templates', 'Pricing', 'Examples', 'API'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              <LogIn className="w-4 h-4 inline mr-2" />
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium">
              Get Started Free
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t border-gray-200 dark:border-gray-800"
        >
          <div className="px-4 py-4 space-y-4">
            {['Features', 'Templates', 'Pricing', 'Examples', 'API'].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium border border-gray-300 dark:border-gray-700 rounded-lg">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium">
                Get Started Free
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navigation
