"use client";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { nameApp, sloganApp } from "@/utils/appInfo";
import MyHead from "@/components/MyHead";
import { toast } from "sonner";

const LoginDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--gray-light);

    @media (max-width: 768px) {
        padding: 0 2rem;
    }

    .container {
        border-radius: 15px;
        background: var(--white);
        border: 1px solid var(--gray);
        width: 400px;
        padding: 2rem;
        display: flex;
        flex-direction: column;

        img {
            padding: 1rem 0;
            width: 100px;
            align-self: center;
        }

        h1 {
            text-align: center;
            font-weight: 800;
            color: var(--primary);
        }

        p {
            text-align: center;
            color: var(--gray-dark);
        }

        .menu {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            background: #f3f4f6;
            border-radius: 10px;
            button {
                flex: 1;
                height: 30px;
                border-radius: 10px;
                border: none;
                background: transparent;
                font-weight: bold;
                margin: 5px;
                cursor: pointer;
                color: var(--gray-dark);
                transition: all ease-in-out 0.3s;
                &:hover {
                    color: var(--black);
                }
            }

            .active {
                color: var(--black);
                background: var(--white);
                margin: 5px;
            }
        }

        .inputs {
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: -0.5rem;
                margin-top: 1rem;
                font-weight: 500;
            }

            input {
                width: 100%;
                height: 40px;
                padding: 0 10px;
                border-radius: 10px;
                border: 1px solid var(--gray);
                margin-top: 1rem;
                outline: none;
            }
        }

        .buttons {
            display: flex;
            flex-direction: column;

            button {
                margin-top: 1rem;
                width: 100%;
                height: 40px;
                border-radius: 10px;
                background: var(--primary);
                color: var(--white);
                font-weight: bold;
                border: none;
                cursor: pointer;
                transition: all ease-in-out 0.3s;

                &:hover {
                    background: var(--secundary);
                }
            }

            a {
                color: var(--primary);
                text-decoration: none;
                text-align: center;
                margin-top: 1rem;
                cursor: pointer;
            }
        }
    }
`;

export default function LoginPage() {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [isForgetPassword, setIsForgetPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUpName, setSignUpName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
    const [forgetEmail, setForgetEmail] = useState("");

    const getAccess = async () => {
        router.push("/dashboard");
    };

    const handleResetPassword = async () => {
        toast.success("E-mail de redefinição enviado!");
    };

    return (
        <LoginDetails>
            <MyHead title="Login" />
            <div className="container">
                <img src="/logo-transparent.png" />
                <h1>{nameApp}</h1>
                <p>{sloganApp}</p>

                <div className="menu">
                    <button
                        onClick={() => {
                            setIsSignUp(false);
                            setIsForgetPassword(false);
                        }}
                        className={!isSignUp ? "active" : ""}
                    >
                        Entrar
                    </button>
                    <button
                        onClick={() => {
                            setIsSignUp(true);
                            setIsForgetPassword(false);
                        }}
                        className={isSignUp ? "active" : ""}
                    >
                        Criar Conta
                    </button>
                </div>

                <div className="inputs">
                    {isForgetPassword && (
                        <>
                            <label>Email de Recuperação</label>
                            <input type="email" placeholder="seu@email.com" onChange={(e) => setForgetEmail(e.target.value)} />
                        </>
                    )}

                    {isSignUp && !isForgetPassword && (
                        <>
                            <label>Nome</label>
                            <input type="text" placeholder="Nome completo" onChange={(e) => setSignUpName(e.target.value)} />
                        </>
                    )}

                    {!isForgetPassword && (
                        <>
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                onChange={(e) => (isSignUp ? setSignUpEmail(e.target.value) : setEmail(e.target.value))}
                            />

                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder="********"
                                onChange={(e) => (isSignUp ? setSignUpPassword(e.target.value) : setPassword(e.target.value))}
                            />
                        </>
                    )}

                    {isSignUp && !isForgetPassword && (
                        <>
                            <label>Confirmar senha</label>
                            <input type="password" placeholder="********" onChange={(e) => setSignUpConfirmPassword(e.target.value)} />
                        </>
                    )}
                </div>

                <div className="buttons">
                    {isForgetPassword ? (
                        <button onClick={handleResetPassword}>Redefinir Senha</button>
                    ) : (
                        <button onClick={getAccess}>{isSignUp ? "Criar Conta" : "Entrar"}</button>
                    )}
                    {!isSignUp && !isForgetPassword && <a onClick={() => setIsForgetPassword(true)}>Esqueci minha senha</a>}
                </div>
            </div>
        </LoginDetails>
    );
}
