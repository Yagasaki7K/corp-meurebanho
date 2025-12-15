import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Menu, X } from "lucide-react";
import { firstNameApp, secondNameApp } from "@/utils/appInfo";
import Link from "next/link";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: var(--white);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1rem;

        .nav-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 4rem;

            @media (min-width: 1024px) {
                height: 5rem;
            }

            .logo {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                text-decoration: none;

                .logo-icon {
                    width: 2.5rem;
                    height: 2.5rem;

                    img {
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 0.75rem;
                    }
                }

                .logo-text {
                    font-weight: bold;
                    color: var(--black);

                    span {
                        color: var(--primary);
                    }
                }
            }

            .desktop-nav {
                display: none;
                gap: 2rem;
                align-items: center;

                a {
                    text-decoration: none;
                    color: var(--black);
                    font-weight: 500;
                    transition: color 0.3s;

                    &:hover {
                        color: var(--primary);
                    }
                }

                @media (min-width: 1024px) {
                    display: flex;
                }
            }

            .desktop-cta {
                display: none;
                gap: 1rem;
                align-items: center;

                @media (min-width: 1024px) {
                    display: flex;
                }
            }

            .mobile-menu-btn {
                display: block;
                padding: 0.5rem;
                color: var(--white);
                background: none;
                border: none;
                cursor: pointer;

                @media (min-width: 1024px) {
                    display: none;
                }
            }

            button {
                background: var(--primary);
                color: var(--white);
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background: var(--secundary);
                }
            }
        }

        .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem 0;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            animation: ${fadeIn} 0.3s ease-in;

            a {
                text-decofration: none;
                color: var(--black);
                font-weight: 500;
                transition: color 0.3s;
                padding: 0.5rem 0;

                &:hover {
                    color: var(--primary);
                }
            }

            .mobile-cta {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(0, 0, 0, 0.05);

                button {
                    width: 100%;
                    background: var(--primary);
                    color: var(--white);
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }

            @media (min-width: 1024px) {
                display: none;
            }
        }
    }
`;

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Início", href: "#inicio" },
        { name: "Recursos", href: "#recursos" },
        { name: "Como Funciona", href: "#como-funciona" },
        { name: "Contato", href: "#contato" },
    ];

    return (
        <NavbarWrapper>
            <div className="container">
                <div className="nav-inner">
                    <Link href="#" className="logo">
                        <div className="logo-icon">
                            <img src="/logo.png" />
                        </div>
                        <span className="logo-text">
                            {firstNameApp}
                            <span>{secondNameApp}</span>
                        </span>
                    </Link>

                    <div className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="desktop-cta">
                        <button onClick={() => (window.location.href = "/login")}>Fazer Login</button>
                    </div>

                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} color="#8a909c" /> : <Menu size={24} color="#8a909c" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                        <div className="mobile-cta">
                            <button onClick={() => (window.location.href = "/login")}>Fazer Login</button>
                        </div>
                    </div>
                )}
            </div>
        </NavbarWrapper>
    );
};

export default Navbar;
