import ListCard from "../Lists/Index";
import {
  ListScroll,
  AnimeRow,
  AnimeContainer,
  ListContainer,
  LeftRow,
  RightRow,
} from "./styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";

const Bar = ({ list, title }) => {
  const [Pagination, SetPagination] = useState(0);
  const handleLeft = () => {
    let res = Pagination + Math.round(window.innerWidth / 2);
    if (res > 0) {
      res = 0;
    }
    SetPagination(res);
  };
  const handleRight = () => {
    let res = Pagination - Math.round(window.innerWidth / 2);
    let listWidth = list.length * 174.5;
    if (window.innerWidth - listWidth > res) {
      res = window.innerWidth - listWidth - 95;
    }
    SetPagination(res);
  };

  return (
    <AnimeRow>
      <h2>{title}</h2>
      <LeftRow onClick={handleLeft}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </LeftRow>
      <RightRow onClick={handleRight}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </RightRow>
      <ListContainer>
        <ListScroll
          style={{
            marginLeft: Pagination,
            width: list.length * 180,
          }}
        >
          {list &&
            list.map((item, key) => (
              <AnimeContainer width={window.innerWidth / 4.25}>
                <a href={item.url} class="link">
                  <ListCard item={item} key={key} />
                </a>
              </AnimeContainer>
            ))}
        </ListScroll>
      </ListContainer>
    </AnimeRow>
  );
};
export default Bar;
