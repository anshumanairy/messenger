import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./client/styles/GlobalStyle";
import Routes from "./client/routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
