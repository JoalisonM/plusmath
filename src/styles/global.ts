import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgroung: #F0F2F5;
    --blue: #437EA8;
    --red: #e92929;
    
    --text-body: #3F3D56;
    --text-title: #575A89;
    --text-placeholder: #808080;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--backgroung);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, label {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--text-body);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .react-modal-content {
    position: relative;
    background: var(--backgroung);

    width: 100%;
    max-width: 576px;
    padding: 3rem;
    border-radius: 0.25rem;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;