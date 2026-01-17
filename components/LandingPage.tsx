
import React from 'react';
import { EXPERT_DATA, IMAGES, PROOF_SOCIAL, HEART_GALLERY, COMMENTS } from '../constants';
import { MarqueeHeader } from './MarqueeHeader';
import { MediaGallery } from './MediaGallery';

export const LandingPage: React.FC = () => {
  return (
    <div className="pb-20">
      <MarqueeHeader />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        {/* BG Video / Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.main} className="w-full h-full object-cover object-center opacity-40" alt="Dra. Luiza Savini" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80"></div>
        </div>

        <div className="relative z-10 w-full px-6 text-center pt-20">
          <h2 className="text-[#d4af37] text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-4 animate-pulse">
            Harmonização de Alta Performance
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight max-w-3xl mx-auto">
            Eu sou a <br/><span className="italic font-normal">Luiza Savini</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Redescubra sua beleza natural através de técnicas avançadas, sensibilidade artística e propósito.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <a 
              href={EXPERT_DATA.whatsapp}
              className="bg-[#d4af37] text-black font-bold px-10 py-6 rounded-2xl text-lg shadow-2xl transform active:scale-95 transition-all hover:brightness-110 flex items-center gap-2"
            >
              Agendar consulta pelo WhatsApp
            </a>
            <p className="text-white/40 text-[10px] uppercase tracking-widest">Primeira avaliação sem compromisso</p>
          </div>
        </div>
      </section>

      {/* VIDEO HIGHLIGHT SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-3/5 rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative aspect-video">
            <video 
              src={IMAGES.video} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="w-full lg:w-2/5 space-y-6">
            <h3 className="text-3xl font-serif leading-snug">O Segredo está nos <span className="text-[#d4af37] italic">detalhes</span>.</h3>
            <p className="text-white/70 leading-relaxed">
              Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores. Aperte o play e sinta a diferença de ser cuidada por quem entende que sua beleza é única.
            </p>
            <div className="flex items-center gap-4 text-[#d4af37]">
                <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                <span className="text-xs uppercase tracking-widest font-bold">Assista Agora</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section id="sobre" className="py-20 bg-stone-900/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={IMAGES.secondary} alt="Dra Luiza Savini em atendimento" className="w-full h-full object-cover" />
            </div>
            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-black border border-[#d4af37] p-6 rounded-2xl shadow-xl flex flex-col items-center">
                <span className="text-3xl font-serif text-[#d4af37]">Expert</span>
                <span className="text-[10px] uppercase tracking-widest">Referência Premium</span>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
                <span className="text-[#d4af37] font-bold text-xs uppercase tracking-widest">Sobre Mim</span>
                <h2 className="text-4xl md:text-5xl font-serif">Humanizando sua Jornada de Beleza</h2>
            </div>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Eu não trato apenas faces, eu cuido de histórias. Com anos de especialização, desenvolvi um olhar que prioriza o equilíbrio emocional de cada paciente, garantindo que o espelho reflita exatamente quem você é.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Avaliação Honestíssima", desc: "Nunca farei algo que você não precisa." },
                { title: "Técnica Exclusiva", desc: "Procedimentos indolores e precisão milimétrica." },
                { title: "Acompanhamento Vip", desc: "Suporte direto comigo do início ao fim." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full border border-[#d4af37] flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <MediaGallery id="resultados" title="Resultados Reais" images={PROOF_SOCIAL} />

      {/* 4. POR QUE CONFIAR */}
      <section id="metodo" className="py-20 px-6 bg-stone-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Por que confiar o seu rosto a mim?</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Não somos uma clínica de massa. Somos um refúgio de cuidado individualizado.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "✨", title: "Naturalidade", text: "Minha assinatura é o 'você, mas descansada'. Sem exageros." },
              { icon: "🛡️", title: "Segurança", text: "Uso apenas os melhores produtos do mercado mundial." },
              { icon: "🤝", title: "Transparência", text: "Explicação clara de cada etapa e expectativa real de resultado." },
              { icon: "💎", title: "Exclusividade", text: "Agenda restrita para garantir que seu atendimento não tenha pressa." }
            ].map((card, idx) => (
              <div key={idx} className="bg-stone-900 border border-white/5 p-8 rounded-3xl hover:border-[#d4af37]/50 transition-colors group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{card.icon}</div>
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-24 px-6 bg-[#d4af37] text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none text-[200px] font-serif italic -translate-y-1/2 translate-x-1/4">Luiza</div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Chega de ter medo de não se reconhecer no espelho.</h2>
          <a 
            href={EXPERT_DATA.whatsapp}
            className="inline-block bg-black text-[#d4af37] font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all"
          >
            Quero uma avaliação personalizada
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-16">Sua transformação em 3 passos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
          
          {[
            { n: "01", t: "Contato Inicial", d: "Clique no WhatsApp e conte o que te incomoda hoje." },
            { n: "02", t: "Avaliação Premium", d: "Presencial ou Online, analisamos cada detalhe da sua face." },
            { n: "03", t: "O Procedimento", d: "Realizamos seu sonho com as técnicas mais modernas e seguras." }
          ].map((step, idx) => (
            <div key={idx} className="relative z-10 space-y-4">
              <div className="w-16 h-16 bg-stone-900 border border-[#d4af37] rounded-full flex items-center justify-center mx-auto text-[#d4af37] font-serif text-2xl shadow-xl">
                {step.n}
              </div>
              <h4 className="text-xl font-bold">{step.t}</h4>
              <p className="text-white/50 text-sm">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MAIS PROVAS - HARMONIZAÇÃO DE <3 */}
      <MediaGallery title="Harmonização de 💚" images={HEART_GALLERY} />

      {/* 8. COMENTÁRIOS */}
      <MediaGallery title="O que minhas pacientes dizem" images={COMMENTS} />

      {/* EXTRA: MAPA E ONDE ENCONTRAR */}
      <section id="onde" className="py-20 px-6 bg-stone-900/30">
        <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Onde nos Encontrar</h2>
            <p className="text-white/60 mb-8">{EXPERT_DATA.address}</p>
            <div className="w-full h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl grayscale contrast-125">
                {/* Embedded Map Simulation - replaced with a professional placeholder if needed, using a standard Google Maps iframe for real utility */}
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
      <section id="contato" className="py-32 px-6 text-center bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="w-32 h-32 rounded-full border-2 border-[#d4af37] p-1 mx-auto overflow-hidden mb-8 shadow-2xl">
             <img src={IMAGES.third} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif">Você está pronta para sua melhor versão?</h2>
          <p className="text-xl text-white/60 font-light">As vagas mensais são limitadas para garantir a exclusividade que você merece.</p>
          
          <div className="pt-8">
            <a 
              href={EXPERT_DATA.whatsapp}
              className="bg-[#25D366] text-white font-bold px-12 py-8 rounded-3xl text-2xl shadow-2xl transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 max-w-md mx-auto"
            >
              <span>Clique aqui para saber mais</span>
            </a>
            <p className="mt-6 text-white/30 text-xs uppercase tracking-widest">Dra. Luiza Savini • Atendimento Personalizado</p>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 border-t border-white/5 text-center space-y-6">
        <h3 className="text-3xl font-signature text-[#d4af37]">Luiza Savini</h3>
        <p className="text-white/40 text-xs uppercase tracking-[0.3em]">Harmonização Facial • {EXPERT_DATA.address}</p>
        
        <div className="flex justify-center gap-8">
          <a href={EXPERT_DATA.instagram} target="_blank" className="text-white/40 hover:text-white transition-colors">Instagram</a>
          <a href={EXPERT_DATA.whatsapp} target="_blank" className="text-white/40 hover:text-white transition-colors">WhatsApp</a>
        </div>
        
        <div className="pt-8">
            <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2024 Dra. Luiza Savini. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
