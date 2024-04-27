const people = [
    {
      name: 'Trámites de Protección Ambiental y Residuos con la ASEA',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1661963620419-32e7be221e59?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Regulaciones para la gestión adecuada de residuos y protección ambiental.',
    },
    {
      name: 'Trámites de Exploración y Extracción con la ASEA',
      imageUrl:
        'https://images.unsplash.com/photo-1694523882268-fe9a9af65c92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Procesos para actividades de exploración, extracción, y requisitos de seguros y garantías financieras.',
    },
    {
      name: 'Compañía Certificada en Planeación y Perforación de Pozos',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1682148275574-d9c303caeca3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Especialistas en la planificación y ejecución de perforaciones para la exploración y extracción.',
    },
    {
      name: 'Compañía Certificada con Acreditación del CNIH',
      imageUrl:
        'https://images.unsplash.com/photo-1539186607619-df476afe6ff1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      bio: 'Reconocidos por cumplir estándares del Centro Nacional de Información de Hidrocarburos.',
    },
  ]
  
  export default function SectionTwo() {
    return (
      <div className="bg-white py-24 md:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Industria pozos petroleros</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Los Contratos de E&E conllevan el cumplimiento con múltiples autoridades en alguna de las 400 diferentes posibles gestiones (Autorizaciones, Permisos, Informes, Avisos, Reportes, etc.) derivadas de la regulación vigente.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Ayudamos a nuestros clientes a obtener la resolución favorable de trámites del Sector Energía (ASEA, CNH, etc.). Contamos con procesos legal y técnicamente robustos, refinados a través de una amplia experiencia en los procesos de gestión de los Reguladores del Sector.

            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  