
import React from 'react';

const SECTIONS = [
  { id: 'sobre', label: 'Sobre Mim' },
  { id: 'resultados', label: 'Prova Visual' },
  { id: 'metodo', label: 'Harmonização de 💚' },
  { id: 'onde', label: 'Onde nos Encontrar' },
  { id: 'contato', label: 'Contato' }
];

export const MarqueeHeader: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-stone-100 overflow-hidden py-3">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-6">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {SECTIONS.map((section) => (
              <button
                key={`${i}-${section.id}`}
                onClick={() => scrollTo(section.id)}
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-stone-400 hover:text-[#4a3728] transition-colors"
              >
                {section.label}
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};
