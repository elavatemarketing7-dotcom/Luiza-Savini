
import React from 'react';
import { EXPERT_DATA, IMAGES, PROOF_SOCIAL, HEART_GALLERY, COMMENTS } from '../constants';
import { MarqueeHeader } from './MarqueeHeader';
import { MediaGallery } from './MediaGallery';

export const LandingPage: React.FC = () => {
  return (
    <div className="pb-20 bg-white">
      <MarqueeHeader />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#fdfaf7]">
        {/* BG Video / Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.main} className="w-full h-full object-cover object-center opacity-20" alt="Dra. Luiza Savini" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60"></div>
        </div>

        <div className="relative z-10 w-full px-6 text-center pt-20">
          <h2 className="text-[#8d6e63] text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-4 animate-pulse">
            Harmonização de Alta Performance
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-3xl mx-auto text-[#4a3728]">
            Eu sou a <br/><span className="italic font-normal">Luiza Savini</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Redescubra sua beleza natural através de técnicas avançadas, sensibilidade artística e propósito.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <a 
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4a3728] text-white font-bold px-10 py-6 rounded-2xl text-lg shadow-2xl transform active:scale-95 transition-all hover:brightness-110 flex items-center gap-2"
            >
              Agendar consulta pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO HIGHLIGHT SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-3/5 rounded-3xl overflow-hidden shadow-2xl border border-stone-100 relative aspect-video">
            <video 
              src={IMAGES.video} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/10"></div>
          </div>
          <div className="w-full lg:w-2/5 space-y-6">
            <h3 className="text-3xl font-serif leading-snug text-[#4a3728]">O Segredo está nos <span className="text-[#8d6e63] italic">detalhes</span>.</h3>
            <p className="text-stone-600 leading-relaxed">
              Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única.
            </p>
            <div className="flex items-center gap-4 text-[#4a3728]">
                <div className="w-12 h-[1px] bg-[#4a3728]"></div>
                <span className="text-xs uppercase tracking-widest font-bold">Assista Agora</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section id="sobre" className="py-20 bg-stone-50 border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-stone-100 shadow-2xl">
              <img src={IMAGES.secondary} alt="Dra Luiza Savini em atendimento" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
                <span className="text-[#8d6e63] font-bold text-xs uppercase tracking-widest">Sobre Mim</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#4a3728]">Humanizando sua Jornada de Beleza</h2>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Eu não trato apenas faces, eu cuido de histórias. Com anos de especialização, desenvolvi um olhar que prioriza o equilíbrio emocional de cada paciente, garantindo que o espelho reflita exatamente quem você é.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Avaliação Honestíssima", desc: "Nunca farei algo que você não precisa." },
                { title: "Técnica Exclusiva", desc: "Procedimentos indolores e precisão milimétrica." },
                { title: "Acompanhamento Vip", desc: "Suporte direto comigo do início ao fim." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full border border-[#4a3728] flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-[#4a3728] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4a3728] text-base">{item.title}</h4>
                    <p className="text-stone-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <MediaGallery 
        id="resultados" 
        title="Resultados Reais" 
        images={PROOF_SOCIAL} 
        variant="slider" 
        speed="fast"
      />

      {/* 4. POR QUE CONFIAR */}
      <section id="metodo" className="py-20 px-6 bg-stone-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-[#4a3728]">Por que confiar o seu rosto a mim?</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Não somos uma clínica de massa. Somos um refúgio de cuidado individualizado.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "✨", title: "Naturalidade", text: "Minha assinatura é o 'você, mas descansada'. Sem exageros." },
              { icon: "🛡️", title: "Segurança", text: "Uso apenas os melhores produtos do mercado mundial." },
              { icon: "🤝", title: "Transparência", text: "Explicação clara de cada etapa e expectativa real de resultado." },
              { icon: "💎", title: "Exclusividade", text: "Agenda restrita para garantir que seu atendimento não tenha pressa." }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-stone-100 p-8 rounded-3xl hover:border-[#4a3728]/20 transition-colors group shadow-sm">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{card.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-[#4a3728]">{card.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-24 px-6 bg-[#4a3728] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none text-[200px] font-serif italic -translate-y-1/2 translate-x-1/4">Luiza</div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Chega de ter medo de não se reconhecer no espelho.</h2>
          <a 
            href={EXPERT_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#4a3728] font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all"
          >
            Quero uma avaliação personalizada
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-16 text-[#4a3728]">Sua transformação em 3 passos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-200 to-transparent z-0"></div>
          
          {[
            { n: "01", t: "Contato Inicial", d: "Clique no WhatsApp e conte o que te incomoda hoje." },
            { n: "02", t: "Avaliação Premium", d: "Presencial ou Online, analisamos cada detalhe da sua face." },
            { n: "03", t: "O Procedimento", d: "Realizamos seu sonho com as técnicas mais modernas e seguras." }
          ].map((step, idx) => (
            <div key={idx} className="relative z-10 space-y-4">
              <div className="w-16 h-16 bg-white border border-[#4a3728] rounded-full flex items-center justify-center mx-auto text-[#4a3728] font-serif text-2xl shadow-xl">
                {step.n}
              </div>
              <h4 className="text-xl font-bold text-[#4a3728]">{step.t}</h4>
              <p className="text-stone-500 text-sm">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MAIS PROVAS - HARMONIZAÇÃO DE <3 */}
      <MediaGallery 
        id="metodo"
        title="Harmonização de 💚" 
        images={HEART_GALLERY} 
        variant="slider" 
        speed="slow"
      />

      {/* 8. COMENTÁRIOS */}
      <MediaGallery 
        title="O que minhas pacientes dizem" 
        images={COMMENTS} 
        variant="slider" 
        speed="fast"
        contain={true}
      />

      {/* EXTRA: MAPA E ONDE ENCONTRAR */}
      <section id="onde" className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-4 text-[#4a3728]">Onde nos Encontrar</h2>
            <p className="text-stone-500 mb-8">{EXPERT_DATA.address}</p>
            <div className="w-full h-96 rounded-3xl overflow-hidden border border-stone-100 shadow-2xl grayscale opacity-80">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117006.13689623668!2d-46.78651817945039!3d-23.58849767222419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3d1%3A0x947c92476d8b9d62!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1716000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                ></iframe>
            </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section id="contato" className="py-32 px-6 text-center bg-stone-50">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="w-32 h-32 rounded-full border-2 border-[#4a3728] p-1 mx-auto overflow-hidden mb-8 shadow-2xl">
             <img src={IMAGES.third} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#4a3728]">Você está pronta para sua melhor versão?</h2>
          <p className="text-xl text-stone-500 font-light">As vagas mensais são limitadas para garantir a exclusividade que você merece.</p>
          
          <div className="pt-8">
            <a 
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-12 py-8 rounded-3xl text-2xl shadow-2xl transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 max-w-md mx-auto"
            >
              <span>Clique aqui para saber mais</span>
            </a>
            <p className="mt-6 text-stone-300 text-xs uppercase tracking-widest">Dra. Luiza Savini • Atendimento Personalizado</p>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 border-t border-stone-100 text-center space-y-6">
        <h3 className="text-3xl font-signature text-[#4a3728]">Luiza Savini</h3>
        <p className="text-stone-400 text-xs uppercase tracking-[0.3em]">Harmonização Facial • {EXPERT_DATA.address}</p>
        
        <div className="flex justify-center gap-8">
          <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#4a3728] transition-colors">Instagram</a>
          <a href={EXPERT_DATA.whatsapp} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#4a3728] transition-colors">WhatsApp</a>
        </div>
        
        <div className="pt-8">
            <p className="text-[10px] text-stone-300 uppercase tracking-widest">© 2024 Dra. Luiza Savini. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
