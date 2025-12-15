import styled from "styled-components";
import { ClipboardList, Baby, Dna, Activity, MapPin, Bell, TrendingUp, FileText } from "lucide-react";

const features = [
    {
        icon: ClipboardList,
        title: "Registro Completo",
        description: "Cadastre cada animal com informações detalhadas: raça, peso, idade, origem e muito mais.",
    },
    {
        icon: Baby,
        title: "Controle de Bezerros",
        description: "Acompanhe o nascimento, desenvolvimento e desmama de todos os bezerros do rebanho.",
    },
    {
        icon: Dna,
        title: "Gestão de Embriões",
        description: "Monitore o programa de transferência de embriões com histórico completo de procedimentos.",
    },
    {
        icon: Activity,
        title: "Histórico de Saúde (Em breve)",
        description: "Registre vacinas, tratamentos, exames e mantenha o histórico veterinário atualizado.",
    },
    {
        icon: MapPin,
        title: "Localização por Pasto (Em breve)",
        description: "Organize seu rebanho por áreas e acompanhe a movimentação entre pastos.",
    },
    {
        icon: Bell,
        title: "Alertas Inteligentes (Em breve)",
        description: "Receba notificações sobre vacinas, pesagens, partos previstos e outras atividades.",
    },
    {
        icon: TrendingUp,
        title: "Relatórios Detalhados (Em breve)",
        description: "Gere relatórios de produtividade, crescimento e desempenho do seu rebanho.",
    },
    {
        icon: FileText,
        title: "Documentação Digital (Em breve)",
        description: "Mantenha GTA, certificados e documentos organizados em formato digital.",
    },
];

const StyledFeatures = styled.div`
    padding: 6rem 0;
    background: var(--background);
    position: relative;
    overflow: hidden;

    .bg1,
    .bg2 {
        position: absolute;
    }

    .bg1 {
        top: 0;
        left: 25%;
        width: 24rem;
        height: 24rem;
    }

    .bg2 {
        bottom: 0;
        right: 25%;
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
        gap: 1.5rem;
        padding: 0 1rem;
        grid-template-columns: repeat(1, 1fr);
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

    .card {
        background: var(--white);
        border-radius: 1rem;
        padding: 1.5rem;
        border: 1px solid var(--gray);
        transition: 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card:hover {
        border-color: var(--primary);
        box-shadow: var(--gray-dark);
        transform: translateY(-4px);
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
        margin-bottom: 1.25rem;
        transition: 0.3s;
    }

    .card:hover .iconBox {
        background: var(--secundary);
        color: var(--white);
    }

    .card h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--black);
        margin-bottom: 0.5rem;
    }

    .card p {
        font-size: 0.875rem;
        color: var(--black);
        line-height: 1.5;
    }
`;

const FeaturesSection = () => {
    return (
        <StyledFeatures id="recursos">
            <div className="bg1" />
            <div className="bg2" />
            <div className="container">
                <span className="tag">Recursos</span>
                <h2 className="title">
                    Tudo que você precisa para <span className="text-gradient">gerenciar seu rebanho</span>
                </h2>
                <p className="subtitle">Uma plataforma completa com todas as ferramentas necessárias para uma gestão pecuária eficiente e moderna.</p>

                <div className="grid">
                    {features.map((feature, index) => (
                        <div className="card" key={feature.title} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="iconBox">
                                <feature.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </StyledFeatures>
    );
};

export default FeaturesSection;
