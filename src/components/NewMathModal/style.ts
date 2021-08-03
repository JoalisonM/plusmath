import styled from "styled-components";

export const Form = styled.form`
  h2 { 
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .label-input { 
    position: relative; 
    padding-top: 25px;
    margin-bottom: 1rem;

    input {
      background: var(--backgroung);
      border: 1px solid #d7d7d7;
      border-radius: 0.25rem;
      outline: none;
      height: 4rem;
      width: 100%;
      padding: 0 1.5rem;

      transition: all .1s linear;
      -webkit-transition: all .1s linear;
      -moz-transition: all .1s linear;
      -webkit-appearance: none;
    }

    input:focus {
        border: 2px solid #437EA8;
    }

    input::placeholder{
        color: transparent;
    }

    label {
      background-color: var(--backgroung);
      color: var(--text-placeholder);
      font-size: 0.9rem;

      pointer-events: none;
      position: absolute;
      top: calc(50% - 16px);
      left: 0.9rem;
      transition: all .1s linear;
      -webkit-transition: all .1s linear;
      -moz-transition: all .1s linear;
      padding: 0.3rem;
      box-sizing: border-box;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
      font-size: 13px;
      top: 0;
      color: #437EA8;
    }
  }
  .label-textarea {
    textarea {
      background: var(--backgroung);
      height: 8rem;
      width: 100%;
      padding: 1rem 1.5rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      outline: none;
      resize: none;

      transition: all .1s linear;
      -webkit-transition: all .1s linear;
      -moz-transition: all .1s linear;
      -webkit-appearance: none;
    }

    textarea:focus {
      border: 2px solid #437EA8;
    }
    textarea::placeholder{
      color: transparent;
    }

    label {
      background-color: var(--backgroung);
      color: var(--text-placeholder);
      font-size: 0.9rem;

      pointer-events: none;
      position: absolute;
      left: 4rem;

      box-sizing: border-box;
      padding: 0.3rem;

      top: calc(50% - 2px);
      transition: all .1s linear;
      -webkit-transition: all .1s linear;
      -moz-transition: all .1s linear;
    }

    textarea:focus + label,
    textarea:not(:placeholder-shown) + label {
      font-size: 13px;
      top: 13.7rem;
      color: #437EA8;
    }

  }

  &, textarea, label {
    margin-top: 0.8rem;
  }
`

export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;

  .cancel, button {
    width: 48%;

    font-weight: 400;
    font-size: 1rem;
    height: 3rem;

    padding: 0 1.5rem;
  }

  button[type="submit"] {
    background: var(--blue);
    color: #fff;
    font-weight: 600;

    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;
  }

  button[type="submit"]:hover {
    filter: brightness(0.9);
  }

  .cancel {
    color: var(--red);
    border: 0.20rem var(--red) solid;
    border-radius: 0.25rem;
    font-weight: 600;

    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .cancel:hover {
    opacity: 1;
  }
`