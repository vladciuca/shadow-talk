import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ navigateNotAllowed }) =>
    navigateNotAllowed ? "not-allowed" : "pointer"};
  padding: 0.5rem 1rem;
  border-radius: 30px;
  ${({ user, navigateNotAllowed }) =>
    user === "Present"
      ? css`
          background-image: linear-gradient(
            to right,
            ${({ theme }) => theme.negative},
            ${({ theme }) => theme.neutral}
          );
        `
      : user === "Past"
      ? css`
          background-image: linear-gradient(
            to right,
            ${({ theme }) => theme.neutral},
            ${({ theme }) => theme.negative}
          );
        `
      : !user && navigateNotAllowed
      ? css`
          background: ${({ theme }) => theme.textLight};
        `
      : css`
          background: ${({ theme }) => theme.negative};
        `};

  span {
    padding-right: 0.25rem;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
