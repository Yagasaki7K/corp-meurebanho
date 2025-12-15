import { Check } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const plans = [
    {
        name: "Gratuito",
        price: "R$ 0",
        description: "Ideal para começar a organizar seu rebanho",
        features: ["Até 10 animais cadastrados", "Registro básico de informações", "Acesso via dispositivos móveis", "Suporte por email"],
        cta: "Começar Grátis",
        popular: false,
    },
    {
        name: "Premium",
        price: "R$ 0",
        period: "/mês",
        description: "Para produtores que querem mais controle",
        features: [
            "Até 100 animais cadastrados",
            "Controle de bezerros e embriões",
            "Histórico de vacinação",
            "Relatórios detalhados",
            "Suporte prioritário",
        ],
        cta: "Assinar Premium",
        popular: true,
    },
    {
        name: "Master",
        price: "R$ 0",
        period: "/mês",
        description: "Gestão completa para grandes propriedades",
        features: [
            "Animais ilimitados",
            "Todas as funcionalidades Premium",
            "Gestão de múltiplas fazendas",
            "Integração com sistemas externos",
            "Suporte 24/7 dedicado",
            "Treinamento personalizado",
        ],
        cta: "Assinar Master",
        popular: false,
    },
];

const PricingSection = () => {
    return (
        <StyledPricingSection>
            <div className="container">
                <div className="header">
                    <span className="subtitle">Planos e Preços</span>
                    <h2 className="title">Escolha o plano ideal para você</h2>
                    <p className="description">
                        Comece gratuitamente e evolua conforme sua necessidade. Todos os planos incluem atualizações gratuitas.
                    </p>
                </div>

                <div className="plans-grid">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`plan-card ${plan.popular ? "popular" : ""}`}>
                            {plan.popular && <div className="popular-badge">Mais Popular</div>}
                            <div className="card-header">
                                <h3 className="card-title">{plan.name}</h3>
                                <p className="card-description">{plan.description}</p>
                            </div>
                            <div className="card-content">
                                <div className="price">
                                    <span className="amount">{plan.price}</span>
                                    {plan.period && <span className="period">{plan.period}</span>}
                                </div>
                                <ul className="features-list">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="feature-item">
                                            <Check className="check-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button onClick={() => window.open("#")} className={`cta-button ${plan.popular ? "popular-btn" : ""}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="contact">
                    <p>
                        Dúvidas sobre qual plano escolher?{" "}
                        <Link href="#" target="_blank">
                            Fale conosco
                        </Link>
                    </p>
                </div>
            </div>
        </StyledPricingSection>
    );
};

export default PricingSection;

const StyledPricingSection = styled.div`
    padding: 5rem 0;
    background-color: rgba(248, 250, 252, 0.3);

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .header {
        text-align: center;
        margin-bottom: 4rem;

        .subtitle {
            color: var(--primary);
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .title {
            font-size: 3rem;
            font-weight: 700;
            margin: 0.5rem 0 1rem;
            color: #111827;

            @media (max-width: 768px) {
                padding: 0 2rem;
            }
        }

        .description {
            color: #6b7280;
            font-size: 1.125rem;
            max-width: 42rem;
            margin: 0 auto;
        }
    }

    .plans-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 80rem;
        margin: 0 auto;

        @media (max-width: 768px) {
            padding: 0 2rem;
        }

        .plan-card {
            position: relative;
            display: flex;
            flex-direction: column;
            background-color: var(--white);
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            padding: 2rem 1.5rem;
            transition: all 0.3s;

            @media (max-width: 768px) {
                margin: 1rem 0;
            }

            &:hover {
                border-color: rgba(79, 229, 70, 0.5);
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
            }

            &.popular {
                border-color: var(--primary);
                box-shadow: 0 10px 25px rgba(79, 229, 70, 0.3);
                transform: scale(1.05);
            }

            .popular-badge {
                position: absolute;
                top: -1rem;
                left: 50%;
                transform: translateX(-50%);
                background-color: var(--primary);
                color: #ffffff;
                font-size: 1rem;
                font-weight: 600;
                padding: 0.375rem 1rem;
                border-radius: 9999px;
            }

            .card-header {
                text-align: center;
                margin-bottom: 1rem;

                .card-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #111827;
                }

                .card-description {
                    color: #6b7280;
                    font-size: 1rem;
                }
            }

            .card-content {
                text-align: center;
                flex: 1;

                .price {
                    margin-bottom: 1.5rem;
                    .amount {
                        font-size: 2.25rem;
                        font-weight: 700;
                        color: #111827;
                    }
                    .period {
                        color: #6b7280;
                        margin-left: 0.25rem;
                    }
                }

                .features-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;

                    .feature-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 0.75rem;

                        .check-icon {
                            width: 1.25rem;
                            height: 1.25rem;
                            color: var(--primary);
                            flex-shrink: 0;
                            margin-top: 0.125rem;
                        }

                        span {
                            color: #6b7280;
                            font-size: 1rem;
                        }
                    }
                }
            }

            .cta-button {
                margin-top: 1.5rem;
                padding: 0.75rem 1rem;
                width: 100%;
                font-size: 1rem;
                font-weight: 600;
                border-radius: 0.5rem;
                border: 2px solid var(--primary);
                background-color: transparent;
                color: var(--primary);
                cursor: pointer;
                transition: all 0.3s;

                &.popular-btn {
                    background-color: var(--primary);
                    color: #ffffff;
                }

                &:hover {
                    opacity: 0.9;
                }
            }
        }
    }

    .contact {
        text-align: center;
        margin-top: 3rem;

        p {
            color: #6b7280;

            a {
                color: var(--primary);
                font-weight: 500;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
