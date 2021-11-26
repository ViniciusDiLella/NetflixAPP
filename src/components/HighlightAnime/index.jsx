import { useContext } from "react";
import { AnimeContext } from "../../providers/animes";
import {
  VerticalContainer,
  HighlightSection,
  HorizontalContainer,
  HighlightName,
  HighlightInfo,
  Points,
  Year,
  Episodes,
  HighlightDescription,
  HighlightButtons,
  HighlightGenres,
  WatchButton,
  ListButton,
} from "./style";

const HighlightAnime = ({ highlight, synopsis }) => {
  const { setMyList, MyList, setMyListON } = useContext(AnimeContext);

  let highlightDate = new Date(highlight.airing_start);
  let genres = [];
  for (let i in highlight.genres) {
    genres.push(highlight.genres[i].name);
  }

  return (
    <HighlightSection
      className="highlight"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${highlight.image_url})`,
      }}
    >
      <VerticalContainer>
        <HorizontalContainer>
          <HighlightName>{highlight.title}</HighlightName>
          <HighlightInfo>
            <Points>{highlight.score} Pontos</Points>
            <Year>{highlightDate.getFullYear()}</Year>
            <Episodes>{highlight.episodes} Episodes</Episodes>
          </HighlightInfo>
          <HighlightDescription>
            {highlight && highlight.synopsis.substr(0, 200)}...
          </HighlightDescription>
          <HighlightButtons>
            <WatchButton href={`/watch/${highlight.mal_id}`}>
              {" "}
              ▶ Watch{" "}
            </WatchButton>
            <ListButton
              href={`/list/add/${highlight.mal_id}`}
              onClick={
                (() => setMyList(MyList.push(highlight)),
                console.log(MyList),
                () => setMyListON(true))
              }
            >
              {" "}
              + My List{" "}
            </ListButton>
          </HighlightButtons>
          <HighlightGenres>
            <strong>Gêneros: {genres.join(", ")}</strong>
          </HighlightGenres>
        </HorizontalContainer>
      </VerticalContainer>
    </HighlightSection>
  );
};

export default HighlightAnime;
