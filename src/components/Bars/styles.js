import styled from "styled-components";

export const AnimeContainer = styled.div`
  display: inline-block;
  width: 175px;
  height: 235px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: ${({ width }) => width * 1.8};
    width: ${({ width }) => width};
  }
  img {
    width: 100%;
    height: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }
  img:hover {
    transform: scale(1);
  }
`;

export const RightRow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  right: 0;
  z-index: 99;
  cursor: pointer;
  opacity: 0;
`;

export const LeftRow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  left: 0;
  z-index: 99;
  cursor: pointer;
  opacity: 0;
`;

export const AnimeRow = styled.div`
  margin-bottom: 15px;
  &:hover ${RightRow} {
    opacity: 1;
  }
  &:hover ${LeftRow} {
    opacity: 1;
  }
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }

  h2 {
    margin: 0px 0px 0px 30px;
  }
`;
export const ListContainer = styled.div`
  overflow-x: hidden;
`;

export const ListScroll = styled.div`
  transition: all ease 0.25s;
`;
