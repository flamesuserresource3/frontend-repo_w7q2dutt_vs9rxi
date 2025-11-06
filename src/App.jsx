import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/80 py-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} Meda — Motion Design Studio</p>
          <div className="text-white/60">Based in Earth. Working worldwide.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
