import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Chrome Bloom',
    tag: 'Abstract CGI',
    src: 'https://images.unsplash.com/photo-1754937152368-cd73be8397e2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaHJvbWUlMjBCbG9vbXxlbnwwfDB8fHwxNzYyNDM0NzE2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Iridescent Flow',
    tag: 'Procedural',
    src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Neon Grains',
    tag: 'Motion Graphics',
    src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A curated mix of product films, abstract studies and brand pieces.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/10">Start a project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href="#contact"
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img src={p.src} alt={p.title} className="h-72 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3">
                <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/90">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-lg font-medium">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
