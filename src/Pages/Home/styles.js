import styled from "styled-components";

export const NetflixWallpaper = styled.section`
  height: 100vh;
  width: 100vw;
`;
export const BotContainer = styled.section`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;
export const TopContainer = styled.section`
  width: inherit;
  height: inherit;
  background: linear-gradient(to bottom, #111 5%, transparent 95%);
`;
export const HomeText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 200px;
  margin-left: 37.5vw;
  h1 {
    font-size: 50px;
  }
  h3 {
    font-size: 25px;
  }

  flex-direction: column;
  width: 30vw;
  margin-right: 0px;
  button {
    width: 20vw;
  }
`;
