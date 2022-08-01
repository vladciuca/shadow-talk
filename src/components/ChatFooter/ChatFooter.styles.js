import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  height: 100%;
`;

export const UserInputContainer = styled.form`
  display: flex;
  align-items: center;
  height: 50%;
`;

export const UserImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
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

export const SwitchUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

export const SwitchUserButton = styled.div`
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.textLight};
  font-size: 0.9rem;
  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    padding: 0 0.5rem;
  }
`;

export const SwitchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  padding: 0 0.5rem;
`;
