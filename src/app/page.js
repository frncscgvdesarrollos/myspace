import Image from "next/image";
import Cubo from "./components/Cubo";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row absolute top-0 left-0   lg:position-fixed lg:top-[1vh] lg:left-[5vw] l lg:overflow-hidden w-[100vw] lg:w-[90vw] mx-auto lg:h-[100vh] lg:my-auto ">
      <div className="aside flex w-[100vw] mx-auto flex-col bg-gray-700 lg:bg-gray-100 justify-start items-center lg:py-4 lg:px-4 lg:border-l-4 border-red-900 lg:w-[30vw] lg:h-[90vh]  lg:my-auto"> 
        <div className="flex  h-[40vh] mx-auto w-[100vw] justify-center lg:w-[30vw] " >
          <Cubo className=""  />
          <div className="flex h-[40vh] w-[40vh] justify-center translate-x-[1rem]">
          <img src="/webs.png" alt="https://www.flaticon.es/iconos-gratis/sitio-web" className="h-[30vh] translate-y-[4rem] translate-x-[1rem] mx-auto rounded-full" />
          <img src="/fotopersonal.png" alt="logo" className="h-[30vh] rounded-full mx-auto translate-y-[9rem] translate-x-[-9rem]" />
          </div>
        </div>
        <span className="text-3xl   font-bold text-yellow-200 underline mt-[7vh] shadow-lg shadow-yellow-600 p-2 rounded-lg border border-white z-10 bg-yellow-500">Francisco Guerra</span>
        <div className="flex flex-col lg:h-[20vh]  py-6 gap-2">
          <div className="w-[20rem] lg:w-[25vw] md:w-[30rem] bg-yellow-500  shadow-lg shadow-yellow-600 mt-[0.5rem] px-2 rounded-lg border border-white py-[0.5rem]">
            <span className="text-base md:text-xl lg:btext-lg  font-bold text-gray-100  " >Freelancer : <span className="text-base md:text-xl lg:btext-lg font-bold text-violet-200">Trabajos por encargo.</span> </span>
          </div>
          <div className="w-[20rem] lg:w-[25vw] md:w-[30rem] bg-yellow-500   shadow-lg shadow-yellow-600 mt-[0.5rem] px-2 rounded-lg border border-white py-[0.5rem]">
            <span className="text-base md:text-xl font-bold text-gray-100  " >Idiomas : <span className="text-base md:text-xl lg:btext-lg font-bold text-violet-200">Español / Ingles B1.</span> </span>
          </div>
          <div className="w-[20rem] lg:w-[25vw] md:w-[30rem] bg-yellow-500  shadow-lg shadow-yellow-600 mt-[0.5rem] pl-2 rounded-lg border border-white py-[0.5rem]">
            <span className="text-base md:text-xl font-bold text-gray-100  " >Cursando : <span className="text-base md:text-xl lg:btext-lg font-bold text-violet-200">Tec. Des de software.</span> </span>
          </div>

        </div>
        {/* <span className="text-2xl font-bold text-orange-500 underline m-1">Fullstack Web Developer</span> */}
      </div>
      <div className="fondo flex flex-col w-[100vw] lg:w-[60vw] h-[100%] mx-auto lg:h-[90vh] bg-gray-200 items-start p-4 justify-start lg:overflow-y-scroll overflow-x-hidden lg:my-auto lg:w-[70vw] lg:h-[90vh] align-middle flex-col border-l-4 border-red-900">
        <div className="flex flex-col gap-4 p-[1rem] w-[90vw] lg:w-[55vw] mx-auto">
          <h1 className="text-3xl font-bold text-orange-300 underline m-1 border-b-4 border-orange-500 rounded-lg   text-right">Fullstack Web Developer</h1>
        </div>
        <div className="flex flex-col gap-4 p-4 my-[1rem] mx-auto border border-white shadow-lg shadow-yellow-600 rounded-lg w-[90vw] lg:w-[55vw] mx-auto">
          <h3 className="text-3xl bg-yellow-600  rounded-lg border border-white bg-opacity-70 p-2 font-bold text-yellow-300 shadow-lg shadow-yellow-600 underline my-[2rem]">Hola Mundo!</h3>
        
          <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-5 ">
          <div className="lg:h-[10rem] w-[80vw] lg:w-[20rem] bg-yellow-500 shadow-lg shadow-yellow-500 p-2 rounded-lg cambio flex flex-col border border-white justify-center  " >
              <div className="flex text-center justify-center items-center">
              <p className="text-center text-xl lg:text-2xl text-yellow-100 p-4">Soy</p> 
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
            <p className="text-center text-xl lg:text-xl text-yellow-100 lg:w-[20rem] lg:-ml-[0.5rem] ">
                            y tengo 31 años. Nacido en Capital Federal , criado en La Pampa tirando para Cordoba!
             </p>
           </div>
          
          <div className="lg:w-[20rem] w-[80vw] px-2 lg:h-[10rem] bg-yellow-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay shadow-lg shadow-yellow-500 p-2 rounded-lg cambio flex border border-white" >

              <p className="text-center text-xl my-[2.5rem] lg:text-2xl text-yellow-100">Soy fullstack web developer. Tengo 2 años de experiencia. </p>

          </div>
          </div>

          <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-5 ">
          <div className="lg:w-[20rem] w-[80vw] w-full lg:h-[10rem] bg-yellow-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay2 shadow-lg shadow-yellow-500 p-2 rounded-lg cambio flex border border-white" >

              <p className="text-center text-xl text-yellow-100 my-auto">En este momento estoy cursando la Tecnicatura de Desarrollo de software en ISSD de Cordoba. </p>

          </div>
          <div className="lg:w-[20rem] w-[80vw] lg:h-[10rem] bg-yellow-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay3 shadow-lg shadow-yellow-500 p-2 rounded-lg cambio flex border border-white" >
            <p className="text-center text-xl lg:text-xl my-auto text-yellow-100">Me encuentro abierto a trabajos como Freelancer y en busqueda de una oportunidad laboral en una empresa.</p>
        </div>
        </div>

        </div>
        <div className="flex flex-col gap-4 p-4 my-[2rem] mx-auto border border-white shadow-lg shadow-yellow-600 rounded-lg w-[90vw] lg:w-[55vw] mx-auto">
          <span className="text-3xl bg-yellow-600  rounded-lg border border-white bg-opacity-70 p-2 font-bold text-yellow-300 shadow-lg shadow-yellow-600 underline my-[2rem]">Tecnologias con las que trabajo :</span>
          <div className="flex-wrap flex-col flex w-full gap-3 p-10 ">
          <div className="lg:w-[15rem] h-[3rem] bg-red-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay  flex items-center gap-2 " >

              <p className="text-center text-2xl text-yellow-100">HTML</p>
                <img src="/icons/html.png" alt="HTML" className="w-[2rem]" />
          </div>
          <div className="lg:w-[25rem] h-[3rem]  bg-blue-200 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay  flex items-center gap-2" >

            <p className="text-center text-2xl text-blue-500 font-bold">CSS - Tailwind </p>
            <img src="/icons/css.png" alt="Tailwind" className="w-[2rem]"/>

          </div>
        <div className="lg:max-w-[28rem]  bg-yellow-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay  flex items-center gap-2" >

        <p className="text-center text-2xl text-yellow-100">Javascript</p>
        <img src="/icons/js.png" alt="Javascript" className="w-[2rem]"/>
        </div>
        <div className="lg:max-w-[38rem]    bg-cyan-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay flex items-center gap-2" >

          <p className="text-center text-2xl text-yellow-100">React</p>
          <img src="/icons/react.png" alt="React" className="w-[2rem]"/>

          </div>
          <div className="lg:max-w-[30rem]    bg-green-700 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay  flex items-center gap-2" >

              <p className="text-center text-2xl text-yellow-500">Express</p>
              <img src="/icons/express.png" alt="Express" className="w-[2rem]" />
          </div>
          <div className="lg:max-w-[40rem]    bg-gray-700 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay flex items-center gap-2" >

            <p className="text-center text-2xl text-white">NextJs</p>
            <img src="/icons/next.png" alt="NextJs" className="w-[2rem]" />
          </div>
          <div className="lg:max-w-[30rem]   bg-lime-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay  flex items-center gap-2" >

           <p className="text-center text-2xl text-yellow-100">MongoDB</p>
            <img src="/icons/mongo.png" alt="MongoDB"  className="w-[2rem]"/>
          </div>
          <div className="lg:max-w-[38rem]   bg-orange-500 shadow-lg shadow-yellow-600 p-2 rounded-lg cambio delay  flex items-center gap-2" >

            <p className="text-center text-2xl text-yellow-100">Firebase</p>
                <img src="/icons/firebase.png" alt="Firebase" className="w-[2rem]" />
          </div>
          </div>

        </div>
        <div className="flex flex-col gap-4 lg:p-4 my-[2rem] lg:mx-auto border border-white shadow-lg shadow-yellow-600 rounded-lg w-[90w] lg:w-[55vw] mx-auto">
          <h3 className="text-3xl bg-yellow-600  rounded-lg border border-white bg-opacity-70 p-2 font-bold text-yellow-300 shadow-lg shadow-yellow-600 underline my-[2rem] ">Mis proyectos:</h3>
          <div className="flex flex-wrap gap-5 w-full  justify-center p-5 bg-yellow-900 bg-opacity-50 rounded-lg border border-white shadow-lg shadow-yellow-600">
          <div className="flex flex-wrap md:flex md:flex-row gap-2 w-full  justify-center p-5 bg-yellow-900 bg-opacity-40 rounded-lg">
            <div className="w-[70vw]">

            <h2 className="lg:text-3xl text-xl font-bold text-yellow-500 underline my-[0.5rem]">Veterinaria - Turnero + E-commerce + integracion MP</h2>
              <div className="flex w-full justify-center items-center lg:min-w-[20rem] lg:max-w-[38rem] mx-auto ">
                <iframe src="https://magalimartinveterinaria.vercel.app" className="w-[60%]  h-[20rem] lg:w-[25vw] lg:mt-[1rem] w-[40%] lg:h-[20rem] rounded-lg border border-white">
                </iframe>
                  <p className="text-center text-2xl text-yellow-100 lg:w-[20rem] w-[40%] lg:py-[2rem] lg:py-[6rem] lg:mt-[1rem] transform rotate-[4deg] shadow-lg shadow-yellow-600 rounded-lg bg-yellow-500  h-fit">
                    Este proyecto fue muy apasionante para mi porque es mi primera aplicacion web.                    
                  </p>
              </div>
              <p className="text-center lg:text-2xl text-xl my-[1rem] text-yellow-100">Esta hecho con NextJs y Firebase</p>
            </div>

          </div>
          <div className="flex flex-wrap gap-5 lg:w-[5rem]   justify-center  bg-yellow-900 hover:bg-opacity-10 h-[4rem] shadow-lg shadow-yellow-600 rounded-lg">
            <button className="lg:text-3xl font-bold text-yellow-100 hover:text-yellow-500 underline hover:text-yellow-100  p-2  hover:rounded-lg transition duration-300">Next</button>
          </div>
          </div>
        </div>
      <div className="flex flex-col gap-4 p-4  z-[999] border border-white shadow-lg shadow-yellow-600 rounded-lg w-[90vw] lg:w-[55vw] mx-auto " > 
        <h2 className="text-3xl bg-yellow-600  rounded-lg border border-white bg-opacity-70 p-2 font-bold text-yellow-300 shadow-lg shadow-yellow-600 underline my-[2rem] ">En este momento puedes contactarme para realizar  Landings Page .</h2>
        <p className="text-1xl text-yellow-600 bg-yellow-200 p-10 rounded-lg bg-opacity-90 my-[1rem] ">
        <span className="text-2xl font-bold text-yellow-400 pb-5">Dejame explicarte que son </span><br/>
            Una Landing Page es una página web diseñada específicamente para convertir visitantes en leads o clientes. 
            Se enfocan en un solo objetivo o llamada a la acción (CTA), como suscribirse a un boletín, descargar un recurso, o realizar una compra. 
            Estas páginas están optimizadas para captar la atención del usuario, presentar una propuesta de valor clara y guiarlo hacia la acción deseada. 
            Con una buena estrategia de Landing Page, puedes mejorar significativamente tus tasas de conversión y alcanzar tus metas comerciales.
        </p>

        <div className="flex flex-wrap gap-5 w-full  justify-center p-5 bg-yellow-900 bg-opacity-50 rounded-lg border border-white shadow-lg shadow-yellow-600">
        <div className="w-[18rem] h-[12rem] bg-blue-200 shadow-lg p-4 rounded-lg flex items-center hover:scale-110 transition duration-300">
          <div className="border-2 border-blue-600 p-4 w-full rounded-lg">
          <div className="bg-blue-600 text-white p-3 rounded-full mr-4 w-12 h-12">
              <span className="text-3xl font-bold text-white">&#9733;</span>
          </div>
            <h6 className="text-gray-800 font-bold text-sm underline">Tu producto</h6>
            <p className="text-gray-600 text-sm font-bold">El mejor en precio calidad!.</p>
            <button className="text-blue-600 font-bold border border-blue-600 py-1 px-2 rounded hover:bg-blue-600 hover:text-white my-2 ml-2">Comprar !!</button>
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
