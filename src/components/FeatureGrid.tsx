export default function FeatureGrid() {
  const features = [
    { title: 'Lightning Fast', desc: 'Convert in seconds' },
    { title: '50+ Languages', desc: 'Global reach' },
    { title: 'SEO Optimized', desc: 'Rank higher' },
    { title: 'Team Collaboration', desc: 'Work together' },
  ]
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
      {features.map((f) => (
        <div key={f.title} className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  )
}
