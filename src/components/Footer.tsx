import { firstNameApp, nameApp, secondNameApp } from "@/utils/appInfo";
import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background: var(--black);
    color: var(--white);
    padding: 6rem 0;

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .grid {
        display: grid;
        gap: 3rem;
    }

    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .brand {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .brand-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .brand-icon img {
        width: 48px;
        height: 48px;
        background: var(--primary);
        border-radius: 0.75rem;
        object-fit: cover;
    }

    .brand-name {
        font-size: 1.5rem;
        font-weight: 700;

        span {
            font-size: 1.5rem;
        }
    }

    .brand-text {
        color: rgba(var(--gray), 0.7);
        max-width: 320px;
        line-height: 1.6;
    }

    .section-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: var(--white);
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    li {
        list-style: none;
    }

    .link {
        color: rgba(var(--gray), 0.7);
        text-decoration: none;
        font-size: 1rem;
        transition: 0.2s;

        &:hover {
            color: var(--primary);
        }
    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: rgba(var(--gray), 0.7);
        font-size: 0.95rem;
        text-decoration: none;
        transition: 0.2s;

        &:hover {
            color: var(--primary);
        }
    }

    .icon {
        width: 18px;
        height: 18px;
        fill: currentColor;
    }

    .bottom {
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(var(--gray), 0.15);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (min-width: 768px) {
        .bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }

    .bottom-text {
        color: rgba(var(--gray), 0.6);
        font-size: 0.875rem;
    }

    .bottom-links {
        display: flex;
        gap: 1rem;
    }

    .bottom-links a {
        color: rgba(var(--gray), 0.6);
        font-size: 0.875rem;
        text-decoration: none;
        transition: 0.2s;

        &:hover {
            color: var(--primary);
        }
    }
`;

const Footer = () => {
    const MailIcon = () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" fill="none" />
            <path d="M4 4l8 8 8-8" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
    );

    const PhoneIcon = () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path
                d="M6.6 10.8c1.2 2.4 3 4.2 5.4 5.4l2.4-2.4c.3-.3.9-.3 1.2 0l3 3c.3.3.3.9 0 1.2-1.2 1.2-3 1.8-4.8 1.8C8.4 20 4 15.6 4 10.2 4 8.4 4.6 6.6 5.8 5.4c.3-.3.9-.3 1.2 0l3 3c.3.3.3.9 0 1.2L6.6 10.8z"
                fill="currentColor"
            />
        </svg>
    );

    const PinIcon = () => (
        <svg className="icon" viewBox="0 0 24 24">
            <path d="M12 2C8.7 2 6 4.7 6 8c0 5 6 12 6 12s6-7 6-12c0-3.3-2.7-6-6-6z" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="12" cy="8" r="2" fill="currentColor" />
        </svg>
    );

    return (
        <StyledFooter>
            <div className="container">
                <div className="grid">
                    <div className="brand">
                        <div className="brand-header">
                            <div className="brand-icon">
                                <img src="/logo.png" />
                            </div>
                            <span className="brand-name">
                                {firstNameApp}
                                <span style={{ color: "var(--primary)" }}>{secondNameApp}</span>
                            </span>
                        </div>

                        <p className="brand-text">
                            Plataforma completa para gestão de rebanho bovino. Simplifique o controle do seu rebanho com tecnologia de ponta.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <Link href="mailto:contato@meurebanho.com.br" className="contact-item">
                                <MailIcon /> contato@meurebanho.com.br
                            </Link>

                            <Link href="tel:+5511999999999" className="contact-item">
                                <PhoneIcon /> (11) 99999-9999
                            </Link>

                            <div className="contact-item" style={{ cursor: "default" }}>
                                <PinIcon /> São Paulo, SP - Brasil
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="section-title">Links Rápidos</h4>
                        <ul>
                            <li>
                                <Link href="#" className="link">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="#recursos" className="link">
                                    Recursos
                                </Link>
                            </li>
                            <li>
                                <Link href="#como-funciona" className="link">
                                    Como Funciona
                                </Link>
                            </li>
                            <li>
                                <Link href="/install" className="link">
                                    Download App
                                </Link>
                            </li>
                            <li>
                                <Link href="#contato" className="link">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="section-title">Legal</h4>
                        <ul>
                            <li>
                                <Link href="#" className="link">
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="link">
                                    Privacidade
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="link">
                                    Cookies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="link">
                                    Suporte
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bottom">
                    <p className="bottom-text">
                        © {new Date().getFullYear()} {nameApp}. Todos os direitos reservados.
                    </p>

                    <div className="bottom-links">
                        <Link href="#">Política de Privacidade</Link>
                        <Link href="#">Termos de Serviço</Link>
                    </div>
                </div>
            </div>
        </StyledFooter>
    );
};

export default Footer;
