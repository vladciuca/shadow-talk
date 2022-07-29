import styled from "styled-components";

export const ScreenContainer = styled.div`
  height: 700px;
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

export const ScreenTopic = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${({ theme }) => theme.bgPrimary};
  position: absolute;
  top: 100px;
`;

export const ScreenContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 145px 0.3rem 145px 0.3rem;
`;

export const ScreenOverflow = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  div {
    margin-bottom: 10rem;
  }
`;

export const ScreenFooter = styled.div`
  height: 140px;
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.bgSecondary};
  position: absolute;
  bottom: 0;
`;
