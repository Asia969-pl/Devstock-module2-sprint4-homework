import SwitchTheme from "./SwitchTheme.styled";
import styled from "styled-components";
import { colorThemes } from "../assets/colorThemes";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HeaderWrapper = styled.div`
  width: 100vw;
  padding: 4rem;
  height: auto;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txColor};
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const AppTitle = () => {
  return <Title>Disney App</Title>;
};

const Divider = styled.hr`
  font-size: 2rem;
  width: 100%;
  color: ${(props) => props.txColor};
`;

export const Header = () => {
  const { darkMode } = useContext(ThemeContext);
  const backGroundColor = darkMode
    ? colorThemes.dark.background
    : colorThemes.light.background;
  const textColor = darkMode ? colorThemes.dark.text : colorThemes.light.text;
  console.log(backGroundColor);
  return (
    <>
      <HeaderWrapper bgColor={backGroundColor} txColor={textColor}>
        <AppTitle />
        <SwitchTheme />
      </HeaderWrapper>
      <Divider txColor={textColor} />
    </>
  );
};
