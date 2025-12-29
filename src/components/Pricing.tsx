export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$19', features: ['10 conversions/month', '5 formats'] },
    { name: 'Pro', price: '$49', popular: true, features: ['100 conversions/month', '12 formats'] },
    { name: 'Agency', price: '$129', features: ['Unlimited', 'All features'] },
  ]
  
  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-white p-6 rounded-2xl ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-bold ${plan.popular ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
