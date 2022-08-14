import styled, { css } from "styled-components";

export const NewChatFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Button = styled.div`
  cursor: ${({ navigateNotAllowed }) =>
    navigateNotAllowed ? "not-allowed" : "pointer"};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background: ${({ navigateNotAllowed }) =>
    navigateNotAllowed
      ? css`
          ${({ theme }) => theme.textLight};
        `
      : css`
          ${({ theme }) => theme.negative}
        `};
`;
