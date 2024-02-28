import React from "react";
import "normalize.css";
import ThemeProvider from "./theme/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";
import Deposit from "./components/Deposit";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        <Deposit />
      </div>
    </ThemeProvider>
  );
};

export default App;
