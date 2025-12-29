'use client'

import { motion } from 'framer-motion'
import ConversionInterface from '@/components/ConversionInterface'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex px-8 py-4 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-pink-500/20 border border-orange-500/30 rounded-full mb-10"
            >
              <span className="text-lg font-bold bg-gradient-to-r from-orange-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                PREMIUM AI CONTENT STUDIO
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-10"
            >
              <span className="block">
                Transform{' '}
                <span className="shimmer-text">Any</span>
              </span>
              <span className="block">
                <span className="shimmer-text">Content</span> Into
              </span>
              <span className="block">
                <span className="shimmer-text">Everything</span>
              </span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto mb-16"
            >
              Professional AI content transformation with our exclusive orange-purple premium theme
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-24"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 text-2xl font-bold button-premium rounded-2xl"
              >
                Start Creating Free
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 text-2xl font-bold button-secondary rounded-2xl"
              >
                Upgrade to PRO
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
            >
              {[
                { value: '10K+', label: 'Active Creators', color: 'from-orange-500 to-amber-500' },
                { value: '2.5M+', label: 'Content Pieces', color: 'from-emerald-500 to-green-500' },
                { value: '50+', label: 'Languages', color: 'from-purple-500 to-fuchsia-500' },
                { value: '4.9/5', label: 'Rating', color: 'from-amber-500 to-yellow-500' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="gradient-border p-1 group cursor-pointer"
                >
                  <div className="glass-premium p-8 rounded-xl text-center">
                    <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                      {stat.value}
                    </div>
                    <div className="text-lg text-gray-400 mt-4">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Converter Component */}
          <div id="converter" className="mb-40">
            <ConversionInterface />
          </div>

          {/* Premium CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="gradient-border p-2 premium-shadow"
          >
            <div className="glass-premium rounded-3xl p-16 text-center">
              <h3 className="text-5xl font-bold mb-8">
                Ready to{' '}
                <span className="shimmer-text">10X Your Output</span>?
              </h3>
              <p className="text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
                Join thousands of premium content creators with our exclusive orange-purple AI platform
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 text-2xl font-bold button-premium rounded-2xl"
              >
                Start Free 14-Day Trial
              </motion.button>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-lg">
                {[
                  'No credit card required',
                  'Cancel anytime',
                  'Premium templates',
                  'Priority support',
                  'White-label option',
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-500"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
