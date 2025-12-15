import styled from "styled-components";

const SlugDetails = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        padding: clamp(1.25rem, 1.8vw, 2.5rem);
        background: #fafafa;
        margin-left: 17rem;
        width: calc(100% - 17rem);
        max-width: calc(100vw - 2rem);
        margin-right: auto;
        font-family: "DM Sans", sans-serif;

        @media (min-width: 1920px) {
            max-width: 1800px;
        }

        @media (max-width: 1440px) {
            margin-left: 14rem;
            width: calc(100% - 14rem);
        }

        @media (max-width: 1366px) {
            margin-left: 15.25rem;
        }

        @media (max-width: 1200px) {
            margin-left: 0;
            width: 100%;
            max-width: 100%;
        }

        @media (max-width: 768px) {
            margin-left: 0;

            .titleSection {
                margin-top: 1rem;
                margin-left: 0rem;
            }
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem;

            .step {
                display: flex;
                align-items: center;
                gap: 1rem;

                .arrowLeft {
                    cursor: pointer;
                    margin-top: -1rem;
                }

                svg {
                    color: var(--gray-dark);

                    &:hover {
                        background: var(--gray);
                        border-radius: 5px;
                        color: var(--gray-dark);
                    }
                }

                .menu {
                    width: 15px;
                    height: 15px;
                }

                .eye {
                    width: 18px;
                    height: 18px;
                    cursor: pointer;
                    margin-top: 5px;

                    &:hover {
                        background: none;
                    }
                }

                .title {
                    margin-left: 2rem;

                    p {
                        color: var(--gray-dark);
                        margin-bottom: 1rem;
                    }
                }

                .menuMobile {
                    align-items: center;
                    margin-top: 0.5rem;
                    margin-left: 1rem;
                    display: none;

                    @media (max-width: 768px) {
                        display: initial;
                    }
                }
            }

            .status {
                .green,
                .yellow,
                .red {
                    text-transform: uppercase;
                    border-radius: 16px;
                    width: 60px;
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
            }
        }

        .content {
            display: flex;
            gap: 1.5rem;
            align-items: flex-start;
            flex-wrap: wrap;

            @media (max-width: 1200px) {
                flex-direction: column;
            }

            .leftContent {
                border: 1px solid var(--gray);
                padding: 1rem;
                background: var(--white);
                border-radius: 15px;
                width: 100%;
                max-width: 420px;
                flex: 1 1 320px;

                img,
                iframe {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 15px;
                }

                p {
                    margin-top: 1rem;
                }

                .birth {
                    margin-top: 1rem;

                    p {
                        margin: 0;
                    }

                    .highlight {
                        color: var(--primary);
                    }
                }
            }

            .rightContent {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                flex: 2 1 520px;
                width: 100%;

                .cards {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    align-items: stretch;

                    .card {
                        padding: 1rem;
                        border: 1px solid var(--gray);
                        border-radius: 15px;
                        height: 8rem;
                        width: 100%;
                        max-width: 18rem;

                        @media (max-width: 768px) {
                            max-width: 100%;
                        }
                        flex: 1 1 240px;

                        p {
                            color: var(--gray-dark);
                        }

                        .step {
                            display: flex;
                            align-items: center;

                            svg {
                                width: 10px;
                                height: 10px;
                                margin-right: 0.5rem;
                            }
                        }

                        h4 {
                            margin: 1rem 0;
                            font-size: 1.2rem;
                            color: var(--primary);
                        }

                        .black {
                            color: var(--black);
                        }
                    }
                }

                .achivements,
                .seller,
                .genealogy,
                .owners,
                .location,
                .maps,
                .resume,
                .details {
                    padding: 1rem;
                    border: 1px solid var(--gray);
                    border-radius: 15px;
                }

                .achivements {
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    h4 {
                        display: flex;
                        align-items: center;
                        font-size: 1.2rem;

                        svg {
                            width: 15px;
                            height: 15px;
                            margin-right: 0.5rem;
                            color: var(--yellow);
                        }
                    }

                    .achivement {
                        display: flex;
                        margin-top: 1rem;
                        padding: 1rem;
                        gap: 1rem;

                        @media (max-width: 768px) {
                            flex-direction: column;
                        }

                        .trophy {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;

                            svg {
                                width: 50px;
                                height: 50px;
                                padding: 1rem;
                                color: var(--yellow);
                                border: 1px solid var(--gray);
                                border-radius: 15px;
                                margin-bottom: 0.5rem;
                            }

                            p {
                                text-align: center;
                                width: 100px;
                                color: var(--gray-dark);
                            }
                        }
                    }
                }

                .seller {
                    .status {
                        color: var(--primary);
                    }
                }

                .genealogy {
                    h4 {
                        display: flex;
                        align-items: center;
                        font-size: 1.2rem;

                        @media (max-width: 768px) {
                            margin-bottom: 1rem;
                        }

                        svg {
                            width: 15px;
                            height: 15px;
                            margin-right: 0.5rem;
                        }
                    }

                    .graph {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        gap: 2rem;
                        flex-wrap: wrap;

                        @media (max-width: 1366px) {
                            gap: 1rem;
                        }

                        @media (max-width: 1200px) {
                            flex-direction: column;
                        }

                        @media (max-width: 768px) {
                            .col-1,
                            .col-5 {
                                display: flex;
                                gap: 1rem;
                            }
                        }

                        .animal {
                            border: 1px solid var(--gray);
                            background: var(--gray-lighter);
                            padding: 1rem;
                            border-radius: 15px;
                            margin: 1rem 0;
                            width: 12rem;

                            @media (max-width: 1366px) {
                                width: 10rem;
                            }

                            @media (max-width: 768px) {
                                margin: 0;
                            }

                            p {
                                color: var(--gray-dark);

                                b {
                                    color: var(--black);
                                }
                            }
                        }

                        .border {
                            border: 1px solid var(--primary);

                            p {
                                b {
                                    color: var(--primary);
                                }
                            }
                        }
                    }
                }

                .owners {
                    display: flex;
                    flex-direction: column;

                    h4 {
                        display: flex;
                        align-items: center;
                        font-size: 1.2rem;

                        svg {
                            width: 15px;
                            height: 15px;
                            margin-right: 0.5rem;
                        }
                    }

                    .owner {
                        display: flex;
                        justify-content: space-between;
                        padding: 1rem;
                        border-radius: 15px;
                        margin: 1rem 0;
                        border: 1px solid var(--gray);

                        p {
                            display: flex;
                        }
                    }

                    .green {
                        border: 2px solid var(--primary);
                        background: var(--green-bg);

                        p {
                            .pin {
                                width: 15px;
                                height: 15px;
                                color: var(--primary);
                                margin: 0 0.5rem;
                            }
                        }

                        span {
                            padding: 0 5px;
                            border-radius: 15px;
                            background: var(--primary);
                            border: 1px solid var(--primary);
                            color: var(--white);
                        }
                    }
                }

                .location {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;

                    .pin {
                        width: 15px;
                        height: 15px;
                        color: var(--primary);
                    }

                    .chevron {
                        cursor: pointer;
                        transition: 0.3s all ease-in-out;

                        &:hover {
                            color: var(--gray-dark);
                        }
                    }

                    .stepMaster {
                        display: flex;
                        align-items: center;
                        gap: 1rem;

                        .loc {
                            color: var(--gray-dark);
                        }

                        .address {
                            font-weight: bold;
                        }

                        .resp {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            color: var(--gray-dark);

                            svg {
                                width: 10px;
                                height: 10px;
                            }
                        }
                    }
                }

                .maps {
                    iframe {
                        border-radius: 15px;
                        border: none;
                        width: 100%;

                        @media (max-width: 768px) {
                            height: 600px;
                        }
                    }
                }

                .resume {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 1rem;

                    h4 {
                        font-size: 1.2rem;
                    }

                    .history {
                        display: flex;
                        justify-content: space-between;
                        padding: 0.5rem;
                        border-radius: 15px;
                        margin-top: 1rem;
                        border: 1px solid var(--gray);
                        background: var(--gray-lighter);
                        align-items: center;

                        @media (max-width: 640px) {
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 0.5rem;
                        }

                        .dateBill {
                            font-weight: 600;
                        }

                        .value {
                            padding: 0 1rem;
                        }

                        .valuePlus {
                            color: var(--primary);
                            font-weight: bold;
                        }

                        .valueMinor {
                            color: var(--red);
                            font-weight: bold;
                        }

                        .valuePrice {
                            color: var(--gray-dark);
                        }
                    }
                }

                .details {
                    h4 {
                        font-size: 1.2rem;
                    }

                    .title {
                        display: flex;
                        padding: 0 0.5rem;
                        justify-content: space-between;
                        gap: 1rem;

                        @media (max-width: 640px) {
                            flex-direction: column;
                            align-items: flex-start;
                        }
                    }

                    .extract {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 1rem;
                        border: 1px solid var(--gray);
                        border-radius: 15px;
                        margin-top: 1rem;

                        @media (max-width: 768px) {
                            flex-direction: column;
                        }

                        .type {
                            font-weight: bold;
                        }

                        .buy {
                            span {
                                color: var(--red);
                            }
                        }

                        .sell {
                            span {
                                color: var(--primary);
                            }
                        }

                        .tax {
                            span {
                                color: var(--red);
                            }
                        }

                        .total {
                            color: var(--black);
                        }
                    }
                }
            }
        }
    }
`;

export default SlugDetails;
