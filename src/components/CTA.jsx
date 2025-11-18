function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-amber-500/20 p-10 backdrop-blur">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to guard your portfolio?</h3>
            <p className="mt-3 text-blue-200/85">Join the early access list and get the AI risk coach working for you.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <input type="email" required placeholder="Enter your email" className="w-full sm:w-96 px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-blue-200/70 ring-1 ring-white/15 focus:outline-none focus:ring-white/30" />
              <button className="px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-blue-600 to-amber-500 shadow-lg shadow-purple-500/20">
                Join Waitlist
              </button>
            </form>

            <p className="mt-4 text-xs text-blue-200/70">No spam. Only important updates.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
