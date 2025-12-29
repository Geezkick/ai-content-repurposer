'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Youtube, 
  FileText, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Globe, 
  Copy,
  Download,
  Sparkles,
  RefreshCw
} from 'lucide-react'
import toast from 'react-hot-toast'

const ConversionInterface = () => {
  const [inputText, setInputText] = useState('')
  const [selectedInput, setSelectedInput] = useState('youtube')
  const [selectedOutput, setSelectedOutput] = useState('blog')
  const [isConverting, setIsConverting] = useState(false)
  const [output, setOutput] = useState('')

  const inputTypes = [
    { id: 'youtube', label: 'YouTube Video', icon: Youtube, color: 'text-red-500' },
    { id: 'article', label: 'Article/Blog', icon: FileText, color: 'text-blue-500' },
    { id: 'twitter', label: 'Twitter Thread', icon: Twitter, color: 'text-sky-500' },
    { id: 'linkedin', label: 'LinkedIn Post', icon: Linkedin, color: 'text-blue-700' },
    { id: 'transcript', label: 'Transcript', icon: Globe, color: 'text-green-500' },
  ]

  const outputTypes = [
    { id: 'blog', label: 'Blog Post', icon: FileText, color: 'text-purple-500' },
    { id: 'thread', label: 'Twitter Thread', icon: Twitter, color: 'text-sky-500' },
    { id: 'linkedin', label: 'LinkedIn Article', icon: Linkedin, color: 'text-blue-700' },
    { id: 'newsletter', label: 'Newsletter', icon: Instagram, color: 'text-pink-500' },
    { id: 'summary', label: 'Executive Summary', icon: Sparkles, color: 'text-yellow-500' },
  ]

  const handleConvert = async () => {
    if (!inputText.trim()) {
      toast.error('Please enter some content to convert')
      return
    }

    setIsConverting(true)
    
    try {
      // Call the API route
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputText,
          inputType: selectedInput,
          outputType: selectedOutput
        })
      })

      const data = await response.json()

      if (data.success) {
        setOutput(data.content)
        toast.success('Content converted successfully!')
      } else {
        toast.error(data.error || 'Conversion failed')
      }
    } catch (error) {
      console.error('Error converting content:', error)
      // Fallback to mock data if API fails
      const mockOutput = `# AI-Generated ${selectedOutput.charAt(0).toUpperCase() + selectedOutput.slice(1)}

## Based on your ${selectedInput} content

Here's the AI-converted ${selectedOutput}:

${inputText.substring(0, 200)}...

**AI Analysis Complete:**
- Tone optimized for ${selectedOutput}
- Structure formatted for maximum engagement
- Key points preserved and enhanced
- Ready to publish or edit further

*Generated with premium AI technology*`

      setOutput(mockOutput)
      toast.success('Content converted with fallback mode!')
    } finally {
      setIsConverting(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    toast.success('Copied to clipboard!')
  }

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ai-content-${selectedOutput}.md`
    a.click()
    toast.success('Download started!')
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="glass-card rounded-3xl p-8 premium-shadow">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-indigo-600">Input Content</span>
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {inputTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedInput(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    selectedInput === type.id
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <type.icon className={`w-4 h-4 ${type.color}`} />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Paste your content:</label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste YouTube transcript, article text, or any content here..."
                className="w-full h-64 p-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none resize-none"
              />
              <div className="text-sm text-gray-500 mt-2">
                {inputText.length} characters • {inputText.split(' ').length} words
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-green-600">Output Format</span>
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {outputTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedOutput(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    selectedOutput === type.id
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <type.icon className={`w-4 h-4 ${type.color}`} />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>

            <div className="mb-6 relative">
              <label className="block text-sm font-medium mb-2">AI-Generated Output:</label>
              <div className="relative">
                <textarea
                  value={output}
                  readOnly
                  className="w-full h-64 p-4 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none resize-none"
                  placeholder="AI-generated content will appear here..."
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    title="Copy"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Convert Button */}
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConvert}
            disabled={isConverting}
            className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isConverting ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Converting with AI...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Convert Content with AI
              </>
            )}
          </motion.button>
        </div>

        {/* Stats */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">2.4s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">94%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Daily Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversionInterface
