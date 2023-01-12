import {useEffect} from 'react'

const Nota = ({nota, setNota, eliminarNota}) => {

    const {titulo, fecha, cuerpo, id} = nota

    const confirmDelete = () => {
        const respuesta = confirm('¿Deseas eliminar esta nota?')

        if(respuesta){
            eliminarNota(id);
        }
    }

    return (
        
        <div className='w-full flex flex-col bg-indigo-600 rounded-md p-7 mb-10'>

            <h1 className='text-white mb-5 w-full text-left font-bold'>{titulo}</h1>

            <p className='text-white mb-5  w-full text-left'>{cuerpo}</p>

            <p className='text-white w-full text-left mb-10'>{fecha}</p>

            <div className='flex flex-row justify-center gap-5'>
                <button onClick={()=> setNota(nota)} type='button' className='uppercase text-black bg-gray-300 px-10 rounded-md hover:bg-white hover:text-black ease-in-out duration-400'>Editar</button>

                <button type='button' onClick={confirmDelete} className='uppercase text-white bg-red-800 px-10 rounded-md hover:bg-red-600 hover:text-white ease-in-out duration-400'>Eliminar</button>
            </div>
            
        </div>
    )
}

export default Nota
