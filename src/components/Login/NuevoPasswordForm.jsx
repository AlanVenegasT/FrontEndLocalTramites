import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../Alerta";
import axiosClient from "../../../config/axiosClient";
import {
  PasswordToggle,
  calculatePasswordStrength,
  getPasswordStrengthClass,
  formSubmit,
} from "../../containers/Login/RegistrarFormLogic";


const NuevoPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [comprobarPassword, setComprobarPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const [passwordModificado, setPasswordModificado] = useState(false);

  const {
    showPassword,
    showComprobarPassword,
    togglePasswordVisibility,
    toggleComprobarPasswordVisibility,
  } = PasswordToggle();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const strength = calculatePasswordStrength(newPassword);
    setPasswordStrength(strength);
  };

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    comprobarToken();
  }, []);

  const comprobarToken = async () => {
    try {
      await axiosClient(`/auth/olvide-password/${token}`);
      setTokenValido(true);
    } catch (error) {
      console.log(error);
      setAlerta({
        msg: error.response.data.message,
        error: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        msg: "El Password debe ser mínimo de 6 caracteres",
        error: true,
      });
      return;
    }

    if (password !== comprobarPassword) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    try {
      const url = `https://plankton-app-wit7e.ondigitalocean.app/api/auth/olvide-password/${token}`; // https://plankton-app-wit7e.ondigitalocean.app/api
      await axiosClient.post(url, { password });
      setAlerta({
        msg: "Contraseña actualizada correctamente",
        error: false,
      });
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({
        msg: error.response.data.message,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
       {msg && <Alerta alerta={alerta} />}
      <div className="flex min-h-full  flex-1 flex-col justify-center py-12 bg-gray-300/80 h-screen sm:px-6 lg:px-8">
        <img
          className="absolute w-full h-full inset-0 blur-sm opacity-5 object-cover hidden md:block"
          src="https://img.freepik.com/foto-gratis/silos-agricolas-exterior-edificio_146671-19102.jpg?w=740&t=st=1688412992~exp=1688413592~hmac=0d0abcd5b26eda6ff4f8faab0e94660c3bf69b7ad1ee1096bc852653f1831aa3"
          alt=""
        />
        <div className=" relative mt-4 mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-5 shadow sm:rounded-3xl duration-500 hover:scale-105 sm:px-12">
            <img
              className="mx-auto h-14 w-auto hover:scale-110 duration-300"
              src="https://imgur.com/yvRmEvN.png"
              alt="Your Company"
            />
            <div className="border-t mt-5"></div>
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Restablece tu password y no pierdas tu acceso
            </h2>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              {tokenValido && (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  action="#"
                  method="POST"
                >
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300">
                    <label
                      htmlFor="password"
                      className="block text-xs font-medium text-gray-900"
                    >
                      Contraseña
                    </label>
                    <div className="mt-2 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={handlePasswordChange}
                        value={password}
                        autoComplete="current-password"
                        placeholder="••••••••"
                        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pr-10"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                            <path
                              fillRule="evenodd"
                              d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                              clipRule="evenodd"
                            />
                            <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="border-t mt-2"></div>
                    <div className="mt-2 text-sm">
                      Seguridad de la contraseña:{" "}
                      <span
                        className={`font-semibold ${getPasswordStrengthClass(
                          passwordStrength
                        )}`}
                      >
                        {passwordStrength}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="repetir-password"
                        className="block text-xs font-medium text-gray-900"
                      >
                        Repetir contraseña:
                      </label>
                    </div>
                    <div className="mt-2 relative">
                      <input
                        id="repetir-password"
                        name="repetir-password"
                        type={showComprobarPassword ? "text" : "password"}
                        onChange={(e) => setComprobarPassword(e.target.value)}
                        value={comprobarPassword}
                        autoComplete="current-password"
                        placeholder="••••••••"
                        className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pr-10"
                      />
                      <button
                        type="button"
                        onClick={toggleComprobarPasswordVisibility}
                        className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                      >
                        {showComprobarPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                            <path
                              fillRule="evenodd"
                              d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                              clipRule="evenodd"
                            />
                            <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27 .547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                  className="flex w-full justify-center rounded-3xl hover:scale-95 bg-red-600 px-3 py-4 text-sm font-semibold leading-6 duration-300 hover:duration-300 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Guardar nuevo password
                    </button>
                  </div>
                </form>
              )}

              {passwordModificado && (
                <Link
                  className="font-bold mt-3 block text-slate-800 hover:text-[#3366CC]"
                  to="/"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuevoPasswordForm;
