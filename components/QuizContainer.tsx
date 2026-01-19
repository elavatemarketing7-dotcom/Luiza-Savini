
import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, IMAGES, EXPERT_DATA } from '../constants';

interface Props {
  onComplete: (answers: string[]) => void;
  onCancel: () => void;
}

export const QuizContainer: React.FC<Props> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsAnalyzing(true);
    }
  };

  useEffect(() => {
    if (isAnalyzing) {
      let interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete(answers), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing, answers, onComplete]);

  const progressPercentage = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
      {/* Floating Expert Image */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full border-2 border-[#4a3728] p-0.5 overflow-hidden shadow-lg animate-bounce-slow">
          <img src={IMAGES.main} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
        </div>
        <p className="text-[10px] uppercase tracking-widest text-[#4a3728] mt-2 font-bold">{EXPERT_DATA.name}</p>
      </div>

      <div className="w-full max-w-md bg-white border border-stone-100 rounded-[2.5rem] p-8 shadow-2xl relative">
        {!isAnalyzing ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <span className="text-stone-400 text-xs font-bold uppercase tracking-tighter">Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
              <button onClick={onCancel} className="text-stone-400 hover:text-[#4a3728] text-xs underline">Pular para site</button>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-stone-100 rounded-full mb-8 overflow-hidden">
              <div 
                className="h-full bg-[#4a3728] transition-all duration-500 ease-out" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            <h3 className="text-2xl font-serif mb-8 text-center leading-tight text-stone-800">
              {QUIZ_QUESTIONS[currentStep].question}
            </h3>

            <div className="space-y-3">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full text-left bg-stone-50 border border-stone-100 hover:border-[#4a3728] hover:bg-[#4a3728]/5 p-5 rounded-2xl transition-all active:scale-[0.98] text-sm md:text-base text-stone-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 border-4 border-stone-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#4a3728] rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-sm text-[#4a3728]">
                {progress}%
              </div>
            </div>
            <h3 className="text-2xl font-serif mb-4 text-stone-800">Analisando...</h3>
            <p className="text-stone-500 text-sm leading-relaxed max-w-[280px]">
              A Dra. Luiza está cruzando seus objetivos com as técnicas exclusivas do método dela.
            </p>
            
            <div className="w-full h-2 bg-stone-100 rounded-full mt-10 overflow-hidden max-w-[200px]">
               <div className="h-full bg-[#4a3728] animate-pulse" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
      </div>
      
      <p className="absolute bottom-8 text-[10px] text-stone-300 uppercase tracking-[0.2em]">Exclusividade • Naturalidade • Segurança</p>
    </div>
  );
};
