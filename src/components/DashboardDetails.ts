import styled from "styled-components";

const DashboardDetails = styled.div`
    padding: clamp(1.25rem, 1.8vw, 2.5rem);
    background: #fafafa;
    margin-left: 17rem;
    width: calc(100% - 17rem);
    max-width: calc(100vw - 2rem);
    margin-right: auto;

    @media (min-width: 1920px) {
        max-width: 1800px;
    }

    @media (max-width: 1440px) {
        margin-left: 14rem;
        width: calc(100% - 14rem);
    }

    @media (max-width: 1200px) {
        margin-left: 0;
        width: 100%;
        max-width: 100%;
    }

    @media (max-width: 768px) {
        .titleSection {
            margin-top: 1rem;
            margin-left: 0rem;
        }
    }

    .dashboardHeader {
        display: flex;
        align-items: center;

        @media (max-width: 1366px) {
            padding: 0 4rem;
        }

        @media (max-width: 768px) {
            justify-content: space-between;
            padding: 0 1rem;

            .rightContent {
                display: flex;
                gap: 2rem;
            }
        }
    }

    .menuMobile {
        display: none;

        @media (max-width: 768px) {
            display: flex;
            cursor: pointer;
        }
    }

    .eyeSlashed {
        margin-left: 2rem;
        cursor: pointer;

        @media (max-width: 768px) {
            margin-left: 0;
        }
    }

    .description {
        color: var(--gray-dark);

        @media (max-width: 768px) {
            margin-left: 0rem;
        }
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;

        @media (max-width: 1366px) {
            margin-left: 3rem;
        }

        @media (max-width: 768px) {
            margin: 1rem 0 0 0;
        }

        .card {
            max-width: calc(350px - 2.5rem);
            width: 350px;
            border: 1px solid var(--gray);
            padding: 1rem 2rem;
            border-radius: 16px;
            background: var(--white);

            @media (max-width: 768px) {
                width: 100%;
                max-width: 100vw;
                padding: 1rem 1rem;
            }

            .header {
                display: flex;
                justify-content: space-between;
                font-size: 0.75rem;

                svg {
                    width: 1rem;
                }
            }

            .primary {
                color: var(--primary);
            }
        }
    }

    .cardsAnimal {
        display: flex;
        flex-wrap: wrap;

        .cardAnimal {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0.5rem 0;
            border: 1px solid var(--gray);
            padding: 1rem 2rem;
            border-radius: 16px;
            margin-right: 1rem;
            background: var(--white);
            gap: 1rem;

            .leftContent {
                display: flex;

                h4 {
                    font-size: 1.2rem;
                }

                p {
                    color: var(--gray-dark);
                }

                svg {
                    background: var(--gray);
                    width: 30px;
                    height: 30px;
                    padding: 5px;
                    margin-right: 1rem;
                    border-radius: 50px;
                }
            }

            .rightContent {
                .percent {
                    color: var(--gray-dark);
                }

                .active {
                    color: var(--primary);
                }
            }

            @media (max-width: 1024px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.75rem;
            }

            @media (max-width: 768px) {
                margin: 0.5rem 0;
            }
        }
    }

    .graphPatrimonio,
    .graphAnimal {
        margin-top: 2rem;
        border: 1px solid var(--gray);
        padding: 1rem 2rem;
        border-radius: 16px;
        background: var(--white);
        max-width: 100%;
        width: 100%;

        @media (max-width: 1366px) {
            margin-left: 3rem;
            max-width: 95%;
        }

        h1 {
            margin: 1rem 0;
        }

        @media (max-width: 768px) {
            max-width: 100%;
            width: 100%;
            margin: 1rem 0 0 0;
        }
    }

    .graphs {
        display: flex;
        max-width: 100%;
        gap: 2rem;
        flex-wrap: wrap;
        align-items: stretch;

        @media (max-width: 1366px) {
            margin-left: 3rem;
        }

        @media (max-width: 768px) {
            margin: 0;
        }

        .graphType,
        .graphParticipation {
            width: 48%;
            margin-top: 2rem;
            border: 1px solid var(--gray);
            padding: 2rem;
            border-radius: 16px;
            background: var(--white);
            min-width: 320px;

            h1 {
                margin-bottom: 2rem;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }
    }

    .input {
        position: relative;
        margin-top: 1rem;

        svg {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            height: 1rem;
            width: 1rem;
            color: var(--black);

            @media (max-width: 1366px) {
                margin-left: 3rem;
            }

            @media (max-width: 768px) {
                margin: 0;
            }
        }

        input {
            outline: none;
            font-size: 1rem;
            color: var(--black);
            width: 100%;
            padding: 1.5rem 2.5rem;
            border-radius: 15px;
            border: 1px solid var(--gray);
            font-family: "DM Sans", sans-serif;

            @media (max-width: 1366px) {
                width: 97%;
                margin-left: 3rem;
            }

            @media (max-width: 768px) {
                width: 100%;
                margin: 0;
            }
        }
    }

    .menuRebanho {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 16px;
        background: var(--gray-lighter);
        border: 1px solid var(--gray);
        margin-top: 2rem;
        padding: 0.5rem;

        @media (max-width: 1366px) {
            margin-left: 3rem;
        }

        @media (max-width: 768px) {
            margin: 0;
        }

        li {
            font-size: 1rem;
            color: var(--black);
            font-weight: 500;
            margin-right: 1rem;
            text-align: center;
            width: 33%;
            padding: 1rem;
            border-radius: 15px;
            list-style: none;
            background: var(--gray-lighter);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 1366px) {
                width: 25%;
            }

            svg {
                width: 1.1rem;
                height: 1.1rem;
                margin-right: 0.5rem;
                color: var(--black);
            }
        }

        .active {
            background: var(--white);
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
        }
    }

    .contentRebanho {
        display: flex;
        gap: 1rem;
        min-height: 60vh;
        height: auto;

        @media (max-width: 1366px) {
            margin-left: 3rem;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            height: auto;
            gap: 0;
            margin: 0;
        }

        .notFoundRebanho {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 1rem;
            border-radius: 16px;
            margin: 0rem auto;
            padding: 0.5rem;
            height: 70%;

            @media (max-width: 768px) {
                margin: 10rem auto;
            }
        }

        .cardsRebanho {
            margin-top: 1rem;

            .cardRebanho {
                display: flex;
                padding: 1rem;
                max-width: 350px;
                width: 350px;

                @media (max-width: 768px) {
                    max-width: 100%;
                    width: 100%;
                }

                height: 160px;
                margin: 0.5rem 0;
                border-radius: 15px;
                color: var(--white);
                border: 1px solid var(--gray);
                gap: 1rem;

                .leftContent,
                .rightContent {
                    display: flex;
                    flex-direction: column;
                }

                .rightContent {
                    width: 85%;
                }

                .beef,
                .baby,
                .dna,
                .syringe {
                    width: 40px;
                    height: 40px;
                    border-radius: 5px;
                    padding: 10px;
                }

                .beef,
                .baby {
                    background: var(--green-bg);
                    color: var(--primary);
                }

                .dna {
                    background: var(--purple-bg);
                    color: var(--purple);
                }

                .syringe {
                    background: var(--pink-bg);
                    color: var(--pink);
                }

                h1 {
                    font-size: 1.2rem;
                    color: var(--black);
                    margin-bottom: 0rem;
                }

                p {
                    margin: 0;
                    text-align: left;
                }

                .green,
                .yellow,
                .red {
                    text-transform: uppercase;
                    border-radius: 16px;
                    width: 50px;
                    text-align: center;
                    color: var(--primary);
                }

                .green {
                    background: var(--green-bg);
                    color: var(--primary);
                }

                .yellow {
                    background: var(--yellow-bg);
                    color: var(--yellow);
                }

                .value {
                    margin-top: 5px;
                }

                .buttonsRebanho {
                    gap: 1rem;
                    display: flex;
                    justify-content: center;
                    margin-top: 0.5rem;

                    button {
                        font-weight: normal;
                        border: 1px solid var(--gray);
                        background: none;
                        display: flex;
                        border-radius: 5px;
                        height: 25px;
                        cursor: pointer;
                        transition: 0.3s all ease-in-out;

                        &:hover {
                            background: var(--gray);
                        }

                        text-align: center;
                        align-items: center;
                        font-family: "DM Sans", sans-serif;

                        svg {
                            width: 10px;
                            height: 10px;
                        }
                    }

                    .details {
                        width: 100%;
                        gap: 1rem;
                        text-align: center;
                        justify-content: center;
                        align-items: center;

                        svg {
                            color: var(--black);
                        }
                    }

                    .trash,
                    .edit {
                        width: 25px;
                        padding: 0 2px;
                    }

                    .trash {
                        color: var(--red);
                    }

                    .edit {
                        color: var(--primary);
                    }
                }
            }
        }

        h1 {
            font-size: 2rem;
            color: var(--gray-dark);
            font-weight: 500;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            color: var(--gray-dark);
            font-weight: 400;
            text-align: center;
            margin-top: -1rem;
        }

        svg {
            width: 5rem;
            height: 5rem;
            margin: 0.5rem 0;
            color: var(--gray-dark);
        }
    }

    .headerBuy {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 16px;

        @media (max-width: 1366px) {
            margin-left: 3rem;
        }

        @media (max-width: 768px) {
            display: block;
            margin-left: 0.5rem;
        }

        .menuMobile {
            @media (max-width: 768px) {
                margin-top: 1rem;
            }
        }

        .leftContent {
            @media (max-width: 768px) {
                display: flex;
                justify-content: space-between;

                svg {
                    margin-top: 0.5rem;
                    margin-right: 1rem;
                    cursor: pointer;
                }
            }
        }

        button {
            background: var(--primary);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 2rem;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-family: "DM Sans", sans-serif;

            @media (max-width: 768px) {
                padding: 1rem;
                margin-top: 1rem;
            }

            &:hover {
                background: var(--secundary);
            }

            svg {
                margin-right: 1rem;
                color: var(--gray);
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }

    .cardBuy {
        background: var(--white);
        padding: 2rem;
        border-radius: 16px;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border: 1px solid var(--gray);

        @media (max-width: 1366px) {
            margin-left: 3rem;
        }

        @media (max-width: 768px) {
            margin: 1rem 0 0 0;
        }

        h3 {
            color: var(--gray-dark);
        }

        .primary {
            color: var(--primary);
        }
    }

    .contentBuy {
        .notFoundBuy {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
            border-radius: 16px;
            color: var(--gray-dark);
            height: 70%;

            svg {
                margin-bottom: 1rem;
                width: 5rem;
                height: 5rem;
            }
        }

        .cardSell {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0.5rem 0;
            border: 1px solid var(--gray);
            padding: 1rem 2rem;
            border-radius: 16px;
            margin-right: 1rem;
            background: var(--white);
            gap: 1rem;

            @media (max-width: 1366px) {
                margin-left: 3rem;
                width: 97%;
            }

            @media (max-width: 768px) {
                margin: 0;
                width: 100%;
                padding: 1rem;
            }

            .leftContent {
                display: flex;

                h4 {
                    font-size: 1.2rem;
                }

                p {
                    color: var(--gray-dark);
                }

                svg {
                    background: var(--green-bg);
                    color: var(--primary);
                    width: 30px;
                    height: 30px;
                    padding: 5px;
                    margin-right: 1rem;
                    border-radius: 5px;
                }
            }

            .rightContent {
                display: flex;
                align-items: center;
                gap: 1rem;

                .percent {
                    color: var(--gray-dark);
                }

                .active {
                    color: var(--primary);
                }

                svg {
                    width: 25px;
                    height: 25px;
                    padding: 5px;
                    color: var(--red);

                    border-radius: 5px;
                    cursor: pointer;

                    &:hover {
                        background: var(--gray);
                    }
                }
            }

            @media (max-width: 900px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 0.75rem;
            }

            @media (max-width: 768px) {
                margin: 0.5rem 0;
            }
        }
    }

    @media (max-width: 1600px) {
        margin-left: 15rem;

        .about .content,
        .blog .article,
        .time .container,
        .blogSearch .article {
            padding: 1rem 14rem;
        }

        .graphs {
            gap: 1.5rem;
        }
    }

    @media (max-width: 1440px) {
        margin-left: 14rem;

        .graphs {
            gap: 1.25rem;
        }

        .graphPatrimonio,
        .graphAnimal {
            width: 100%;
        }
    }

    @media (max-width: 1280px) {
        margin-left: 12rem;

        .graphs {
            flex-direction: column;
            width: 100%;
        }

        .graphs .graphType,
        .graphs .graphParticipation {
            width: 100%;
        }
    }

    @media (max-width: 1024px) {
        margin-left: 0;
        padding: 1.5rem;

        .cards {
            justify-content: center;
        }

        .graphs {
            flex-direction: column;
            padding: 0;
        }

        .graphPatrimonio,
        .graphAnimal {
            width: 100%;
        }

        .graphParticipation {
            width: 100%;
        }

        .modal-content {
            width: 28rem;
            height: auto;
        }
    }

    @media (max-width: 912px) {
        .menuRebanho li {
            font-size: 0.9rem;
            padding: 0.8rem;
        }

        .cardBuy {
            padding: 1.5rem;
        }
    }

    @media (max-width: 820px) {
        .headerBuy {
            flex-direction: column;
            gap: 1rem;
        }

        .cards {
            flex-direction: column;
            align-items: center;
        }

        .graphs {
            width: 100%;
        }

        .graphPatrimonio,
        .graphAnimal {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        .menuRebanho {
            flex-direction: column;
            gap: 1rem;
        }

        .menuRebanho li {
            width: 100%;
        }

        .modal-content {
            width: 22rem;
        }
    }

    @media (max-width: 600px) {
        padding: 1rem;

        .card {
            width: 100%;
        }

        .graphPatrimonio,
        .graphAnimal {
            padding: 1rem;
        }

        .modal-content {
            width: 20rem;
        }
    }

    @media (max-width: 480px) {
        .modal-content {
            width: 18rem;
        }

        .headerBuy button {
            width: 100%;
            justify-content: center;
        }
    }

    @media (max-width: 390px) {
        .modal-content {
            width: 16rem;
        }

        .graphPatrimonio,
        .graphAnimal {
            padding: 0.5rem;
        }
    }

    @media (max-width: 320px) {
        .modal-content {
            width: 14rem;
        }

        .headerBuy button {
            font-size: 0.9rem;
        }
    }
`;

export default DashboardDetails;
