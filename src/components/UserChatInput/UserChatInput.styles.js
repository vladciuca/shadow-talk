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
`;

export const InputContainer = styled.div`
  flex-grow: 1;
  input {
    width: 100%;
    border: none;
    border-radius: 1.5rem;
    padding: 0 0.5rem;
    height: 30px;
    background: ${({ theme }) => theme.bgPrimary};
    color: ${({ theme }) => theme.text};
  }
  input:focus {
    outline: none;
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
  font-size: 0.9rem;
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
