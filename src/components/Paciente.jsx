
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, telefono, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

  return (
    <div className='bg-white mx-5 my-5 shadow-2xl px-5 py-5 rounded-lg'>
        <p className='font-bold  mb-3 uppercase'>Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold  mb-3 uppercase'>Propietario: {''}
            <span className='font-normal normal-case'>{propietario}</span>
        </p>
        <p className='font-bold  mb-3 uppercase'>Teléfono: {''}
            <span className='font-normal normal-case'>{telefono}</span>
        </p>
        <p className='font-bold  mb-3 uppercase'>Email: {''}
            <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold  mb-3 uppercase'>Fecha Alta: {''}
            <span className='font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold  mb-3 uppercase'>Síntomas: {''}
            <span className='font-normal normal-case'>{sintomas}</span>
        </p>

        <div className="w-full flex flex-row-reverse">
        <button 
                type="editar"
                className="py-1 px-6 bg-red-400 hover:bg-red-600 text-white shadow-lg font-bold rounded-lg"
                onClick={handleEliminar}
                >
                
                Eliminar
            </button>
            <button 
                type="editar"
                className="py-1 px-6 mr-10 bg-indigo-400 hover:bg-indigo-600 text-white shadow-lg font-bold rounded-lg"
                onClick={() => setPaciente(paciente)}>
                Editar
            </button>
            
        </div>
      </div>
  )
}

export default Paciente