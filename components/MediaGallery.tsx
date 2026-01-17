
import React, { useState } from 'react';

interface Props {
  images: string[];
  title?: string;
  id?: string;
}

export const MediaGallery: React.FC<Props> = ({ images, title, id }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id={id} className="py-20 px-6 max-w-6xl mx-auto">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">{title}</h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto rounded-full"></div>
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedImg(img)}
            className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative bg-stone-900 border border-white/5"
          >
            <img 
              src={img} 
              alt={`Galeria ${idx}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-white border border-white/40 px-3 py-1 rounded-full">Ver</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-white/30 text-[10px] uppercase tracking-widest italic">
        * Resultados individuais podem variar de acordo com o metabolismo e características pessoais.
      </p>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button className="absolute top-4 right-4 text-white text-3xl font-light">&times;</button>
            <img 
              src={selectedImg} 
              alt="Zoom" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};
