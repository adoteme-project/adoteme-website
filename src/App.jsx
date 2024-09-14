import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Pets from "./pages/Pets"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Doacoes from "./pages/Doacoes"
import Ongs from "./pages/Ongs"
import Achados from "./pages/Achados"

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/pets" element={<Pets/>}/>
          <Route path="/doacoes" element={<Doacoes/>}/>
          <Route path="/ongs" element={<Ongs/>}/>
          <Route path="/achados" element={<Achados/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
