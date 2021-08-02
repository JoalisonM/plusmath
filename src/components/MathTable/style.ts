import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        
        th {
            color: var(--text-title);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        tbody tr {
            opacity: 0.8;
        }

        tbody tr:hover {
            opacity: 1;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            border-radius: 0.25rem;
            background: #fff;
            color: var(--text-body);
        }
    }
`;