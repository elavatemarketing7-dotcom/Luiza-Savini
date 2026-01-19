
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';

interface Props {
  onContinue: () => void;
  answers: string[];
}

export const QuizResult: React.FC<Props> = ({ onContinue, answers }) => {
  const whatsappMsg = encodeURIComponent(
    `Olá Dra. Luiza! Acabei de fazer o quiz no seu site.\nMeus objetivos são: ${answers.join(' | ')}\nQuero saber mais sobre seu método.`
  );

  return (
    <div className="min-h-screen bg-[#fdfaf7] flex flex-col items-center justify-center p-4 text-center">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 relative">
        
        {/* Compact Header Image */}
        <div className="relative h-48 w-full">
          <img src={IMAGES.secondary} alt={EXPERT_DATA.name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
          
          <div className="absolute bottom-4 left-0 w-full px-5 text-left">
            <span className="bg-[#4a3728] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mb-1.5 inline-block">
              Perfil Compatível
            </span>
            <h2 className="text-2xl font-serif text-stone-900 leading-tight">Você é a Paciente Ideal.</h2>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-stone-600 text-sm leading-relaxed px-2">
            O Método da <span className="text-[#4a3728] font-bold">Dra. {EXPERT_DATA.name}</span> é a solução perfeita para a naturalidade que você busca.
          </p>

          <div className="space-y-3 pt-1">
            <a 
              href={`${EXPERT_DATA.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all text-xs uppercase tracking-wider animate-pulse"
            >
              1- Enviar avaliação via WhatsApp
            </a>

            <a 
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-stone-50 border border-stone-200 text-[#4a3728] font-bold py-4 rounded-xl transform active:scale-95 transition-all text-xs uppercase tracking-wider"
            >
              2- Falar com Especialista
            </a>

            <button 
              onClick={onContinue}
              className="block w-full text-stone-400 font-medium py-2 rounded-xl hover:text-[#4a3728] transition-colors text-xs underline"
            >
              3- Ver site completo
            </button>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-stone-300 text-[9px] uppercase tracking-widest">Atendimento Exclusivo • Vagas Limitadas</p>
    </div>
  );
};
