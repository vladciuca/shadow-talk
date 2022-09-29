import styled, { css } from "styled-components";

export const ScreenContainer = styled.div`
  height: 750px;
  width: 400px;
  @media (max-width: 420px) {
    height: 98vh;
    width: 100vw;
  }
  margin: 0 0.5rem;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  background: ${({ theme }) => theme.card};
  overflow: hidden;
  position: relative;
`;

export const ScreenHeader = styled.div`
  height: 120px;
  width: 100%;
  padding: 0.5rem 0.3rem;
  background: ${({ theme }) => theme.bgSecondary};
  position: absolute;
  top: 0;
  border-radius: 10px;
`;

export const ScreenContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 125px 0;
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
  padding: 1rem 0.6rem 1rem 0.8rem;
  @media (max-width: 395px) {
    padding: 1rem 0.4rem 1rem 0.6rem;
  }
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const ScreenFooter = styled.div`
  border-radius: 10px;
  height: 120px;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.bgSecondary};
  position: absolute;
  bottom: 0;
`;
