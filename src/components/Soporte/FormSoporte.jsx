import React, { useRef, useState } from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import emailjs from '@emailjs/browser';
import { PantallaCarga } from "../PantallaCarga";
import Alerta from '../Alerta';

const FormSoporte = () => {
  const [alerta, setAlerta] = useState({});
  const [mostrarPantallaEspera, setMostrarPantallaEspera] = useState(false);
  const form = useRef();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellido, setErrorApellido] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    console.log(event.target.files[0])
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

  };

  const handleChangeNombre = (event) => {
    const valorNombre = event.target.value;
    setNombre(valorNombre);
    if (valorNombre.trim() === '') setErrorNombre('Por favor, ingrese un nombre');
    else if (valorNombre.trim().length < 3) setErrorNombre('El nombre debe tener al menos 3 caracteres');
    else setErrorNombre('');
  };

  const handleChangeApellido = (event) => {
    const valorApellido = event.target.value;
    setApellido(valorApellido);
    if (valorApellido.trim() === '') setErrorApellido('Por favor, ingrese un apellido');
    else if (valorApellido.trim().length < 3) setErrorApellido('El apellido debe tener al menos 3 caracteres');
    else setErrorApellido('');
  };

  const handleChangeEmail = (event) => {
    const valorEmail = event.target.value;
    setEmail(valorEmail);
    setErrorEmail(!/^\S+@\S+\.\S+$/.test(valorEmail) ? 'Por favor, ingrese un correo electrónico válido' : '');
  };

  const handleChangePhoneNumber = (event) => {
    const valorPhoneNumber = event.target.value;
    setPhoneNumber(valorPhoneNumber);
    setErrorPhoneNumber(!/^\d{10}$/.test(valorPhoneNumber) ? 'Por favor, ingrese un número de teléfono válido' : '');
  };

  const handleChangeMessage = (event) => {
    const valorMessage = event.target.value;
    setMessage(valorMessage);
    setErrorMessage(valorMessage.trim() === '' ? 'Por favor, ingrese un mensaje' : '');
  };

  const sendEmail = (event) => {
    event.preventDefault();

    // Validación general
    if (nombre.trim() === '' || apellido.trim() === '' || !/^\S+@\S+\.\S+$/.test(email) || !/^\d{10}$/.test(phoneNumber) || message.trim() === '') {
      setAlerta({
        msg: 'Por favor, complete todos los campos correctamente.',
        error: true,
      });
      return;
    }


    // Lógica para enviar el correo electrónico si la validación es exitosa

    setMostrarPantallaEspera(true);
    emailjs
      .sendForm('service_zqoytzc', 'template_7yjyx9h', event.target, 'LPE7sJNvq-93aqhLj')
      .then(
        (result) => {
          setMostrarPantallaEspera(false);

          setAlerta({
            msg: 'Se envió el mensaje correctamente.',
          });
          setNombre('');
          setApellido('');
          setEmail('');
          setPhoneNumber('');
          setMessage('');
        },
        (error) => {
          setMostrarPantallaEspera(false);

          setAlerta({
            msg: 'No se envió el mensaje, vuelve a intentarlo más tarde.',
            error: true,
          });
        }
      );
    setAlerta({});
  };

  const { msg } = alerta;

  return (
    <>
      {msg && <Alerta alerta={alerta} />}
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                  <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">¿Necesitas ayuda?</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Le invitamos a comunicarse con nosotros para abordar cualquier pregunta o inconveniente que pueda tener.
                Alternativamente, puede ponerse en contacto con nosotros a través de los siguientes métodos de comunicación:
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    545 CDMX
                    <br />
                    CP: 57800, IL 99191
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a className="hover:text-gray-900" href="mailto:hello@example.com">
                      soporteiktantramites@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} encType="multipart/form-data" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Nombre *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      value={nombre}
                      onChange={handleChangeNombre}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 ${errorNombre ? 'border-red-500' : ''
                        }`}
                    />
                    {errorNombre && <p className="text-red-500 text-sm mt-1">{errorNombre}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Apelllido *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      value={apellido}
                      onChange={handleChangeApellido}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 ${errorApellido ? 'border-red-500' : ''
                        }`}
                    />
                    {errorApellido && <p className="text-red-500 text-sm mt-1">{errorApellido}</p>}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={email}
                      onChange={handleChangeEmail}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 ${errorEmail ? 'border-red-500' : ''
                        }`}
                    />
                    {errorEmail && <p className="text-red-500 text-sm mt-1">{errorEmail}</p>}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                    Número de teléfono *
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="number"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      value={phoneNumber}
                      onChange={handleChangePhoneNumber}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 ${errorPhoneNumber ? 'border-red-500' : ''
                        }`}
                    />
                    {errorPhoneNumber && <p className="text-red-500 text-sm mt-1">{errorPhoneNumber}</p>}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Mensaje *
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={message}
                      onChange={handleChangeMessage}
                      className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 sm:text-sm sm:leading-6 resize-none ${errorMessage ? 'border-red-500' : ''
                        }`}
                    />
                    {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
                  </div>
                  {/* SUBIR ARCHIVOS!
                  <input
                    type='file'
                    name="file"
                    id="file"
                    onChange={handleFileChange}
                    className={'block w-full p-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'}
                  />
                  */}

                </div>

              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  value="Send"
                  className="relative px-6 py-2  text-white rounded-lg  hover:bg-red-300 duration-500 bg-red-400 flex justify-evenly items-center"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Ventana de espera */}
      {mostrarPantallaEspera && (
        <PantallaCarga />
      )}
    </>
  )
}

export default FormSoporte