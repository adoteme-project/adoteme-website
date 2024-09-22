import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Pets from "./pages/Pets";
import NotFound from "./pages/NotFound";
import Doacoes from "./pages/Doacoes";
import Ongs from "./pages/Ongs";
import Achados from "./pages/Achados";
import Institucional from "./components/layout/Institucional";
import Teste from "./pages/Teste";
import LoginSelection from "./pages/LoginSelection";
import LoginLayout from "./components/layout/LoginLayout";
import LoginAdotante from "./pages/LoginAdotante";
import LoginOng from "./pages/LoginOng";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Institucional />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/ongs" element={<Ongs />} />
          <Route path="/achados" element={<Achados />} />
        </Route>

        <Route path="/login" element={<LoginLayout/>}>
          <Route path="/login" element={<LoginSelection />} />
          <Route path="/login/adotante" element={<LoginAdotante />} />
          <Route path="/login/ong" element={<LoginOng />} />
        </Route>

        <Route path="/teste" element={<Teste />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
