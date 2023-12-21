import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";
import Alerta from "../Alerta";
import {
  ChatBubbleLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../config/axiosClient";
import useAuth from "../../hooks/useAuth";
import useUsuario from "../../hooks/useUsuario";

const Chat = () => {
  
  const navigate = useNavigate();
  const {actualizarIntentos, consultarUsuarioId} = useUsuario();
  const [alerta, setAlerta] = useState({});
  const { auth} = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  //const [categoriasCoincidentes, setCategoriasCoincidentes] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga
  const [intentos, setIntentos] = useState();
  const [valid, setValid] = useState(false);
  const [accesoChat, setAccesoChat] = useState(false);

  useEffect(() => {
    obtenerIntentos();
  },[1])

  //------------- Este useEffect verifica el numero de intentos restantes y el acceso a la IA ----------------
  useEffect(() => {
    setValid(false);
    if(intentos < 1){
      setAlerta({
        msg: "Sin Intentos Restantes",
        error: "error"
      });
      setAccesoChat(false);
    }else {
      setAccesoChat(true);
    }
    if(auth.accesoChat.acceso === false){
      navigate('/dashboard/soporte');
    }
  },[valid])
  //----------------------------------------------------------------------------------------------------------

  

  //---------------Obtiene el numero de intentos en tiempo real de la base de datos--------------------------
  const obtenerIntentos = async () => {
    const {data} = await consultarUsuarioId(auth.uid);
    const intentos = data.data.data.accesoChat.intentos;
    setIntentos(intentos);
    setValid(true);
  }
  //---------------------------------------------------------------------------------------------------------
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Mostrar los puntos de carga

    try {
      const response = await axiosClient.post(
        "/chatgp3/lambda",
        {
          prompt: inputMsg,
        },
        { withCredentials: true }
      );

      const botResponse = response.data.data.respuesta;
      //const coincidentes =
      //  response.data.data.recomendaciones.categoriasCoincidentes;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMsg, type: "user" },
        { text: botResponse, type: "bot" },
      ]);

      //setCategoriasCoincidentes(coincidentes);
      //console.log("Estas son las coincidencias:", coincidentes);

      setInputMsg("");

      //----------- Si se realiza la pregunta correctamente se resta un intento y se actualiza en la base de datos ------------------
      const intento = intentos-1;
      if (auth.uid) {
        const { msg, error } = await actualizarIntentos(
          auth.uid,
          auth.accesoChat.acceso,
          intento,
        );        
      }
      //-----------------------------------------------------------------------------------------------------------------------------
      obtenerIntentos();
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMsg, type: "user" },
        { text: "Hubo un error, inténtelo más tarde", type: "bot" },
      ]);
    } finally {
      setIsLoading(false); // Ocultar los puntos de carga cuando se complete la solicitud
    }
  };

  const {msg} = alerta;
  return (
    <>
    {msg && <Alerta alerta={alerta} />}
    <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="min-w-0 flex-1 border-b border-gray-200 pb-4">

        {/* Navegación Interna */}
        <nav className="flex justify-between mb-3" aria-label="Breadcrumb">

          <ol role="list" className="flex items-center space-x-4">

            <li>
              <div>
                <a className="text-slate-900/[0.8]">
                  <ChatBubbleLeftIcon
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-slate-900/[0.8]"
                  aria-hidden="true"
                />
                <a
                  href=""
                  className="ml-4 text-sm font-medium text-slate-900/[0.8]"
                >
                  Chat
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <div className="border hover:drop-shadow-2xl border-black/10 p-6 my-8 duration-300 bg-white">
          <div className="flex flex-col flex-1 px-5 overflow-y-scroll">
            {isLoading ? (
              <div className="text-center text-gray-700 py-2">
                Cargando...
              </div>
            ) : messages.length > 0 ? (
              <>
                {messages.map((message, index) => (
                  <Mensaje
                    key={index}
                    text={message.text}
                    type={message.type}
                  />
                ))}
                {/* <div className="grid grid-cols-2 gap-4">
                  {categoriasCoincidentes.map((categoria, index) => (
                    <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                    <div
                      key={index}
                      className=""
                    >
                      <h2 className="text-xl font-semibold">
                        {categoria.categoria}
                      </h2>
                      {categoria.recomendaciones &&
                        categoria.recomendaciones.length > 0 && (
                          <ul>
                            {categoria.recomendaciones.map(
                              (recomendacion, subIndex) => (
                                <li key={subIndex}>
                                  <a href={recomendacion.url}>
                                    {recomendacion.nombre}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </div>
                    </div>
                    </div>

                  ))}
                </div> */}
              </>
            ) : (
              <>
                <div className="text-center text-xl text-black/60 py-16">
                  ¡Bienvenid@! <br /> ¿En qué puedo ayudarte hoy?
                </div>
              </>
            )}
          </div>
          { accesoChat ? (
          <form onSubmit={handleSubmit} className="px-4 py-2 border-t">
            <textarea
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="w-full px-4 py-2 border mt-5 pt-5 focus:outline-none"
            />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="mt-2 px-12 py-3 bg-black/10 font-medium text-black/70 rounded-3xl duration-300 hover:bg-black/5 focus:outline-none focus:ring focus:border-blue-300"
              >
                Enviar
              </button>
            </div>
          </form>
            ):(
              <form onSubmit={handleSubmit} className="px-4 py-2 border-t">
            <textarea
              type="text"
              
              placeholder="Sin Preguntas Restantes"
              className="w-full px-4 py-2 border mt-5 pt-5 focus:outline-none"
            />
          </form>
            )}
          
          <h1 className="text-base font-semibold leading-6 text-gray-900">Preguntas Restantes: {intentos}</h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default Chat;
