import styled from "styled-components";

export const VerticalContainer = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;
export const HorizontalContainer = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2.25vw;
  padding-bottom: 17.5vh;
  padding-top: 8.5vh;
`;

export const HighlightSection = styled.section`
  height: 100vh;
`;

export const HighlightName = styled.div`
  font-size: 60px;
  font-weight: bold;
  max-width: 40%;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
export const HighlightInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 1.75vh;
`;
export const Points = styled.div`
  display: inline-block;
  color: #46d369;
  margin-right: 1vw;
`;
export const Year = styled.div`
  display: inline-block;
  margin-right: 1vw;
`;
export const Episodes = styled.div`
  display: inline-block;
  margin-right: 1vw;
`;
export const HighlightDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
  @media (max-width: 768px) {
    max-width: 70%;
    font-size: 15px;
  }
`;
export const HighlightButtons = styled.div`
  margin-top: 1.75vh;
`;
export const WatchButton = styled.button`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 1.35vh 1.5vw;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 0.8vw;
  background-color: #fff;
  color: #000;
  opacity: 1;
  transition: all ease 0.2s;
  :hover {
    opacity: 0.7;
  }
`;
export const ListButton = styled.button`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 1.35vh 1.5vw;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 0.8vw;
  background-color: #333;
  color: #fff;
  opacity: 1;
  transition: all ease 0.2s;
  :hover {
    opacity: 0.7;
  }
`;
export const HighlightGenres = styled.div`
  margin-top: 1.75vh;
  font-size: 18px;
  color: #999;
`;
