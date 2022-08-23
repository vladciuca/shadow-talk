import styled, { css } from "styled-components";

export const ScreenContainer = styled.div`
  height: 800px;
  width: 400px;
  @media (max-width: 420px) {
    height: 98vh;
    width: 100vw;
  }
  margin: 0 0.5rem;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  overflow: hidden;
  position: relative;
`;

export const ScreenHeader = styled.div`
  height: 120px;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.bgSecondary};
  position: absolute;
  top: 0;
`;

export const ScreenContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 125px 0.3rem;

  ${({ chatContent }) =>
    chatContent
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        `
      : ""}
`;

export const ScreenOverflow = styled.div`
  ${({ chatContent }) =>
    chatContent
      ? ""
      : css`
          height: 100%;
        `}
  padding: 1rem 0.8rem 1rem 1rem;
  @media (max-width: 395px) {
    padding: 1rem 0.6rem 1rem 0.8rem;
  }
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const ScreenFooter = styled.div`
  height: 120px;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.bgSecondary};
  position: absolute;
  bottom: 0;
`;
