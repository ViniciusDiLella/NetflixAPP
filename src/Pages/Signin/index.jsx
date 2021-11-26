import HomeHeader from "../../components/HomeHeader";
import LoginBar from "../../components/LoginBar";
import { UrlNetflixWpp } from "../../utils/url";
import { BotContainer, NetflixWallpaper, TopContainer } from "../Home/styles";
import { LoginPageContainer } from "./styles";

const Signin = () => {
  return (
    <>
      <NetflixWallpaper
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${UrlNetflixWpp})`,
        }}
      >
        <TopContainer>
          <BotContainer>
            <LoginPageContainer>
              <HomeHeader login={false}></HomeHeader>
              <LoginBar></LoginBar>
            </LoginPageContainer>
          </BotContainer>
        </TopContainer>
      </NetflixWallpaper>
    </>
  );
};

export default Signin;
