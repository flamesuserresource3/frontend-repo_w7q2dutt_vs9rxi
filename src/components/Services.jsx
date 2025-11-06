import { Film, Layers, ColorWheel, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Product Renders',
    desc: 'Photoreal 3D renders and animations that spotlight your product’s craft and detail.',
  },
  {
    icon: Layers,
    title: 'Brand Worlds',
    desc: 'Abstract systems, textures and motion languages that translate your brand into visuals.',
  },
  {
    icon: ColorWheel,
    title: 'Styleframes',
    desc: 'Art direction and keyframes that set the visual tone before full production.',
  },
  {
    icon: Sparkles,
    title: 'Title Sequences',
    desc: 'Cinematic openers for campaigns, launches, and events with impact.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold">Services</h2>
        <p className="mt-3 text-white/70 max-w-2xl">End-to-end motion design with a focus on clarity, aesthetics and pace.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/10 p-2">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="font-medium">{title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
