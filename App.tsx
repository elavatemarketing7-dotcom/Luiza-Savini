
import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { QuizContainer } from './components/QuizContainer';
import { QuizResult } from './components/QuizResult';
import { ChoiceScreen } from './components/ChoiceScreen';

export type AppState = 'CHOICE' | 'QUIZ' | 'RESULT' | 'SITE';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>('CHOICE');
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleCompleteQuiz = (answers: string[]) => {
    setQuizAnswers(answers);
    setView('RESULT');
  };

  const handleGoToSite = () => {
    setView('SITE');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setView('QUIZ');
  };

  return (
    <div className="min-h-screen bg-[#fdfaf7] text-[#2c1810]">
      {view === 'CHOICE' && (
        <ChoiceScreen 
          onStartQuiz={handleStartQuiz} 
          onGoToSite={handleGoToSite} 
        />
      )}
      
      {view === 'QUIZ' && (
        <QuizContainer 
          onComplete={handleCompleteQuiz} 
          onCancel={handleGoToSite}
        />
      )}
      
      {view === 'RESULT' && (
        <QuizResult 
          onContinue={handleGoToSite} 
          answers={quizAnswers}
        />
      )}
      
      {view === 'SITE' && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
