import styled from "styled-components";

export const AppContainer = styled.div`
  with: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Screen = styled.div`
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
  height: 100px;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.bgSecondary};
  position: absolute;
  top: 0;
`;

export const ScreenContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 105px 0.3rem 105px 0.3rem;
`;

export const ScreenOverflow = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const ScreenFooter = styled.div`
  height: 100px;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.bgSecondary};
  position: absolute;
  bottom: 0;
`;
