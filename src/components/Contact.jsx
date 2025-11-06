import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks — I’ll get back to you within 24h.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Let’s build something striking</h2>
            <p className="mt-4 text-white/70 max-w-prose">
              Tell me about your timeline, scope and references. I’ll reply with a clear plan, budget and next steps.
            </p>
            {status && (
              <p className="mt-6 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-emerald-200">
                {status}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 outline-none focus:border-white/30" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 outline-none focus:border-white/30" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70">Project details</label>
              <textarea required rows={5} className="mt-1 w-full rounded-lg bg-black/50 border border-white/10 px-3 py-2 outline-none focus:border-white/30" />
            </div>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-white/70">
                <input type="checkbox" required className="rounded border-white/20 bg-black/50" />
                I consent to be contacted regarding my inquiry.
              </label>
              <button type="submit" className="rounded-full bg-white text-black px-5 py-2.5 font-medium hover:scale-[1.02] transition-transform">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
