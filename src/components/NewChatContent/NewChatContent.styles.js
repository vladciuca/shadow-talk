import styled from "styled-components";

export const NewChatContainer = styled.div`
  height: 100%;
`;

export const InputContainer = styled.div`
  height: 75px;
  width: 100%;
  background: ${({ theme }) => theme.bgSecondary};
  border-radius: 0.5rem;
  margin: 0.5rem auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  input {
    width: 80%;
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
