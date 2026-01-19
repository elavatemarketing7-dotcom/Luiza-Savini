
import React, { useState } from 'react';

interface Props {
  images: string[];
  title?: string;
  id?: string;
  variant?: 'grid' | 'slider';
  speed?: 'slow' | 'fast';
  contain?: boolean; // New prop to show full image without cropping
}

export const MediaGallery: React.FC<Props> = ({ images, title, id, variant = 'grid', speed = 'fast', contain = false }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const animationClass = speed === 'slow' ? 'animate-slide-slow' : 'animate-slide-fast';

  // Double the images for a seamless loop in slider mode
  const displayImages = variant === 'slider' ? [...images, ...images] : images;

  return (
    <section id={id} className={`py-20 ${variant === 'slider' ? 'overflow-hidden bg-white' : 'px-6 max-w-6xl mx-auto'}`}>
      {title && (
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl font-serif mb-4 text-[#4a3728]">{title}</h2>
          <div className="h-1 w-20 bg-[#4a3728]/20 mx-auto rounded-full"></div>
        </div>
      )}
      
      {variant === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImg(img)}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative bg-stone-50 border border-stone-100"
            >
              <img 
                src={img} 
                alt={`Galeria ${idx}`} 
                className={`w-full h-full ${contain ? 'object-contain p-2' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-[#4a3728]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest text-white bg-[#4a3728] px-4 py-2 rounded-full">Ver</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative mask-edges">
          <div className={`${animationClass} gap-6 px-6`}>
            {displayImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImg(img)}
                className={`
                  ${contain ? 'w-72 h-[450px] md:w-96 md:h-[600px]' : 'w-64 h-64 md:w-80 md:h-80'} 
                  flex-shrink-0 rounded-[2rem] overflow-hidden cursor-pointer group relative 
                  bg-stone-50 border border-stone-100 shadow-xl transition-all duration-300
                  hover:border-[#4a3728]/50
                `}
              >
                <img 
                  src={img} 
                  alt={`Slide ${idx}`} 
                  className={`w-full h-full ${contain ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">Toque para ampliar</span>
                </div>
                {/* Visual frame for 'contain' mode */}
                {contain && (
                  <div className="absolute inset-0 pointer-events-none border-[8px] border-stone-100 rounded-[2rem]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="px-6">
        <p className="mt-12 text-center text-stone-300 text-[10px] uppercase tracking-widest italic">
          * Resultados individuais podem variar de acordo com o metabolismo e características pessoais.
        </p>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-white/98 flex items-center justify-center p-4 animate-in fade-in backdrop-blur-md"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button className="absolute -top-12 right-0 text-stone-800 text-4xl font-light p-4">&times;</button>
            <img 
              src={selectedImg} 
              alt="Zoom" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-stone-100"
            />
          </div>
        </div>
      )}
    </section>
  );
};
