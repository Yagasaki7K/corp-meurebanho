import styled from "styled-components";

const MenuDetails = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    z-index: 10;
    background: var(--white);
    border-right: 1px solid var(--gray);

    .open {
        display: initial;
    }

    .close {
        display: none;
    }

    .header {
        padding: 1rem 1rem 1.5rem 1rem;
        margin: 1rem 2rem;
        border-bottom: 1px solid var(--gray);

        a {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        img {
            width: 25px;
            border-radius: 16px;
            margin-right: 10px;
        }

        p {
            font-weight: bold;
            font-size: 1.25rem;
        }
    }

    .menu,
    .logout {
        padding: 1rem 1rem;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            font-size: 1.25rem;
            padding: 0.75rem;
            border-radius: 10px;
            color: var(--gray-dark);
            transition: all ease-in-out 0.3s;
            cursor: pointer;
            margin-bottom: 1rem;

            &:hover {
                color: var(--black);
                background: var(--gray);
            }

            p {
                margin-left: 0.5rem;
            }
        }

        .active {
            color: var(--white);
            background: var(--primary);

            &:hover {
                color: var(--white);
                background: var(--primary);
            }
        }
    }

    .logout {
        border-top: 1px solid var(--gray);
        margin-top: calc(100vh - 29rem);
    }
`;

export default MenuDetails;
