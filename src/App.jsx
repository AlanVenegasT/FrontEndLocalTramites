import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
//Providers
import { AuthProvider } from "./context/AuthProvider";
import { TramiteProvider } from "./context/TramiteProvider";
import { ProyectoProvider } from "./context/ProyectoProvider";
import { UsuarioProvider } from "./context/UsuarioProvider";
import { MiProyectoProvider } from "./context/MiProyectoProvider";
//Layouts
import AuthLayout from "./layouts/AuthLayout";
import PrincipalLayout from "./layouts/PrincipalLayout";
//Auth
import Login from "./pages/public/Login";
import Registrar from "./pages/public/Registrar";
import OlvidePassword from "./pages/public/OlvidePassword";
import NuevoPassword from "./pages/public/NuevoPassword";
import ConfirmarCuenta from './pages/public/ConfirmarCuenta';
//Tramites
import Crear from "./pages/private/Dashboard/Crear";
import Editar from "./pages/private/Dashboard/Editar";
import Buscar from "./pages/private/Dashboard/Buscar";
import Cargar from "./pages/private/Dashboard/Cargar";
import Ver from "./pages/private/Dashboard/Ver";
import EditarBuscar from "./pages/private/Dashboard/EditarBuscar";
import { BaseDatos } from "./pages/private/Dashboard/BaseDatos";
//Chatgpt
import ChatPag from "./pages/private/Dashboard/ChatPag";
//Dashboard
import PasswordUser from "./pages/private/Dashboard/User/PasswordUser";
import InformacionUser from "./pages/private/Dashboard/User/InformacionUser";
import InformacionAdmin from "./pages/private/Dashboard/Admin/InformacionAdmin";
import PasswordAdmin from "./pages/private/Dashboard/Admin/PasswordAdmin";
//soporte
import Soporte from "./pages/private/Dashboard/Soporte";
//P404
import Page404 from "./pages/public/Page404";
//Proyecto Admin
import Proyecto from "./pages/private/Dashboard/Proyecto";
import ProyectoPage from "./components/Proyecto/ProyectoPage";
//Proyecto User
import Usuario from "./pages/private/Dashboard/Usuario";
import MiProyecto from "./pages/private/Dashboard/MiProyecto";
import MiProyectoPage from "./components/MisProyectos/MiProyectoPage";
//LandingPage
import Contacto from "./pages/public/Contacto";
import Politicas from "./pages/public/Politicas";
import Home from "./pages/public/Home"
import { IndexLayout } from "./layouts/IndexLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <TramiteProvider>
            <ProyectoProvider>
              <MiProyectoProvider>
                <UsuarioProvider>
                  <Routes>

                    {/* Nuevas rutas */}
                    <Route element={<IndexLayout />}>
                      <Route index element={<Home />} />
                      <Route path="/contacto" element={<Contacto />} />
                      <Route path="/politicas" element={<Politicas />} />
                      
                    </Route>  
  

                  <Route path="/login" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="registrar" element={<Registrar />} />
                    <Route path="olvide-password" element={<OlvidePassword />} />
                    <Route path="olvide-password/:token" element={<NuevoPassword />} />
                    <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
                  </Route>

                  <Route path="/dashboard" element={<PrincipalLayout />}>
                    <Route index element={<Buscar />} />

                    {/*Tramites */}
                    <Route path="crear" element={<Crear />} />
                    <Route path="editar-buscar" element={<EditarBuscar />} />
                    <Route path="editar" element={<Editar />} />
                    <Route path="cargar" element={<Cargar />} />
                    <Route path="baseDatos" element={<BaseDatos />} />

                    {/* Chatgpt */}
                    <Route path="chat" element={<ChatPag />} />

                    {/*Panel Admin */}
                    <Route path="panel-admin" element={<InformacionAdmin />} />
                    <Route path="password-admin" element={<PasswordAdmin />} />

                    {/*Panel User */}
                    <Route path="panel-user" element={<InformacionUser />} />
                    <Route path="password-user" element={<PasswordUser />} />

                    {/*Mis Proyectos Admin */}
                    <Route path="proyecto" element={<Proyecto />} />
                    <Route path="proyecto/:id" element={<ProyectoPage />} />
                    <Route path="ver" element={<Ver />} />

                    {/*Mis Proyectos Usuarios */}
                    <Route path="miproyecto" element={<MiProyecto />} />
                    <Route path="miproyecto/:id" element={<MiProyectoPage />} />

                    {/*Administrador de Usuarios */}
                    <Route path="administrador-usuarios" element={<Usuario />} />

                    {/*Soporte*/}
                    <Route path="soporte" element={<Soporte />} />

                  </Route>

                  <Route path="*" element={<Page404 />} />
                </Routes>
              </UsuarioProvider>
            </MiProyectoProvider>
          </ProyectoProvider>
        </TramiteProvider>
      </AuthProvider>



    </BrowserRouter >
    </>
  );
}

export default App;
