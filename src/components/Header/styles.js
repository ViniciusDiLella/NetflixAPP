import styled from "styled-components";

export const HeaderTransparent = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 7.75vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.65vw;
  background: ${({ black }) => black};
  transition: all ease 0.3s;
`;
export const HeaderBlack = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 7.75vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.65vw;
  background-color: #141414;
  transition: all ease 0.3s;
`;
export const LogoContainer = styled.div`
  height: 2.85vh;
`;
export const UserContainer = styled.div`
  height: 3.95vh;
  display: flex;
  flex-direction: row;
  p {
    margin-bottom: 100%;
  }
`;
export const Logo = styled.img`
  height: 100%;
`;
export const User = styled.img`
  height: 100%;
  border-radius: 3px;
`;
