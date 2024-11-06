import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Pets from "./pages/Pets";
import NotFound from "./pages/NotFound";
import Ongs from "./pages/Ongs";
import Achados from "./pages/Achados";
import Institucional from "./components/layout/Institucional";
import Teste from "./pages/Teste";
import LoginSelection from "./pages/LoginSelection";
import LoginLayout from "./components/layout/LoginLayout";
import LoginAdotante from "./pages/LoginAdotante";
import LoginOng from "./pages/LoginOng";
import RedefinirAcesso from "./pages/RedefinirAcesso";
import CadastroAdotante from "./pages/CadastroAdotante";

import PaginaPet from "./pages/PaginaPet";
import { CardProvider } from "@/context/CardProvider";

import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "@/components/wrapper/RotaPrivada";
import { NotificationProvider } from "./context/NotificationProvider";
import UserLayout from "./components/layout/UserLayout/index"
import PerfilUsuario from "./pages/PerfilUsuario";
import FormularioUsuario from "./pages/PerfilFormulario";
import PerfilAplicacao from "./pages/PerfilAplicacao";
import PaginaOng from "./pages/PaginaOng";
import Categorias from "./pages/Categorias";
import OngLayout from "./components/layout/OngLayout";
import OngDashboard from "./pages/OngDashboard";
import OngPet from "./pages/OngPet";
import OngAplicacoes from "./pages/OngAplicacoes";
import OngConfiguracoes from "./pages/OngConfiguracoes";
import PetsImagesStep from "./components/feature/MultiStep/PetImagesStep";
import PetInfoStep from "./components/feature/MultiStep/PetInforStep";
import { OngAuthProvider } from "./context/AuthOngProvider";
import FavoritosAnimais from "./pages/AnimaisFavoritos";
import FavoritosOngs from "./pages/OngsFavoritos";
import TaxaStep from "./components/feature/MultiStep/TaxaStep";

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <AuthProvider>
          <OngAuthProvider>
            <CardProvider>
              <Routes>
                <Route path="/" element={<Institucional />}>
                  <Route path="/" element={<Inicio />} />
                  <Route path="/pets" element={<Pets />} />
                  <Route path="/ongs" element={<Ongs />} />
                  <Route path="/categorias" element={<Categorias />} />
                  <Route path="/achados" element={<Achados />} />
                  <Route path="/pagina-pet/:id" element={<PaginaPet />} />
                  <Route path="/pagina-ong/:id" element={<PaginaOng />} />
                  <Route path="/achados" element={<Achados />} />
                  <Route path="/perfil" element={<PerfilUsuario />} />
                  <Route path="/animais-favoritos" element={<FavoritosAnimais />} />
                  <Route path="/ongs-favoritos" element={<FavoritosOngs />} />
                </Route>

                <Route path="/perfil" element={<UserLayout />}>
                  <Route path="/perfil/usuario" element={<PerfilUsuario />} />
                  <Route path="/perfil/formulario" element={<FormularioUsuario />} />
                  <Route path="/perfil/aplicacao" element={<PerfilAplicacao />} />
                </Route>

                <Route path="/login" element={<LoginLayout />}>
                  <Route path="/login" element={<LoginSelection />} />
                  <Route path="/login/adotante" element={<LoginAdotante />} />
                  <Route path="/login/ong" element={<LoginOng />} />
                  <Route
                    path="/login/cadastro-adotante"
                    element={<CadastroAdotante />}
                  />
                  <Route path="/login/redefinir" element={<RedefinirAcesso />} />
                </Route>

               {/*  <Route path="/teste" element={<PrivateRoute userType="adotante" />}> */}
                  <Route path="/teste" element={<Teste />}>
                    <Route path="/teste/pet-images" element={<PetsImagesStep />} />
                    <Route path="/teste/pet-informacoes" element={<PetInfoStep />} />
                    <Route path="/teste/pet-taxa" element={<TaxaStep/>}/>
                  </Route>
               {/*  </Route> */}

                <Route path="/ong" element={<PrivateRoute userType="ong" allowedRoles={['ADMIN', 'MODERATOR', 'USER']} />}>
                  <Route element={<OngLayout />}>

                    <Route element={<PrivateRoute userType="ong" allowedRoles={['ADMIN', 'MODERATOR']} />}>
                      <Route path="/ong/dashboard" element={<OngDashboard />} />
                      <Route path="/ong/configuracoes" element={<OngConfiguracoes />} />
                    </Route>

                    <Route path="/ong/pets" element={<OngPet />} />
                    <Route path="/ong/aplicacoes" element={<OngAplicacoes />} />

                  </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </CardProvider>
          </OngAuthProvider>
        </AuthProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
