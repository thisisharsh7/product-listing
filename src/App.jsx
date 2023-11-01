import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import styled from "styled-components";



const AppContainer = styled.div`
  background-color: #E5E7EB;
  margin: 0 auto;
  max-width: 100%;
  font-family: 'DM Sans', sans-serif;
`;

function App() {

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
