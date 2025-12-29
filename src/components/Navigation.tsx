'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showFeatures, setShowFeatures] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features', hasDropdown: true },
    { label: 'Templates', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Showcase', href: '#' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-premium border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 orange-purple-gradient rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                  <div className="w-6 h-6 rounded bg-white/20"></div>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                  AI Repurposer
                </span>
                <div className="text-xs text-orange-300/70">PREMIUM EDITION</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onMouseEnter={() => setShowFeatures(true)}
                      onMouseLeave={() => setShowFeatures(false)}
                      className="text-gray-300 hover:text-orange-300 transition-colors group relative px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                      <span>{item.label}</span>
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-orange-300 transition-colors relative px-4 py-2 rounded-lg hover:bg-white/5 group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )}
                  
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {showFeatures && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          onMouseEnter={() => setShowFeatures(true)}
                          onMouseLeave={() => setShowFeatures(false)}
                          className="absolute top-full left-0 mt-2 glass-premium rounded-xl p-4 min-w-[200px]"
                        >
                          <div className="space-y-2">
                            {['Video to Blog', 'Article to Thread', 'Podcast to Newsletter', 'Multi-language'].map((feature) => (
                              <a
                                key={feature}
                                href="#"
                                className="block px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-purple-500/10 transition-colors text-sm text-gray-300 hover:text-white group/item"
                              >
                                <div className="flex items-center justify-between">
                                  <span>{feature}</span>
                                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 button-secondary rounded-xl text-gray-300 hover:text-white transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 button-premium text-white rounded-xl font-semibold"
              >
                Start Free Trial
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-orange-300 hover:bg-white/10 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-20 left-0 right-0 z-40 glass-premium border-t border-orange-500/20"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-purple-500/10 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-orange-500/10">
                <button className="w-full py-3 px-4 button-secondary rounded-xl text-white">
                  Sign In
                </button>
                <button className="w-full py-3 px-4 button-premium rounded-xl font-semibold">
                  Start Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
