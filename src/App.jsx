import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrincipalLayout from "./layouts/PrincipalLayout";
import Crear from "./pages/private/Dashboard/Crear";
import Editar from "./pages/private/Dashboard/Editar";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/public/Login";
import Registrar from "./pages/public/Registrar";
import OlvidePassword from "./pages/public/OlvidePassword";
import NuevoPassword from "./pages/public/NuevoPassword";
import ConfirmarCuenta from './pages/public/ConfirmarCuenta';
import Buscar from "./pages/private/Dashboard/Buscar";
import { AuthProvider } from "./context/AuthProvider";
import { TramiteProvider } from "./context/TramiteProvider";
import Cargar from "./pages/private/Dashboard/Cargar";
import Ver from "./pages/private/Dashboard/Ver";
import EditarBuscar from "./pages/private/Dashboard/EditarBuscar";
import ChatPag from "./pages/private/Dashboard/ChatPag";
import PasswordUser from "./pages/private/Dashboard/User/PasswordUser";
import InformacionUser from "./pages/private/Dashboard/User/InformacionUser";
import InformacionAdmin from "./pages/private/Dashboard/Admin/InformacionAdmin";
import PasswordAdmin from "./pages/private/Dashboard/Admin/PasswordAdmin";
import Page404 from "./pages/public/Page404";
import Proyecto from "./pages/private/Dashboard/Proyecto";
import Usuario from "./pages/private/Dashboard/Usuario";
import Soporte from "./pages/private/Dashboard/Soporte";
import { ProyectoProvider } from "./context/ProyectoProvider";
import { UsuarioProvider } from "./context/UsuarioProvider";
import { MiProyectoProvider } from "./context/MiProyectoProvider";
import ProyectoPage from "./components/Proyecto/ProyectoPage";
import { BaseDatos } from "./pages/private/Dashboard/BaseDatos";
import MiProyecto from "./pages/private/Dashboard/MiProyecto";
import MiProyectoPage from "./components/MisProyectos/MiProyectoPage";

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
                    <Route path="/" element={<AuthLayout />}>
                      <Route index element={<Login />} />
                      <Route path="registrar" element={<Registrar />} />
                      <Route path="olvide-password" element={<OlvidePassword />} />
                      <Route
                        path="olvide-password/:token"
                        element={<NuevoPassword />}
                      />
                      <Route path="confirmar/:token" element={<ConfirmarCuenta />} />
                    </Route>

                    <Route path="/dashboard" element={<PrincipalLayout />}>
                      <Route index element={<Buscar />} />
                      <Route path="ver" element={<Ver />} />
                      <Route path="proyecto/:id" element={<ProyectoPage />} />
                      <Route path="crear" element={<Crear />} />
                      <Route path="editar-buscar" element={<EditarBuscar />} />
                      <Route path="editar" element={<Editar />} />
                      <Route path="cargar" element={<Cargar />} />
                      <Route path="chat" element={<ChatPag />} />
                      <Route path="panel-user" element={<InformacionUser />} />
                      <Route path="password-user" element={<PasswordUser />} />
                      <Route path="panel-admin" element={<InformacionAdmin />} />
                      <Route path="password-admin" element={<PasswordAdmin />} />
                      <Route path="proyecto" element={<Proyecto />} />
                      <Route path="miproyecto" element={<MiProyecto/>} />
                      <Route path="miproyecto/:id" element={<MiProyectoPage/>}/>
                      <Route path="baseDatos" element={<BaseDatos />} />

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
      </BrowserRouter>
    </>
  );
}

export default App;
