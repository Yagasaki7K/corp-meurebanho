import styled from "styled-components";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
     "Acesso ilimitado a todos os recursos",
     "Suporte técnico especializado",
     "Atualizações e melhorias constantes",
     "Dados seguros na nuvem",
];

const StyledCTA = styled.div`
     padding: 6rem 0;
     position: relative;
     overflow: hidden;
     background: var(--primary);

     .gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, var(--primary), var(--primary), var(--primary-dark));
     }

     .blur1,
     .blur2 {
          position: absolute;
          background: var(--white);
          opacity: 0.05;
          border-radius: 50%;
          filter: blur(60px);
     }

     .blur1 {
          top: 0;
          right: 0;
          width: 24rem;
          height: 24rem;
     }

     .blur2 {
          bottom: 0;
          left: 0;
          width: 20rem;
          height: 20rem;
     }

     .container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
     }

     .tag {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
     }

     .title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 1rem;
     }

     .subtitle {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 40rem;
          margin: 0 auto 3rem auto;
     }

     .benefits {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
     }

     .benefit {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 9999px;
     }

     .benefit span {
          font-size: 0.875rem;
          color: var(--white);
     }

     .buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
     }

     .cta-primary,
     .cta-secundary {
          font-weight: 600;
          padding: 1rem 2rem;
          font-size: 1rem;
          border-radius: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1rem;
          border-radius: 0.75rem;
          border: none;
          transition: 0.2s;
          text-align: center;
          cursor: pointer;
     }

     .cta-primary {
          background: var(--white);
          color: var(--primary);
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);

          &:hover {
               background: rgba(255, 255, 255, 0.9);
          }
     }

     .cta-secundary {
          background: transparent;
          color: var(--white);
          border: 2px solid rgba(255, 255, 255, 0.3);

          &:hover {
               background: rgba(255, 255, 255, 0.1);
          }
     }

     @media (min-width: 640px) {
          .buttons {
               flex-direction: row;
          }
     }
`;

const CTASection = () => {
     return (
          <StyledCTA id="contato">
               <div className="gradient" />
               <div className="blur1" />
               <div className="blur2" />

               <div className="container">
                    <span className="tag">Comece Hoje Mesmo!</span>

                    <h2 className="title">Transforme a gestão do seu rebanho agora</h2>

                    <p className="subtitle">
                         Junte-se a centenas de produtores que já modernizaram sua pecuária. Cadastre-se e comece a ter controle total do seu rebanho.
                    </p>

                    <div className="benefits">
                         {benefits.map((benefit) => (
                              <div key={benefit} className="benefit">
                                   <CheckCircle2 className="w-4 h-4" color="#fff" />
                                   <span>{benefit}</span>
                              </div>
                         ))}
                    </div>

                    <div className="buttons">
                         <button className="cta-primary" onClick={() => (window.location.href = "/login")}>
                              Criar Minha Conta
                              <ArrowRight size={20} />
                         </button>

                         <button className="cta-secundary" onClick={() => (window.location.href = "/login")}>
                              Já tenho conta – Entrar
                         </button>
                    </div>
               </div>
          </StyledCTA>
     );
};

export default CTASection;
