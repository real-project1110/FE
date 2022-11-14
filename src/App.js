import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import Router from "./shared/Router/Router";
import { lightMode } from "./shared/Styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightMode}>
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
