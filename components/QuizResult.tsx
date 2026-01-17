
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
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 text-center">
      <div className="w-full max-w-md bg-stone-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative">
        
        {/* Header Image with Gradient */}
        <div className="relative h-72 w-full">
          <img src={IMAGES.secondary} alt={EXPERT_DATA.name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
          
          <div className="absolute bottom-6 left-0 w-full px-6">
            <span className="bg-[#d4af37] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
              Perfil Compatível
            </span>
            <h2 className="text-3xl font-serif text-white">Você é a Paciente Ideal.</h2>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <p className="text-white/70 text-base leading-relaxed">
            Com base nas suas respostas, o Método da <span className="text-[#d4af37] font-bold">Dra. {EXPERT_DATA.name}</span> consegue entregar exatamente a naturalidade e segurança que você procura.
          </p>

          <div className="space-y-4 pt-2">
            <a 
              href={`${EXPERT_DATA.whatsapp}&text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white font-bold py-5 rounded-2xl shadow-xl transform active:scale-95 transition-all text-sm uppercase tracking-wider animate-pulse"
            >
              1- Enviar minha avaliação a DRA
            </a>

            <a 
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white/10 border border-white/10 text-white font-bold py-5 rounded-2xl transform active:scale-95 transition-all text-sm uppercase tracking-wider"
            >
              2- Chamar no WhatsApp Sem Compromisso
            </a>

            <button 
              onClick={onContinue}
              className="block w-full text-white/40 font-medium py-3 rounded-2xl hover:text-white transition-colors text-sm underline"
            >
              3- Não enviar e continuar no site
            </button>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-white/20 text-[10px] uppercase tracking-widest">Acesso Restrito e Exclusivo</p>
    </div>
  );
};
