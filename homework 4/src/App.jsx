import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header.styled";
import { ContextProvider } from "./context/Context";
import { Container } from "./components/Container.styled";


// pobranie danych z api disney
function App() {
  return (
    <>
      <ContextProvider>
        <ThemeProvider>
          <Header />
          <Container />
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;
