import { AnimeImg } from "./styles";

const ListCard = ({ item }) => {
  return (
    <>
      <AnimeImg
        src={item.image_url}
        alt=""
        onClick={() => console.log("oi")}
      ></AnimeImg>
    </>
  );
};

export default ListCard;
