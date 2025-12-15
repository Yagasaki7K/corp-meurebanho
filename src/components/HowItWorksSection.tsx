import styled from "styled-components";
import { UserPlus, Database, LineChart, Smartphone } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: UserPlus,
        title: "Crie sua Conta",
        description: "Cadastre-se gratuitamente e contate-nos para organizar seu perfil de fazenda em poucos minutos.",
    },
    {
        number: "02",
        icon: Database,
        title: "Registre seu Rebanho",
        description: "Adicionamos os seus animais com todas as informações relevantes de forma simples e organizada.",
    },
    {
        number: "03",
        icon: LineChart,
        title: "Acompanhe os Dados",
        description: "Monitore o desenvolvimento, saúde e produtividade de cada animal do seu rebanho.",
    },
    {
        number: "04",
        icon: Smartphone,
        title: "Acesse de Qualquer Lugar",
        description: "Tenha todas as informações na palma da mão, a qualquer hora, em qualquer dispositivo.",
    },
];

const StyledHowItWorks = styled.div`
    padding: 6rem 0;
    background: var(--gray-light);
    position: relative;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        text-align: center;
    }

    .tag {
        display: inline-block;
        padding: 0.5rem 1rem;
        background: var(--secundary);
        color: var(--white);
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    .title {
        font-size: 3rem;
        font-weight: 700;
        color: var(--black);
        margin-bottom: 1rem;

        .text-gradient {
            color: var(--primary);
            font-size: 3rem;
        }
    }

    .subtitle {
        font-size: 1.125rem;
        color: var(--gray-dark);
        max-width: 32rem;
        padding: 0 1rem;
        margin: 0 auto 4rem auto;
    }

    .grid {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(1, 1fr);
        padding: 0 1rem;
    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .stepWrapper {
        position: relative;
    }

    .connector {
        display: none;
    }

    @media (min-width: 1024px) {
        .connector {
            display: block;
            position: absolute;
            top: 3.5rem;
            left: 50%;
            width: 100%;
            height: 2px;
            background: var(--gray);
        }

        .arrow {
            position: absolute;
            right: 0;
            top: -6px;
            width: 0.75rem;
            height: 0.75rem;
            border-top: 2px solid var(--primary);
            border-right: 2px solid var(--primary);
            transform: rotate(45deg) translateX(-8px);
        }
    }

    .card {
        background: var(--card);
        border-radius: 1rem;
        padding: 2rem 1.5rem;
        border: 1px solid var(--gray);
        transition: 0.3s;
    }

    .card:hover {
        border-color: var(--primary);
        box-shadow: var(--gray-dark);
        transform: translateY(-4px);
    }

    .badge {
        position: absolute;
        top: -0.75rem;
        left: 1.5rem;
        background: var(--primary);
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
    }

    .badge span {
        color: var(--white);
        font-size: 0.875rem;
        font-weight: 700;
    }

    .iconBox {
        width: 3.5rem;
        height: 3.5rem;
        background: var(--primary-light);
        color: var(--primary);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2.5rem auto 1.5rem auto;
        transition: 0.3s;
    }

    .card:hover .iconBox {
        background: var(--secundary);
        color: var(--white);
    }

    .card h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--black);
        margin-bottom: 0.75rem;
    }

    .card p {
        color: var(--black);
        line-height: 1.5;
        font-size: 0.875rem;
    }
`;

const HowItWorksSection = () => {
    return (
        <StyledHowItWorks id="como-funciona">
            <div className="container">
                <span className="tag">Como Funciona</span>

                <h2 className="title">
                    Simples de usar, <span className="text-gradient">poderoso em resultados</span>
                </h2>

                <p className="subtitle">Em apenas 4 passos você estará gerenciando seu rebanho de forma profissional.</p>

                <div className="grid">
                    {steps.map((step, index) => (
                        <div key={step.number} className="stepWrapper">
                            <div className="card">
                                <div className="badge">
                                    <span>{step.number}</span>
                                </div>

                                <div className="iconBox">
                                    <step.icon className="w-8 h-8" />
                                </div>

                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StyledHowItWorks>
    );
};

export default HowItWorksSection;
