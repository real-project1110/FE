import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import Router from "./shared/Router/Router";
import { GlobalStyle } from "./shared/Styles/GlobalStyle";
import { lightMode } from "./shared/Styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightMode}>
        <Router />
        <GlobalStyle />
        <ReactQueryDevtools initialIsOpen={true} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
