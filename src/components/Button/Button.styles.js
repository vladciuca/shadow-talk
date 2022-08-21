import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ navigateNotAllowed }) =>
    navigateNotAllowed ? "not-allowed" : "pointer"};
  border-radius: 30px;
  ${({ user, navigateNotAllowed }) =>
    user === "Present" && !navigateNotAllowed
      ? css`
          background-image: linear-gradient(
            to right,
            ${({ theme }) => theme.negative},
            ${({ theme }) => theme.neutral}
          );
          padding: 0.25rem 1rem;
        `
      : user === "Past" && !navigateNotAllowed
      ? css`
          background-image: linear-gradient(
            to right,
            ${({ theme }) => theme.neutral},
            ${({ theme }) => theme.negative}
          );
          padding: 0.25rem 1rem;
        `
      : navigateNotAllowed
      ? css`
          background: ${({ theme }) => theme.textLight};
          padding: 0.5rem 1rem;
        `
      : css`
          background: ${({ theme }) => theme.negative};
          padding: 0.5rem 1rem;
        `};

  span {
    padding-right: 0.15rem;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
