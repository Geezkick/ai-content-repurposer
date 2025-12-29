'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Zap, 
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import ConversionInterface from '@/components/ConversionInterface'
import PricingSection from '@/components/PricingSection'
import Testimonials from '@/components/Testimonials'
import FeatureGrid from '@/components/FeatureGrid'

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
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Content Transformation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Transform{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Any Content
              </span>
              {' '}Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                Everything
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Turn YouTube videos into blog posts, articles into Twitter threads, podcasts into newsletters - 
              all with AI magic. Start monetizing your content today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <button 
                onClick={() => document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Creating Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-indigo-500 transition-all duration-300"
              >
                <Zap className="mr-2 w-5 h-5 text-yellow-500" />
                Upgrade to Premium
              </button>
            </div>
          </motion.div>

          {/* Main Converter */}
          <div id="converter" className="mb-32">
            <ConversionInterface />
          </div>

          {/* Features */}
          <div className="mb-32">
            <h2 className="text-4xl font-bold text-center mb-12">Everything You Need to Scale Content</h2>
            <FeatureGrid />
          </div>

          {/* Pricing */}
          <div id="pricing" className="mb-32">
            <PricingSection />
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <Testimonials />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="gradient-bg rounded-3xl p-12 text-center text-white premium-shadow"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to 10X Your Content Output?</h3>
            <p className="text-xl mb-8 opacity-90">Join thousands of content creators saving hours every week</p>
            <button className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl">
              Get Started Free for 14 Days
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
              <CheckCircle className="w-4 h-4" />
              <span>100+ content templates</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
