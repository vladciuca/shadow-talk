import styled, { css } from "styled-components";

export const UserInputContainer = styled.form`
  display: flex;
  align-items: center;
  height: 50%;
`;

export const UserImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  position: relative;
`;

export const NrOfMessages = styled.div`
  color: ${({ theme }) => theme.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 108%;
  font-size: 1.3rem;
  font-weight: 700;
  font-size: 0.8rem;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0.1rem;
  }
`;

export const InputContainer = styled.div`
  flex-grow: 1;
  input {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    width: 100%;
    border: none;
    border-radius: 1.5rem;
    padding: 0 0.5rem;
    height: 30px;
    background: ${({ resolve }) =>
      resolve
        ? css`
            ${({ theme }) => theme.positiveOpac}
          `
        : css`
            ${({ theme }) => theme.bgPrimary}
          `};
    color: ${({ theme }) => theme.text};
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: ${({ resolve }) =>
      resolve
        ? css`
            ${({ theme }) => theme.textLight}
          `
        : ""};
  }
`;

export const SendMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
`;

export const SendMessageButton = styled.div`
  cursor: ${({ submitNotAllowed }) =>
    submitNotAllowed ? "not-allowed" : "pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: 2rem;
  width: 2rem;
  border-radius: 999px;
  ${({ submitNotAllowed }) =>
    submitNotAllowed
      ? css`
          background: ${({ theme }) => theme.textLight};
        `
      : css`
          background: ${({ theme }) => theme.positive};
        `};
  color: ${({ theme }) => theme.text};
`;
