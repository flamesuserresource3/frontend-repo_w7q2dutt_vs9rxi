import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient vignette overlay (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-36 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
            Motion Design that moves people
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            I craft cinematic product reveals, abstract brand worlds, and immersive visuals. From concept to final render.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-white text-black px-5 py-2.5 font-medium hover:scale-[1.02] transition-transform">
              View Showreel
            </a>
            <a href="#contact" className="rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10 transition-colors">
              Book a Project Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
