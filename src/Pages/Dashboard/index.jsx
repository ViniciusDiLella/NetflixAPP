import { useContext } from "react";
import Bar from "../../components/Bars";
import { AnimeContext } from "../../providers/animes";
import HighlightAnime from "../../components/HighlightAnime";
import { HomeMenu, Footer, Loading } from "./styles";
import Header from "../../components/Header";
import { TokenContext } from "../../providers/UserToken";
import { useEffect } from "react";
import { Redirect } from "react-router";

const Dashboard = () => {
  const { MyListON, Mylist, Highlight, Shonen, Seinen, Romance, Sports } =
    useContext(AnimeContext);

  return (
    <>
      {Highlight ? (
        <>
          <Header></Header>
          <HighlightAnime highlight={Highlight}></HighlightAnime>
          <HomeMenu>
            {MyListON && <Bar list={Mylist} title="My list"></Bar>}
            <Bar list={Shonen} title="Shonen"></Bar>
            <Bar list={Romance} title="Romance"></Bar>
            <Bar list={Sports} title="Sports"></Bar>
            <Bar list={Seinen} title="Seinen"></Bar>
          </HomeMenu>
          <Footer>
            Feito por{" "}
            <a href="https://www.linkedin.com/in/viniciusdilella/">
              Vinicius Di Lella
            </a>
          </Footer>
        </>
      ) : (
        <Loading
          alt=""
          src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
        ></Loading>
      )}
    </>
  );
};

export default Dashboard;
