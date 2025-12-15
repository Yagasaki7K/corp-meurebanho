// pages/install.tsx
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function InstallPage() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        console.log(`Usuário escolheu: ${choiceResult.outcome}`);
        setDeferredPrompt(null);
    };

    return (
        <Container>
            <h1>Instale nosso Aplicativo</h1>
            {deferredPrompt ? (
                <button onClick={handleInstallClick}>Clique para instalar</button>
            ) : (
                <>
                    <p>Seu navegador não permite instalação automática. Por favor, use o menu do navegador.</p>
                    <p>Se estiver com dificuldade para encontrá-lo, ele é um icone de computador no campo de URL do seu navegador.</p>
                    <Link href="/">Voltar a Página Inicial</Link>
                </>
            )}
        </Container>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, var(--secundary) 0%, var(--primary) 100%);
    color: #fff;
    text-align: center;
    font-family: "DM Sans", sans-serif;
    padding: 0 20px;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    p,
    a {
        font-size: 1.1rem;
        margin-top: 1rem;
    }

    a {
        text-decoration: underline;
    }

    button {
        background: #fff;
        color: var(--primary);
        border: none;
        padding: 0.75rem 2rem;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

        &:hover {
            background: #f0f0f0;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        &:active {
            transform: translateY(1px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
    }
`;
