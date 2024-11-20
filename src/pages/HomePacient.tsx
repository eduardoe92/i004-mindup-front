import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import CustomButtonHome from "../components/home/CustomButtonHome";

function HomePacient() {

  return (
    <section className="flex flex-col items-center pb-2">
      <header className="bg-secondary w-full pl-4 py-2 gap-2 text-white flex items-center">
        <button className="p-1">
          <RxHamburgerMenu className="size-6" />
        </button>
        <img src="/public/logo1.png" alt="MindUp Logo" className="h-11" />
      </header>
      <article className="flex my-12 px-3 justify-start items-center gap-4 w-[343px]">
        <img className="size-[86px] rounded-full" src="public/Imágenes/MiguelPaciente.png" alt="Imagen de perfil" />
        <div className="w-60 mt-4 flex flex-col gap-2">
         <h2 className="text-xl font-semibold text-[#000000]">Hola, Miguel</h2>
         <p className="text-[#A1A1A1] text-[15px] leading-tight">Estamos aquí para escucharte y apoyarte en todo momento.</p>
        </div>
      </article>
      <article className="mb-3 text-center flex flex-col justify-center items-center gap-4">
        <CustomButtonHome icon="MisCitas.png" title="Mis citas" type="button"/>
        <div className="text-lg bg-secondary shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded text-[#FFFFFF] w-72 p-2 px-4 text-wrap text-start">
            Hoy tienes una nueva cita 9 am {/* "9am" va a ser una variable */}
        </div> 
        <CustomButtonHome icon="ProfesionalesCompatibles.png" title="Profesionales compatibles" type="button"/>
        <CustomButtonHome icon="Asistencia.svg" title="Asistencia" type="button"/>
      </article>
    </section>
  );
}

export default HomePacient;