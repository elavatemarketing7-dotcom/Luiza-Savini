
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';

interface Props {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

export const ChoiceScreen: React.FC<Props> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-5 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#4a3728] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-stone-200 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm text-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#4a3728] p-1 overflow-hidden mb-4 shadow-xl shadow-brown-900/10">
            <img src={IMAGES.main} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold mb-1 tracking-tight text-[#4a3728]">Dra. {EXPERT_DATA.name}</h1>
          <p className="text-[#8d6e63] font-medium tracking-[0.2em] uppercase text-[10px]">{EXPERT_DATA.profession}</p>
        </div>

        <h2 className="text-xl md:text-2xl font-serif mb-6 leading-tight text-stone-800 px-4">
          Como deseja iniciar sua experiência exclusiva?
        </h2>

        <div className="space-y-3 px-2">
          <button 
            onClick={onStartQuiz}
            className="w-full bg-[#4a3728] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform active:scale-95 transition-all hover:brightness-110 flex flex-col items-center justify-center"
          >
            <span className="text-base">Fazer Avaliação Personalizada</span>
            <span className="text-[9px] opacity-70 font-normal uppercase tracking-wider">Leva apenas 1 minuto</span>
          </button>

          <button 
            onClick={onGoToSite}
            className="w-full bg-stone-50 border border-stone-100 text-[#4a3728] font-bold py-4 px-6 rounded-2xl transform active:scale-95 transition-all hover:bg-stone-100 text-sm uppercase tracking-wide"
          >
            Acessar Site Principal
          </button>

          <a 
            href={EXPERT_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-2 transform active:scale-95 transition-all text-sm uppercase tracking-wide"
          >
            Falar no WhatsApp Agora
          </a>
        </div>

        <p className="mt-8 text-stone-400 text-[10px] italic uppercase tracking-[0.1em]">
          Beleza com naturalidade e segurança.
        </p>
      </div>
    </div>
  );
};
