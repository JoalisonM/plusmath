import styled from 'styled-components';

export const Container = styled.header`
    
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button { 
        font-size: 1.2rem;
        font-weight: 400;
        background: var(--blue);
        color: #fff;

        border: 0;
        border-radius: 0.25rem;
        padding: 0rem 2rem;
        transition: filter 0.2s;
        height: 3rem;
    }

    button:hover {
        filter: brightness(0.9);
    }
`;