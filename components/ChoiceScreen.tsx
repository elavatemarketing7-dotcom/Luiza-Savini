
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';

interface Props {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

export const ChoiceScreen: React.FC<Props> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-stone-800 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        <div className="mb-8 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-2 border-[#d4af37] p-1 overflow-hidden mb-6 shadow-2xl shadow-yellow-900/20">
            <img src={IMAGES.main} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Dra. {EXPERT_DATA.name}</h1>
          <p className="text-[#d4af37] font-medium tracking-widest uppercase text-xs">{EXPERT_DATA.profession}</p>
        </div>

        <h2 className="text-2xl font-serif mb-8 leading-tight">Como deseja iniciar sua experiência exclusiva?</h2>

        <div className="space-y-4">
          <button 
            onClick={onStartQuiz}
            className="w-full bg-[#d4af37] text-black font-bold py-5 px-8 rounded-2xl shadow-xl transform active:scale-95 transition-all hover:brightness-110 flex flex-col items-center"
          >
            <span className="text-lg">Fazer Avaliação Personalizada</span>
            <span className="text-xs opacity-70 font-normal">Leve 1 minuto e filtre seu perfil</span>
          </button>

          <button 
            onClick={onGoToSite}
            className="w-full bg-white/5 border border-white/20 text-white font-medium py-5 px-8 rounded-2xl transform active:scale-95 transition-all hover:bg-white/10"
          >
            Acessar Site Principal
          </button>

          <a 
            href={EXPERT_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white font-bold py-5 px-8 rounded-2xl shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition-all"
          >
            Falar no WhatsApp Agora
          </a>
        </div>

        <p className="mt-8 text-white/40 text-xs italic">
          Experiência premium focada em resultados naturais e seguros.
        </p>
      </div>
    </div>
  );
};
