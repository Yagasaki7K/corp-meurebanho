import styled, { keyframes } from "styled-components";
import { ArrowRight, Shield, Users, BarChart3 } from "lucide-react";
import Odometer from "@/utils/Odometer";
import Link from "next/link";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const HeroWrapper = styled.section`
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 5rem;
    overflow: hidden;
    background: linear-gradient(180deg, #f9fafb, #ffffff);

    @media (max-width: 768px) {
        padding: 5rem 0.5rem;
    }

    .bg-1,
    .bg-2,
    .bg-3 {
        position: absolute;
        border-radius: 9999px;
        filter: blur(60px);
    }

    .bg-1 {
        top: 5rem;
        right: 0;
        width: 24rem;
        height: 24rem;
        background: rgba(59, 246, 130, 0.05);
    }

    .bg-2 {
        bottom: 0;
        left: 0;
        width: 20rem;
        height: 20rem;
        background: rgba(59, 246, 130, 0.1);
    }

    .bg-3 {
        top: 50%;
        left: 50%;
        width: 600px;
        height: 600px;
        background: rgba(59, 246, 130, 0.03);
        transform: translate(-50%, -50%);
    }

    .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1rem;
        position: relative;
        z-index: 10;
        display: grid;
        gap: 3rem;
        align-items: center;

        @media (min-width: 1024px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 768px) {
            padding: 1rem 2rem;
        }
    }

    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1.1rem;
        padding: 1rem 1.5rem;

        @media (max-width: 768px) {
            padding: 1rem 0.5rem;
        }

        border-radius: 0.75rem;
        cursor: pointer;
        transition: 0.2s;
        border: 2px solid transparent;
        text-decoration: none;

        &.primary {
            background: var(--primary);
            color: white;

            &:hover {
                background: var(--secundary);
            }
        }

        &.outline {
            border-color: #1b9849;
            color: #1b9849;
            background: transparent;

            &:hover {
                background: rgba(59, 246, 130, 0.1);
            }
        }
    }

    .fade-up {
        opacity: 0;
        animation: ${fadeUp} 0.6s forwards;
    }

    .numbers {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
    }

    .float {
        animation: ${float} 4s ease-in-out infinite;
    }

    .statsGrid {
        animation-delay: 0.5s;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #e5e7eb;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }

    .statItem {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
    }

    .numberRow {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        gap: 0.25rem;
    }

    .statNumber {
        font-size: 1.75rem;
        font-weight: bold;
        color: var(--primary);
    }

    .statLabel {
        color: var(--gray-dark);
        font-size: 0.875rem;
    }
`;

const HeroSection = () => {
    return (
        <HeroWrapper id="inicio">
            <div className="bg-1" />
            <div className="bg-2" />
            <div className="bg-3" />

            <div className="container">
                <div>
                    <div className="fade-up" style={{ animationDelay: "0.0s" }}>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.5rem 1rem",
                                background: "#EEF6F2",
                                borderRadius: "9999px",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <span
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "#1B9849",
                                    animation: "pulse 1.5s infinite",
                                }}
                            />
                            <span style={{ fontSize: "0.875rem", color: "var(--primary)", fontWeight: 500 }}>
                                Plataforma líder em gestão pecuária
                            </span>
                        </div>
                    </div>

                    <h1
                        className="fade-up"
                        style={{
                            animationDelay: "0.1s",
                            fontSize: "4rem",
                            fontWeight: "bold",
                            lineHeight: "1.2",
                            marginBottom: "1rem",
                        }}
                    >
                        Gestão completa do seu <span style={{ color: "#1B9849", fontSize: "4rem" }}>rebanho</span> em um só lugar
                    </h1>

                    <p
                        className="fade-up"
                        style={{
                            animationDelay: "0.2s",
                            color: "#6b7280",
                            fontSize: "1.125rem",
                            marginBottom: "2rem",
                            maxWidth: "500px",
                        }}
                    >
                        Registre, acompanhe e gerencie cada animal do seu rebanho com total praticidade e segurança.
                    </p>

                    <div
                        className="fade-up"
                        style={{
                            animationDelay: "0.3s",
                            display: "flex",
                            gap: "1rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <Link href="/login" className="button primary">
                            Começar Agora <ArrowRight size={20} style={{ marginLeft: 8 }} />
                        </Link>

                        <Link href="#recursos" className="button outline">
                            Conhecer Recursos
                        </Link>
                    </div>

                    <div className="fade-up statsGrid">
                        {[
                            { value: 5000, suffix: "+", label: "Animais Registrados" },
                            { value: 150, suffix: "+", label: "Contas Ativas" },
                            { value: 98, suffix: "%", label: "Uptime Garantido" },
                        ].map(({ value, suffix, label }) => (
                            <div className="statItem" key={label}>
                                <div className="numberRow">
                                    <div className="statNumber">
                                        <Odometer value={value} />
                                    </div>
                                    <div className="statNumber">{suffix}</div>
                                </div>
                                <div className="statLabel">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="fade-up" style={{ animationDelay: "0.3s", position: "relative" }}>
                    <div
                        style={{
                            background: "white",
                            borderRadius: "1.5rem",
                            padding: "1.5rem",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        }}
                    >
                        <div
                            style={{
                                background: "#f3f4f6",
                                borderRadius: "1rem",
                                height: 300,
                                position: "relative",
                                overflow: "hidden",
                                padding: "1.5rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: "1rem",
                                        background: "rgba(27,152,73,0.15)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <BarChart3 size={24} color="var(--primary)" />
                                </div>

                                <div>
                                    <div style={{ width: 120, height: 12, background: "#d1d5db", borderRadius: 8 }} />
                                    <div style={{ width: 90, height: 8, background: "#e5e7eb", borderRadius: 8, marginTop: 6 }} />
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: 12,
                                }}
                            >
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: "rgba(255,255,255,0.7)",
                                            backdropFilter: "blur(8px)",
                                            borderRadius: "1rem",
                                            padding: "1rem",
                                            border: "1px solid #e5e7eb",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: 8,
                                                background: "rgba(27,152,73,0.2)",
                                                marginBottom: 12,
                                            }}
                                        />
                                        <div style={{ width: "100%", height: 10, background: "#d1d5db", borderRadius: 4 }} />
                                        <div
                                            style={{
                                                width: "70%",
                                                height: 12,
                                                background: "rgba(27,152,73,0.3)",
                                                borderRadius: 4,
                                                marginTop: 8,
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div
                                style={{
                                    background: "rgba(255,255,255,0.7)",
                                    backdropFilter: "blur(8px)",
                                    borderRadius: "1rem",
                                    padding: "1rem",
                                    border: "1px solid #e5e7eb",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: 16,
                                    }}
                                >
                                    <div style={{ width: 80, height: 10, background: "#d1d5db", borderRadius: 6 }} />
                                    <div style={{ width: 60, height: 10, background: "rgba(27,152,73,0.3)", borderRadius: 6 }} />
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(27,152,73,0.2)" }} />
                                            <div style={{ flex: 1, height: 8, background: "#d1d5db", borderRadius: 4 }} />
                                            <div style={{ width: 48, height: 8, background: "rgba(27,152,73,0.3)", borderRadius: 4 }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="float"
                        style={{
                            position: "absolute",
                            left: "-1rem",
                            top: "25%",
                            background: "white",
                            padding: "1rem",
                            borderRadius: "1rem",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        }}
                    >
                        <Shield className="w-5 h-5 text-primary" />
                        <p>
                            <strong>Dados Seguros</strong>
                        </p>
                        <p>Criptografia avançada</p>
                    </div>

                    <div
                        className="float"
                        style={{
                            animationDelay: "1s",
                            position: "absolute",
                            right: "-1rem",
                            bottom: "25%",
                            background: "white",
                            padding: "1rem",
                            borderRadius: "1rem",
                            border: "1px solid #e5e7eb",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        }}
                    >
                        <Users className="w-5 h-5 text-primary" />
                        <p>
                            <strong>+200 usuários</strong>
                        </p>
                        <p>Ativos este mês</p>
                    </div>
                </div>
            </div>
        </HeroWrapper>
    );
};

export default HeroSection;
