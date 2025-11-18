import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative pt-24 pb-20">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(124,58,237,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl opacity-40" style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(59,130,246,0.15) 40%, rgba(245,158,11,0.12) 70%, transparent 70%)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 ring-1 ring-white/10 text-white mb-5">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-amber-400 animate-pulse" />
            Advanced Options Risk Engine
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Portfolio Guardian for disciplined, high-precision trading
          </h1>
          <p className="mt-5 text-lg text-blue-200/90 max-w-2xl">
            GANGA AI protects capital, controls risk, and delivers confident decisions with an always-on risk engine monitoring volatility, exposure, and tail-events in real time.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-amber-500 shadow-lg shadow-purple-500/20">
              Start protecting your portfolio
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/15">
              Explore features
            </a>
          </div>
        </div>

        <div className="relative h-[520px] w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black/30">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Gradient overlay to match theme without blocking interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-amber-400/10" />
        </div>
      </div>
    </section>
  )
}

export default Hero
