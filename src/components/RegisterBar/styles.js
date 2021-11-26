import styled from "styled-components";

export const RegisterContainer = styled.div`
  border-top: 1px grey solid;
`;
export const RegisterForm = styled.form`
  width: 60%;
  p {
    color: black;
  }
`;
export const RegisterDiv = styled.div`
  border: 1px grey solid;
  border-top: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  margin: 0 30vw;
  h1 {
    color: grey;
    font-size: 40px;
  }
  @media (max-width: 768px) {
    height: 80vh;
    width: 80vw;
    margin: 5vh 10vw;
    border-top: 1px grey solid;
    h1 {
      font-size: 30px;
    }
  }
`;
