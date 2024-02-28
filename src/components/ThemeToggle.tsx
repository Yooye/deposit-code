import React from "react";
import { useTheme } from "../theme/ThemeProvider";
import styled from "styled-components";

const Button = styled.button`
  margin: 0 auto;
  font-size: 40px;
`;

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();

  return <Button onClick={toggleTheme}>Toggle the Theme</Button>;
};

export default ThemeToggle;
