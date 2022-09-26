import styled from "styled-components";

export const FeedbackContainer = styled.form`
  display: block;
  position: absolute;
  top: 2.2rem;
  right: 2rem;
  @media (max-width: 1200px) {
    display: none;
  }
  width: 270px;
  text-align: center;
`;

export const UserName = styled.div`
  position: relative;
  input {
    background: ${({ theme }) => theme.cardSecondary};
    color: ${({ theme }) => theme.text};
    border-radius: 7px;
    width: 100%;
    border: none;
    margin-bottom: 1rem;
    height: 30px;
    padding-left: 2rem;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 7.5px;
  left: 10px;
  color: gray;
`;

export const UserInput = styled.textarea`
  background: ${({ theme }) => theme.cardSecondary};
  color: ${({ theme }) => theme.text};
  border-radius: 7px;
  resize: none;
  padding: 0.5rem;
  width: 100%;
  border: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.neutralDark};
  :hover {
    background: ${({ theme }) => theme.neutral};
  }
  padding: 0.5rem 1rem;
  border: none;
`;

export const UserExperience = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const UserExperienceInput = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  input[type="radio"] {
    opacity: 0;
  }
  input[type="radio"]:checked + label {
    color: ${({ theme }) => theme.neutral};
  }
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.neutralDark};
  :hover {
    color: ${({ theme }) => theme.neutral};
  }
`;
