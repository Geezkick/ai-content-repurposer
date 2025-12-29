'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Lock, 
  Globe, 
  BarChart, 
  Users, 
  Cloud, 
  Shield, 
  RefreshCw,
  Code,
  Palette,
  Database,
  Clock
} from 'lucide-react'

const FeatureGrid = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Convert content in seconds with our optimized AI pipeline',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: Globe,
      title: '50+ Languages',
      description: 'Support for content in any language with native quality',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: BarChart,
      title: 'SEO Optimized',
      description: 'AI-powered SEO suggestions for maximum visibility',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration features for teams',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Secure cloud storage for all your content',
      color: 'text-sky-500',
      bgColor: 'bg-sky-50 dark:bg-sky-900/20'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: RefreshCw,
      title: 'Auto-updates',
      description: 'Always get the latest AI models automatically',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Code,
      title: 'API Access',
      description: 'Full REST API for custom integrations',
      color: 'text-gray-500',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20'
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`${feature.bgColor} p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-lg ${feature.bgColor}`}>
              <feature.icon className={`w-6 h-6 ${feature.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default FeatureGrid
