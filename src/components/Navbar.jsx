import { Menu, Shield, TestTube } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 shadow-lg shadow-purple-500/20 ring-1 ring-white/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight leading-none">GANGA AI</p>
            <p className="text-xs text-blue-200/80 leading-none mt-1">Indians first Portfolio Guardian</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-blue-200/80 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-sm text-blue-200/80 hover:text-white transition-colors">How it works</a>
          <a href="#faq" className="text-sm text-blue-200/80 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="/test" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/15 transition-colors">
            <TestTube className="h-4 w-4" />
            Test Backend
          </a>
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-purple-600 via-blue-600 to-amber-500 text-white shadow-lg shadow-purple-500/20">
            Get Started
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/10">
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
