'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Content Director @ TechScale',
      content: 'This tool saved our team 20+ hours per week. The AI quality is exceptional.',
      avatar: 'SC',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'YouTube Creator',
      content: 'Turned my videos into blog posts that rank on Google. Incredible ROI.',
      avatar: 'MJ',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Agency Owner',
      content: 'Our agency bills $10k/month extra thanks to this tool. Game changer.',
      avatar: 'PP',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Startup Founder',
      content: 'From one podcast to a month of content. The AI gets better every day.',
      avatar: 'DK',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Course Creator',
      content: 'Multilingual support is flawless. Reaching global audiences effortlessly.',
      avatar: 'ER',
      rating: 5,
    },
    {
      name: 'Alex Turner',
      role: 'SEO Specialist',
      content: 'SEO-optimized content that actually ranks. Beats human writers.',
      avatar: 'AT',
      rating: 5,
    },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full mb-4">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted by Creators Worldwide</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of content creators scaling their output
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900">
            <div className="text-3xl font-bold text-indigo-600">4.9/5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900">
            <div className="text-3xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900">
            <div className="text-3xl font-bold text-purple-600">10K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900">
            <div className="text-3xl font-bold text-yellow-600">2.5M+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Content Pieces Created</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
