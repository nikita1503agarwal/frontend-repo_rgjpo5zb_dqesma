import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_50%)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <CTA />

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} GANGA AI — Portfolio Guardian for India</p>
            <div className="text-blue-200/70 text-sm">Built with care • Capital first • Discipline always</div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
