import Image from "next/image";

export default function Home() {
  return (
    <main className="flex lg:flex-row flex-col overflow-x-hidden overflow-y-scroll">
      <div className="flex flex-col bg-gray-100 justify-start items-center py-4 px-4 border-l-4 border-red-900"> 
        <div className="flex mt-[50rem] lg:mt-[2rem] mx-auto w-[25rem] h-[30rem] ">
          <img src="/webs.png" alt="https://www.flaticon.es/iconos-gratis/sitio-web" className="w-[20rem] h-[20rem] rounded-full " />
          <img src="/fotopersonal.png" alt="logo" className="w-[20rem] h-[20rem] rounded-full mt-[5rem] -translate-x-[15rem]" />
        </div>
        <span className="text-3xl font-bold text-yellow-500 underline m-1 shadow-lg shadow-yellow-600 p-2 rounded-lg border border-white">Francisco Guerra</span>
        {/* <span className="text-2xl font-bold text-orange-500 underline m-1">Fullstack Web Developer</span> */}
        <div className="w-[30rem] bg-yellow-500 h-[3rem]  shadow-lg shadow-yellow-600 mt-[2rem] p-2 rounded-lg border border-white">
          <span className="text-2xl font-bold text-gray-100  " >Actualmente : <span className="text-2xl font-bold text-violet-200">Buscando trabajo.</span> </span>
        </div>
        <div className="w-[30rem] bg-yellow-500 h-[3rem]  shadow-lg shadow-yellow-600 mt-[2rem] p-2 rounded-lg border border-white">
          <span className="text-2xl font-bold text-gray-100  " >Idiomas : <span className="text-2xl font-bold text-violet-200">Español / Ingles B1.</span> </span>
        </div>
        <div className="w-[30rem] bg-yellow-500 h-[3rem]  shadow-lg shadow-yellow-600 mt-[2rem] p-2 rounded-lg border border-white">
          <span className="text-2xl font-bold text-gray-100  " >Cursando : <span className="text-xl font-bold text-violet-200">Tecnicatura Desarrollo de software.</span> </span>
        </div>
        <div className="w-[30rem] bg-yellow-500 h-[3rem]  shadow-lg shadow-yellow-600 mt-[2rem] p-2 rounded-lg border border-white">
          <span className="text-2xl font-bold text-gray-100  " >Freelancer : <span className="text-xl font-bold text-violet-200">Trabajos por encargo.</span> </span>
        </div>
      </div>
      <div className="flex w-[60rem] h-[60rem] bg-gray-200 items-start p-4 justify-start overflow-y-scroll overflow-x-hidden h-[100vh] align-middle flex-col border-l-4 border-red-900">
        <div className="flex flex-col gap-4 p-[1rem]">
          <h1 className="text-3xl font-bold text-orange-300 underline m-1 border-b-4 border-orange-500 rounded-lg  w-[54rem] text-right">Fullstack Web Developer</h1>
        </div>
        <div className="flex flex-col gap-4 p-4 my-[1rem]  w-[57rem] mx-auto border border-white shadow-lg shadow-yellow-600 rounded-lg">
          <h3 className="text-3xl bg-yellow-600 w-[14rem] rounded-lg border border-white bg-opacity-70 p-2 font-bold text-yellow-300 shadow-lg shadow-yellow-600 underline my-[2rem]">Hola Mundo!</h3>
          <div className="flex justify-evenly items-center w-full gap-5 ml-[2rem] ">
          <div className="w-[20rem] h-[10rem] bg-yellow-500 shadow-lg shadow-yellow-500 p-2 rounded-lg cambio flex border border-white " >
            <p className="text-center text-2xl text-yellow-100 p-4 ">Soy</p> <span>

              <div className="flex text-center justify-center items-center">
              <div className="flex flex-col w-[3rem]">
              <span>&#9733;</span>

              <span className="text-blue-400 font-bold bg-blue-200">Arg</span>
              </div>
              <div  className="flex flex-col w-[3rem]">
              <span className="translate-y-[-0.5rem]">&#9733;</span>

              <span className="text-yellow-300 font-bold bg-white">ent</span>
              </div>
              <div className="flex flex-col w-[3rem]"> 
              <span>&#9733;</span>
              <span className="text-blue-400 font-bold bg-blue-200">ino</span> 
              </div>

              </div>
            <p className="text-center text-2xl text-yellow-100 w-[20rem] -ml-[5rem]">              y tengo 31 años. Nacido en Capital Federal , criado en La Pampa tirando para Cordoba! </p>
            </span>
            </div>
          
          <div className="w-[20rem] h-[10rem] bg-yellow-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay shadow-lg shadow-yellow-500 p-2 rounded-lg cambio flex border border-white" >

              <p className="text-center text-2xl text-yellow-100">Soy fullstack web developer. Tengo 2 años de experiencia. </p>

          </div>
          </div>
          <div className="flex justify-evenly items-center w-full gap-5 my-[1rem]">
          <div className="w-[20rem] h-[10rem] bg-yellow-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay2 shadow-lg shadow-yellow-500 p-2 rounded-lg cambio flex border border-white" >

              <p className="text-center text-2xl text-yellow-100">En este momento estoy cursando la Tecnicatura de Desarrollo de software en ISSD de Cordoba. </p>

          </div>
          <div className="w-[20rem] h-[10rem] bg-yellow-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay3 shadow-lg shadow-yellow-500 p-2 rounded-lg cambio flex border border-white" >
            <p className="text-center text-xl text-yellow-100">Me encuentro abierto a trabajos como Freelancer y en busqueda de una oportunidad laboral en una empresa.</p>
        </div>
        </div>

        </div>
        <div className="flex flex-col gap-4 p-4 my-[2rem]  w-[57rem] mx-auto border border-white shadow-lg shadow-yellow-600 rounded-lg">
          <span className="text-2xl font-bold text-yellow-400 underline mt-[2rem] rounded-lg border border-white bg-opacity-70 p-2 font-bold text-yellow-200 shadow-lg shadow-yellow-600 underline  p-2 w-[33rem] my-[1rem] bg-yellow-600">Algunas de las tecnologias que manejo son :</span>
          <div className="flex-wrap flex-col w-full gap-5 p-10 ">
          <div className="w-[15rem] h-[3rem] bg-red-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay my-[1rem]" >

              <p className="text-center text-2xl text-yellow-100">HTML</p>

          </div>
          <div className="w-[25rem] h-[3rem]  bg-blue-200 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay my-[1rem]" >

            <p className="text-center text-2xl text-blue-500 font-bold">CSS - tailwind - mobile first</p>

          </div>
        <div className="w-[30rem] h-[3rem]  bg-yellow-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay my-[1rem]" >

        <p className="text-center text-2xl text-yellow-100">Javascript</p>

        </div>
        <div className="w-[35rem] h-[3rem]  bg-cyan-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay my-[1rem] " >

          <p className="text-center text-2xl text-yellow-100">React</p>

          </div>
          <div className="w-[30rem] h-[3rem]  bg-green-700 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay my-[1rem]" >

              <p className="text-center text-2xl text-yellow-500">Express</p>

          </div>
          <div className="w-[38rem] h-[3rem]  bg-gray-700 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay my-[1rem]" >

            <p className="text-center text-2xl text-white">NextJs</p>

          </div>
          <div className="w-[30rem] h-[3rem]  bg-lime-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay my-[1rem]" >

           <p className="text-center text-2xl text-yellow-100">MongoDB</p>

          </div>
          <div className="w-[38rem] h-[3rem]  bg-orange-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay my-[1rem]" >

<p className="text-center text-2xl text-yellow-100">Firebase</p>

</div>
          </div>

        </div>
        <div className="flex flex-col gap-4 p-4 my-[2rem] w-[57rem] mx-auto border border-white shadow-lg shadow-yellow-600 rounded-lg">
          <h3 className="text-2xl font-bold text-yellow-400 bg-yellow-600 w-[12rem] p-2 rounded-lg border border-white bg-opacity-70 shadow-lg shadow-yellow-600 underline my-[1rem] ">Mis proyectos:</h3>
          <div className="flex gap-5 w-full  justify-center p-5 bg-yellow-900 bg-opacity-50 rounded-lg border border-white shadow-lg shadow-yellow-600">
          <div className="flex flex-wrap gap-5 w-full  justify-center p-5 bg-yellow-900 bg-opacity-40 rounded-lg">
            <h2 className="text-3xl font-bold text-yellow-500 underline">Veterinaria - Turnero + E-commerce + integracion MP</h2>
              <div className="w-[35rem] h-[20rem] flex">
                <iframe src="https://magalimartinveterinaria.vercel.app" className="w-[40rem] h-[20rem] rounded-lg border border-white">
                </iframe>
                  <p className="text-center text-1xl text-yellow-100 w-[20rem] text-xl py-[6rem] transform rotate-[4deg] shadow-lg shadow-yellow-600 rounded-lg bg-yellow-500 h-[20rem]">
                    Este proyecto fue muy apasionante para mi porque es mi primera aplicacion web. <br/>

                    
                  </p>
              </div>
              <p className="text-center text-2xl text-yellow-100">Esta hecho con NextJs y Firebase</p>

          </div>
          <div className="flex flex-wrap gap-5 w-[5rem]   justify-center  bg-yellow-900 hover:bg-opacity-10 h-[4rem] my-[14rem] shadow-lg shadow-yellow-600 rounded-lg">
            <button className="text-3xl font-bold text-yellow-100 hover:text-yellow-500 underline hover:text-yellow-100  p-2  hover:rounded-lg transition duration-300">Next</button>
          </div>
          </div>
        </div>
      <div className="flex flex-col gap-4 p-4  z-[999] border border-white shadow-lg shadow-yellow-600 rounded-lg w-[57rem] mx-auto " > 
        <h2 className="text-2xl font-bold text-yellow-600 my-[1rem]">En este momento puedes contactarme para realizar  Landings Page .</h2>
        <p className="text-1xl text-yellow-600 bg-yellow-200 p-10 rounded-lg bg-opacity-90 my-[1rem] ">
        <span className="text-2xl font-bold text-yellow-400 pb-5">Dejame explicarte que son </span><br/>
            Una Landing Page es una página web diseñada específicamente para convertir visitantes en leads o clientes. 
            Se enfocan en un solo objetivo o llamada a la acción (CTA), como suscribirse a un boletín, descargar un recurso, o realizar una compra. 
            Estas páginas están optimizadas para captar la atención del usuario, presentar una propuesta de valor clara y guiarlo hacia la acción deseada. 
            Con una buena estrategia de Landing Page, puedes mejorar significativamente tus tasas de conversión y alcanzar tus metas comerciales.
        </p>

        <div className="flex flex-wrap gap-5 w-full  justify-center p-5 bg-yellow-900 bg-opacity-50 rounded-lg border border-white shadow-lg shadow-yellow-600">
        <div className="w-[18rem] h-[12rem] bg-white shadow-lg p-4 rounded-lg flex items-center hover:scale-110 transition duration-300">
          <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0118 15.25C18 19.852 15.09 23.998 12 23.998 8.91 23.998 6 19.852 6 15.25c0-1.206.32-2.36.84-3.422L12 14z" />
            </svg>
          </div>
          <div>
            <h6 className="text-gray-800 font-bold">Título del Componente</h6>
            <p className="text-gray-600 text-sm">Descripción breve del contenido o función del componente.</p>
          </div>
        </div>
        <div className="w-[18rem] h-[12rem] bg-gray-100 shadow-md p-4 rounded-lg hover:scale-110 transition duration-300">
  <div className="bg-gray-300 h-[5rem] w-full rounded-md overflow-hidden mb-2">
    <img src="https://via.placeholder.com/320x120" alt="Imagen destacada" className="w-full h-full object-cover"/>
  </div>
  <div>
    <h6 className="text-gray-800 font-bold text-sm">Card con Imagen</h6>
    <p className="text-gray-600 text-xs mt-1">Una descripción breve del contenido que se muestra.</p>
  </div>
        </div>
      <div className="w-[18rem] h-[12rem] bg-yellow-50 shadow-sm p-4 rounded-lg flex flex-col justify-between hover:scale-110 transition duration-300">
        <div>
          <h6 className="text-yellow-600 font-bold text-sm">Título y CTA</h6>
          <p className="text-yellow-500 text-xs mt-1">Un resumen o detalle breve que lleva al usuario a la acción.</p>
        </div>
        <button className="bg-yellow-600 text-white py-1 px-3 rounded-lg hover:bg-yellow-700 mt-2">
          Call to Action
        </button>
      </div>


        </div>
      </div>

      </div>
    </main>
  );
}
