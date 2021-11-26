import { UrlNetflixWpp } from "../../utils/url";
import { NetflixWallpaper, TopContainer, HomeText } from "./styles";
import HomeHeader from "../../components/HomeHeader";
import { Button } from "@material-ui/core";
import ButtonLink from "../../components/ButtonLink";

const Home = () => {
  return (
    <>
      <TopContainer>
        <NetflixWallpaper
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${UrlNetflixWpp})`,
          }}
        >
          <HomeHeader login={true}></HomeHeader>
          <HomeText>
            <h1>Filmes, séries e muito mais. Sem limites</h1>
            <h3>Assista onde quiser. Cancele quando quiser</h3>
            <ButtonLink
              msg="Vamos Lá"
              css={{
                backgroundColor: "#e50914",
                color: "white",
                borderRadius: "1px",
                margin: "10px",
                padding: "15px",
                marginBottom: "30px",
              }}
              link="/signup"
            ></ButtonLink>
          </HomeText>
        </NetflixWallpaper>
      </TopContainer>
    </>
  );
};

export default Home;
