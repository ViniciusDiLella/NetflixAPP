import styled from "styled-components";

export const LoginMenu = styled.div`
  width: 20vw;
  height: 450px;
  margin: 0 40vw;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  @media (max-width: 768px) {
    height: 80vh;
    width: 80vw;
    margin: 5vh 10vw;
    h1 {
      font-size: 30px;
    }
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
