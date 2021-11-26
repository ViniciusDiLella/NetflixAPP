import { useContext } from "react";
import { AnimeContext } from "../../providers/animes";
import {
  HeaderTransparent,
  LogoContainer,
  Logo,
  UserContainer,
  User,
} from "./styles";
const Header = () => {
  const { BlackHeader } = useContext(AnimeContext);
  const theme = {
    transparent: "transparent",
    black: "#141414",
  };
  return (
    <>
      <HeaderTransparent black={BlackHeader ? theme.black : theme.transparent}>
        <LogoContainer>
          <a href="/">
            <Logo
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            ></Logo>
          </a>
        </LogoContainer>
        <UserContainer>
          <a href="/">
            <User
              alt="user"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            ></User>
          </a>
        </UserContainer>
      </HeaderTransparent>
    </>
  );
};

export default Header;
