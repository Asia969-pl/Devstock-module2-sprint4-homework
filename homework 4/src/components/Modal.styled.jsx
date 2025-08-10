import styled from "styled-components";
import { colorThemes } from "../assets/colorThemes";
import { ThemeContext } from "../context/ThemeContext";
import { Context } from "../context/Context";
import { useContext } from "react";
import { Button } from "@mui/material";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;

const ModalContent = styled.div`
  border: solid black 2px;
  padding: 2rem;
  align-items: center;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: fit-content;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txColor};
`;

const ModalImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Modal = ({
  url,
  films,
  shortFilms,
  videoGames,
  tvShows,
  name,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const { setOpenModal } = useContext(Context);

  const backGroundColor = darkMode
    ? colorThemes.dark.background
    : colorThemes.light.background;
  const textColor = darkMode ? colorThemes.dark.text : colorThemes.light.text;

  return (
    <Backdrop>
      <ModalContent bgColor={backGroundColor} txColor={textColor}>
        <ModalImg src={url} alt={name} />
        <h1>{name}</h1>

        {/* Wyświetlanie filmów */}
        {films && films.length > 0 && (
          <>
            <h3>Films</h3>
            <ul>
              {films.map((film, index) => (
                <li key={index}>{film}</li>
              ))}
            </ul>
          </>
        )}

        {/* Wyświetlanie shortFilms */}
        {shortFilms && shortFilms.length > 0 && (
          <>
            <h3>ShortFilms</h3>
            <ul>
              {shortFilms.map((shortFilm, index) => (
                <li key={index}>{shortFilm}</li>
              ))}
            </ul>
          </>
        )}

        {/* Dodaj inne sekcje, jeśli są */}
        {videoGames && videoGames.length > 0 && (
          <>
            <h3>Video Games</h3>
            <ul>
              {videoGames.map((game, index) => (
                <li key={index}>{game}</li>
              ))}
            </ul>
          </>
        )}

        {tvShows && tvShows.length > 0 && (
          <>
            <h3>TV Shows</h3>
            <ul>
              {tvShows.map((show, index) => (
                <li key={index}>{show}</li>
              ))}
            </ul>
          </>
        )}

        <Button onClick={() => setOpenModal(false)}>Close</Button>
      </ModalContent>
    </Backdrop>
  );
};
