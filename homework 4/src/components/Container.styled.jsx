import styled from "styled-components";
import { colorThemes } from "../assets/colorThemes";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useGetCharacters from "../hooks/useGetCharacters";
import { Button } from "@mui/material";
import PaginationOutlined from "./Pagination.Styled";
import { Context } from "../context/Context";
import { Modal } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useState } from "react";
// Stylowany kontener główny

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 4rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txColor};
`;

// Stylowany div dla karty
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 270px;
  height: 300px;
  padding: 10px;
  border: 2px solid ${(props) => props.txColor};
  /* background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txColor}; */
`;

// Komponent CardButton
const CardButton = ({ onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      Learn More
    </Button>
  );
};

export const Container = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const backGroundColor = darkMode
    ? colorThemes.dark.background
    : colorThemes.light.background;
  const textColor = darkMode ? colorThemes.dark.text : colorThemes.light.text;

  const { page, openModal, setOpenModal } = useContext(Context);
  console.log(page);
  const { characters } = useGetCharacters(page);

  return (
    <>
      <MainContainer bgColor={backGroundColor} txColor={textColor}>
        {characters.map(
          ({ name, imageUrl, _id, films, shortFilms, videoGames, tvShows }) => (
            <Div>
              <img src={imageUrl} width={250} height={150} />
              <h2>{name}</h2>
              <CardButton
                width="100px"
                onClick={() => {
                  setOpenModal(true);
                  console.log("openModal:", true);
                  console.log(_id);
                  setSelectedCharacter({
                    url: imageUrl,
                    name,
                    films,
                    shortFilms,
                    videoGames,
                    tvShows,
                  });
                  console.log(selectedCharacter);
                }}
              />
            </Div>
          )
        )}
      </MainContainer>
      {openModal &&
        createPortal(
          <Modal
            url={selectedCharacter.url}
            name={selectedCharacter.name}
            films={selectedCharacter.films}
            shortFilms={selectedCharacter.shortFilms}
            videoGames={selectedCharacter.videoGames}
            tvShows={selectedCharacter.tvShows}
          />,
          document.body
        )}
      <PaginationOutlined />
    </>
  );
};

// url, films, shortFilms, videoGames, tvShows,name
