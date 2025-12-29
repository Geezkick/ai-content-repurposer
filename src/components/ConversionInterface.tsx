'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ConversionInterface = () => {
  const [inputText, setInputText] = useState('')
  const [selectedInput, setSelectedInput] = useState('youtube')
  const [selectedOutput, setSelectedOutput] = useState('blog')
  const [isConverting, setIsConverting] = useState(false)
  const [output, setOutput] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    setWordCount(inputText.trim() ? inputText.split(/\s+/).length : 0)
    setCharCount(inputText.length)
  }, [inputText])

  const inputTypes = [
    { id: 'youtube', label: 'YouTube', color: 'from-red-500/20 to-orange-500/20', text: 'text-orange-300' },
    { id: 'article', label: 'Article', color: 'from-orange-500/20 to-amber-500/20', text: 'text-amber-300' },
    { id: 'twitter', label: 'Twitter', color: 'from-sky-500/20 to-blue-500/20', text: 'text-sky-300' },
    { id: 'linkedin', label: 'LinkedIn', color: 'from-blue-600/20 to-indigo-500/20', text: 'text-blue-300' },
    { id: 'transcript', label: 'Transcript', color: 'from-emerald-500/20 to-green-500/20', text: 'text-emerald-300' },
  ]

  const outputTypes = [
    { id: 'blog', label: 'Blog Post', color: 'from-purple-500/20 to-fuchsia-500/20', text: 'text-purple-300' },
    { id: 'thread', label: 'Twitter Thread', color: 'from-sky-500/20 to-cyan-500/20', text: 'text-cyan-300' },
    { id: 'linkedin', label: 'LinkedIn', color: 'from-blue-600/20 to-indigo-500/20', text: 'text-blue-300' },
    { id: 'newsletter', label: 'Newsletter', color: 'from-pink-500/20 to-rose-500/20', text: 'text-pink-300' },
    { id: 'summary', label: 'Summary', color: 'from-amber-500/20 to-yellow-500/20', text: 'text-yellow-300' },
  ]

  const handleConvert = () => {
    if (!inputText.trim()) {
      alert('Please enter content to convert')
      return
    }

    setIsConverting(true)
    
    setTimeout(() => {
      const mockOutput = `# 🎨 AI-Generated Premium Content

## 📊 Analysis Complete

Based on your "${selectedInput}" content, here's your professionally crafted ${selectedOutput}:

### 🔥 Key Insights:
- Main Topic Identified
- Tone Analysis: Professional & Engaging
- SEO Optimization Applied
- Brand Voice Maintained

### ✨ Generated Content:

The future of content creation is here. With advanced AI technology, transform any input into premium, engaging content that resonates with your audience.

### 💫 Premium Features:
• Time Efficiency: Reduce creation time by 80%
• Quality Enhancement: Professional-grade output
• Multi-format Ready: One input, endless possibilities
• SEO Optimized: Higher ranking potential

### 🚀 Performance Metrics:
• Engagement Score: 94/100
• Readability: Excellent
• Estimated Reach: 2.5x increase
• Time Saved: ~4 hours

---

*Premium AI content generation complete. Ready to publish!*`

      setOutput(mockOutput)
      setIsConverting(false)
      
      // Success animation trigger
      document.querySelectorAll('.success-glow').forEach(el => {
        el.classList.add('animate-pulse')
        setTimeout(() => el.classList.remove('animate-pulse'), 1000)
      })
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      <div className="gradient-border p-1 premium-shadow">
        <div className="glass-premium rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex px-6 py-3 bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-full mb-6"
            >
              <span className="text-lg font-semibold shimmer-text">
                PREMIUM AI CONVERSION STUDIO
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">
              Transform <span className="shimmer-text">Instantly</span>
            </h2>
            <p className="text-gray-400">
              Professional-grade AI conversion with premium features
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  <span className="shimmer-text">Input Content</span>
                </h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full">
                    <span className="text-orange-300">Ready</span>
                  </div>
                  <button
                    onClick={() => { setInputText(''); setOutput('') }}
                    className="px-3 py-1 button-secondary rounded-lg text-sm"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Input Type Selector */}
              <div className="flex flex-wrap gap-2">
                {inputTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedInput(type.id)}
                    className={`px-4 py-3 rounded-xl transition-all ${
                      selectedInput === type.id
                        ? `bg-gradient-to-r ${type.color} border border-white/20 ${type.text}`
                        : 'bg-white/5 hover:bg-white/10 text-gray-400'
                    }`}
                  >
                    <span className="font-medium">{type.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Text Area */}
              <div className="relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste your content here... ✨"
                  className="w-full h-72 p-6 bg-white/5 border-2 border-orange-500/20 rounded-2xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none resize-none text-white placeholder-gray-500"
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-4 text-sm">
                  <div className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full">
                    <span className="text-orange-300">{wordCount} words</span>
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                    <span className="text-purple-300">{charCount} chars</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  <span className="shimmer-text">AI Output</span>
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-500"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Type Selector */}
              <div className="flex flex-wrap gap-2">
                {outputTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedOutput(type.id)}
                    className={`px-4 py-3 rounded-xl transition-all ${
                      selectedOutput === type.id
                        ? `bg-gradient-to-r ${type.color} border border-white/20 ${type.text}`
                        : 'bg-white/5 hover:bg-white/10 text-gray-400'
                    }`}
                  >
                    <span className="font-medium">{type.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Output Area */}
              <div className="relative">
                <textarea
                  value={output}
                  readOnly
                  className="w-full h-72 p-6 bg-gradient-to-b from-white/5 to-white/10 border-2 border-purple-500/20 rounded-2xl focus:outline-none resize-none text-white placeholder-gray-500"
                  placeholder="AI-generated premium content will appear here..."
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      navigator.clipboard.writeText(output)
                      alert('Copied to clipboard!')
                    }}
                    disabled={!output}
                    className="px-4 py-3 button-premium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Copy
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const blob = new Blob([output], { type: 'text/plain' })
                      const url = URL.createObjectURL(blob)
                      const a = document.createElement('a')
                      a.href = url
                      a.download = `ai-content-${Date.now()}.txt`
                      a.click()
                    }}
                    disabled={!output}
                    className="px-4 py-3 button-secondary rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Download
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Convert Button & Stats */}
          <div className="space-y-8">
            {/* Convert Button */}
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConvert}
                disabled={isConverting || !inputText.trim()}
                className="px-16 py-5 button-premium text-white font-bold rounded-2xl text-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isConverting ? 'Processing...' : 'Convert with Premium AI'}
                </span>
                {isConverting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-600"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 border-t border-orange-500/20">
              {[
                { value: '2.4s', label: 'Processing', color: 'from-orange-500 to-amber-500' },
                { value: '94%', label: 'Accuracy', color: 'from-emerald-500 to-green-500' },
                { value: '10K+', label: 'Conversions', color: 'from-purple-500 to-fuchsia-500' },
                { value: '4.9/5', label: 'Rating', color: 'from-amber-500 to-yellow-500' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-premium p-6 rounded-2xl text-center hover:scale-105 transition-transform group"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ConversionInterface
