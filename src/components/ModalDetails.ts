import styled from "styled-components";

const ModalDetails = styled.div`
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;

        .modal-content {
            padding: 2rem;
            border-radius: 16px;
            background: var(--white);
            color: var(--black);
            width: 35rem;
            max-width: 35rem;
            height: 50%; /* altura fixa */
            display: flex;
            flex-direction: column;
            overflow-y: auto; /* ativa rolagem interna */
            overflow-x: hidden; /* evita rolagem lateral */
        }

        /* Conteúdo interno permanece igual */

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 1rem;

            button {
                border: none;
                background: transparent;
                cursor: pointer;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            width: 100%;

            label {
                margin-bottom: 0.5rem;
                text-align: left;
            }

            input,
            select {
                border: 1px solid var(--gray);
                border-radius: 8px;
                padding: 0.5rem;
                margin-bottom: 1rem;
                width: 100%;
                font-size: 1rem;
                outline: none;
                font-family: "DM Sans", sans-serif;
                background: transparent;
            }

            .genealogy {
                display: flex;
                flex-direction: column;
                padding: 1rem;
                background: var(--gray-light);
                border: 1px solid var(--gray);
                border-radius: 15px;
                margin: 1rem 0;

                .fathers,
                .mathers {
                    display: flex;
                    flex-direction: row;

                    .step {
                        display: flex;
                        flex-direction: column;

                        input {
                            width: 95%;
                        }
                    }
                }
            }

            .infos,
            .auction {
                display: flex;
                gap: 1rem;

                .step {
                    display: flex;
                    flex-direction: column;

                    input {
                        width: 100%;
                    }
                }
            }

            .infoCheckbox {
                display: flex;
                text-align: center;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 0;

                p {
                    margin-top: -0.75rem;
                }
            }

            .infoCheckbox input[type="checkbox"] {
                appearance: none;
                width: 0.5em;
                height: 0.5em;
                border: 2px solid var(--gray-dark);
                border-radius: 4px;
                cursor: pointer;
                position: relative;
            }

            .infoCheckbox input[type="checkbox"]:checked {
                background: var(--primary);
                border-color: var(--primary);
            }

            .infoCheckbox input[type="checkbox"]:checked::after {
                content: "";
                position: absolute;
                top: 2px;
                left: 6px;
                width: 4px;
                height: 8px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }

            .achivements {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 1rem;
                background: var(--yellow-bg);
                border: 1px solid var(--yellow);
                border-radius: 15px;
                margin-bottom: 1rem;

                .header {
                    display: flex;

                    .icon {
                        svg {
                            margin-top: 4px;
                            background: var(--yellow);
                            width: 3rem;
                            color: var(--white);
                            border-radius: 10px;
                            padding: 4px 2px;
                        }
                    }
                }

                .title {
                    display: flex;
                    flex-direction: column;
                    margin: 0 0.75rem;

                    p {
                        font-size: 0.8rem;
                    }
                }

                button {
                    display: flex;
                    align-items: center;
                    background: var(--white);
                    border: 1px solid var(--yellow);
                    border-radius: 10px;
                    padding: 0 1rem;
                    font-size: 0.8rem;
                    transition: all ease-in-out 0.3s;
                    cursor: pointer;

                    &:hover {
                        background: var(--yellow-bg);
                    }

                    svg {
                        margin-right: 0.5rem;
                        width: 1.25rem;
                    }
                }
            }

            .partners {
                margin: 0.5rem 0;
                border: 1px solid var(--gray);
                background: var(--gray-light);
                padding: 1rem;
                border-radius: 15px;

                h4 {
                    margin-bottom: 1rem;
                }

                .step {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    .stepholder-2 {
                        display: flex;
                        justify-content: center;

                        svg {
                            margin-top: -1rem;
                        }
                    }

                    svg {
                        width: 15px;
                        height: 15px;
                        color: var(--red);
                        margin-top: 0.5rem;
                    }

                    button {
                        border: none;
                        background: none;
                        cursor: pointer;
                    }
                }

                .infoCheckbox {
                    margin: 0;
                    padding: 0;
                }
            }

            .partnerBtn {
                padding: 0.5rem 0;
                background: var(--gray-light);
                font-weight: normal;
                border: 1px solid var(--gray);
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: 0.3s ease-in-out all;

                svg {
                    width: 10px;
                    height: 10px;
                    margin-right: 0.5rem;
                }

                &:hover {
                    background: var(--green-bg);
                    color: var(--primary);

                    svg {
                        color: var(--primary);
                    }
                }
            }

            .percentOwner {
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--green-bg);
                margin-top: 0.5rem;
                padding: 0.5rem 0;
                color: var(--primary);
                border-radius: 5px;

                svg {
                    width: 10px;
                    height: 10px;
                    margin-right: 0.5rem;
                }
            }

            .buttons {
                display: flex;
                gap: 1rem;
                margin-top: 2rem;

                button {
                    border: none;
                    width: 100%;
                    border-radius: 8px;
                    padding: 1rem 2rem;
                    font-size: 1rem;
                    cursor: pointer;
                    font-family: "DM Sans", sans-serif;
                }

                .green {
                    background: var(--primary);
                    color: var(--white);

                    &:hover {
                        background: var(--secundary);
                    }
                }

                .cancel {
                    background: var(--white);
                    border: 1px solid var(--gray);
                    color: var(--black);

                    &:hover {
                        background: var(--gray-light);
                    }
                }
            }
        }
    }
`;

export default ModalDetails;
