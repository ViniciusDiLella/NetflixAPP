import { createContext, useEffect, useState } from "react";
import { api } from "../../utils/api";

export const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [Shonen, setShonen] = useState([]);
  const [Seinen, setSeinen] = useState([]);
  const [Romance, setRomance] = useState([]);
  const [Sports, setSports] = useState([]);
  const [Highlight, setHighlight] = useState(false);
  const [BlackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    let dice = Math.floor(Math.random() * 100);

    async function load() {
      // eslint-disable-next-line no-unused-expressions
      await api
        .get("/genre/anime/27/1", "")
        .then((response) => setShonen(response.data.anime));
      await api
        .get("/genre/anime/42/1", "")
        .then((response) => setSeinen(response.data.anime));
      await api
        .get("/genre/anime/22/1", "")
        .then((response) => setRomance(response.data.anime));
      await api
        .get("/genre/anime/30/1", "")
        .then((response) => setSports(response.data.anime));
      await api
        .get("/genre/anime/27/1", "")
        .then((response) => setHighlight(response.data.anime[dice]));
    }
    load();

    if (window.scrollY > 20) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  }, []);

  useEffect(() => {
    const Scroll = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", Scroll);

    return () => {
      window.removeEventListener("scroll", Scroll);
    };
  }, []);

  return (
    <AnimeContext.Provider
      value={{
        BlackHeader,
        setBlackHeader,
        Highlight,
        setHighlight,
        Shonen,
        Seinen,
        Romance,
        Sports,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
