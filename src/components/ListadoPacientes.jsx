import Paciente from "./Paciente"
import { useEffect } from "react"




const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

 


  
  return (
    <div className=' md:w-1/2 lg:w-3/5 h-screen'>

      {/* ternario para mostrar texto de forma condicional */}
      {pacientes && pacientes.length ? (
        <> 
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>

          { pacientes?.map((paciente) => {
            return (
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          })}
        </> 
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando {''}
            <span className='text-indigo-600 font-bold'>pacientes</span>
          </p>
        </>
      )}
      
      

      
    </div>
  )
}

export default ListadoPacientes