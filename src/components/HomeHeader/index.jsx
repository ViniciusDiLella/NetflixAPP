import ButtonLink from "../ButtonLink";
import { NetflixLogo, HomeHeaderContainer } from "./styles";

const HomeHeader = ({ login }) => {
  return (
    <>
      <HomeHeaderContainer>
        <a href="/">
          <NetflixLogo
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          ></NetflixLogo>
        </a>
        {login && (
          <ButtonLink
            css={{
              color: "white",
              backgroundColor: "#e50914",
              padding: "0.4vh 0.8vw",
              cursor: "pointer",
              marginTop: "3.5vh",
              marginRight: "3vw",
            }}
            link="/signin"
            msg="Entrar"
          ></ButtonLink>
        )}
      </HomeHeaderContainer>
    </>
  );
};

export default HomeHeader;
