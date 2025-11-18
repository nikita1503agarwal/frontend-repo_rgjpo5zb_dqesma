import { ShieldCheck, Activity, Sparkles, Radar, LineChart, BellRing } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/7 transition-colors">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" style={{
        background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(59,130,246,0.25) 40%, rgba(245,158,11,0.20) 70%, transparent 70%)'
      }} />
      <div className="relative">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-amber-500 flex items-center justify-center ring-1 ring-white/20">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
      </div>
    </div>
  )
}

function Features() {
  const items = [
    { icon: ShieldCheck, title: 'Capital Protection', desc: 'Defend against drawdowns with guardrails that auto-scale exposure, hedge risk, and prevent over-leverage.' },
    { icon: Activity, title: 'Volatility-Aware', desc: 'Reads regime shifts and implied volatility surfaces to adapt position sizing and hedging in real time.' },
    { icon: Radar, title: 'Tail Risk Radar', desc: 'Monitors skew, kurtosis and cross-asset stress to detect fat-tail events before they hit.' },
    { icon: LineChart, title: 'Options Risk Engine', desc: 'Greeks-aware system tracking Delta, Gamma, Vega, Theta and margin risk with portfolio-level perspective.' },
    { icon: BellRing, title: 'Discipline Alerts', desc: 'Signals when to add, reduce, or hold based on rules you configure with scenario analysis.' },
    { icon: Sparkles, title: 'AI Policy Coach', desc: 'Enforces your risk policy continuously and explains the why behind every action in plain English.' }
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What makes it a guardian</h2>
          <p className="mt-3 text-blue-200/80">Purpose-built layers working together to protect and guide your portfolio.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Feature key={idx} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
