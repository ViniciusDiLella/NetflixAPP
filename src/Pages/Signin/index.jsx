import HomeHeader from "../../components/HomeHeader";
import LoginBar from "../../components/LoginBar";
import { UrlNetflixWpp } from "../../utils/url";
import { NetflixWallpaper } from "../Home/styles";

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
        <HomeHeader login={false}></HomeHeader>
        <LoginBar></LoginBar>
      </NetflixWallpaper>
    </>
  );
};

export default Signin;
