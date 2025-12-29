'use client'

import { useState } from 'react'
import { Check, X, Zap, Crown, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'yearly' ? '$16' : '$19',
      period: billingCycle === 'yearly' ? '/year' : '/month',
      description: 'For individuals getting started',
      icon: Sparkles,
      features: [
        { text: '10 conversions/month', included: true },
        { text: '5 output formats', included: true },
        { text: 'Basic AI templates', included: true },
        { text: 'Community support', included: true },
        { text: 'API access', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: billingCycle === 'yearly' ? '$39' : '$49',
      period: billingCycle === 'yearly' ? '/year' : '/month',
      description: 'For serious content creators',
      icon: Zap,
      features: [
        { text: '100 conversions/month', included: true },
        { text: '12 output formats', included: true },
        { text: 'Advanced AI templates', included: true },
        { text: 'Priority support', included: true },
        { text: 'API access', included: true },
        { text: 'Custom workflows', included: true },
      ],
      cta: 'Go Pro',
      popular: true,
    },
    {
      name: 'Agency',
      price: billingCycle === 'yearly' ? '$99' : '$129',
      period: billingCycle === 'yearly' ? '/year' : '/month',
      description: 'For teams & agencies',
      icon: Crown,
      features: [
        { text: 'Unlimited conversions', included: true },
        { text: 'All output formats', included: true },
        { text: 'Premium AI templates', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Full API access', included: true },
        { text: 'White labeling', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Start free, upgrade as you grow. No hidden fees.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-gray-900 shadow'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white dark:bg-gray-900 shadow'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border-2 ${
                plan.popular 
                  ? 'border-indigo-500 ring-2 ring-indigo-500 shadow-xl' 
                  : 'border-gray-300 dark:border-gray-700'
              } bg-white dark:bg-gray-900 p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <plan.icon className="w-8 h-8 text-indigo-600" />
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mr-3 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? '' : 'text-gray-400 dark:text-gray-600'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </button>

              {plan.popular && (
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Join 2,500+ content creators
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Free Trial */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 max-w-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">14-Day Free Trial</h3>
            <p className="mb-6 opacity-90">
              Try all Pro features free for 14 days. No credit card required.
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
