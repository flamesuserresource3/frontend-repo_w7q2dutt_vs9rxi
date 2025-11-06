import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-wide text-lg">
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-violet-300 bg-clip-text text-transparent">Meda</span>
            <span className="text-white/70">.studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              Let’s Collaborate
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white/90"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium"
            >
              Let’s Collaborate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
