import { Context } from "../context/Context";
import Pagination from "@mui/material/Pagination";
import { useContext } from "react";
import styled from "styled-components";
import { colorThemes } from "../assets/colorThemes";
import { ThemeContext } from "../context/ThemeContext";

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  padding: 4rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.txColor};
  .MuiPaginationItem-root {
    color: ${(props) => props.txColor}; 
  }
  .MuiPaginationItem-root:hover {
    background-color: transparent; 
  }
`;

export default function PaginationOutlined() {
  const { page, handleChange } = useContext(Context);
  const { darkMode } = useContext(ThemeContext);
  const backGroundColor = darkMode
    ? colorThemes.dark.background
    : colorThemes.light.background;
  const textColor = darkMode ? colorThemes.dark.text : colorThemes.light.text;

  return (
    <StyledPagination
      page={page}
      count={149}
      onChange={handleChange}
      variant="outlined"
      bgColor={backGroundColor}
      txColor={textColor}
    />
  );
}
