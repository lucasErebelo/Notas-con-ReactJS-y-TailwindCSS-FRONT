import React from 'react'
import Nota from './Nota'

const ListaNotas = ({notas, setNotas, nota, setNota, eliminarNota}) => {

    return (
    <div className='w-full flex items-center flex-col text-2xl'>
        
        {notas && notas.length ? (
                
            <>
                <h2 className='text-white font-bold'>Lista de Notas</h2>
                
                <p className='text-indigo-600 font-bold mb-5'>Administra tus {''}
                    <span>notas aquí</span>
                </p>
                
                { notas.map( (nota) => (
                
                    <Nota 
                        key={nota.id}
                        nota={nota}
                        setNota={setNota}
                        eliminarNota={eliminarNota}
                    />
                
                ))}
            </>

        ) : (

            <>
                <h2 className='text-white font-bold'>No hay notas</h2>
                    
                <p className='text-indigo-600 font-bold mb-5'>Administra tus {''}
                    <span>notas aquí</span>
                </p>
            </>

        )}

   
    </div>
  )
}

export default ListaNotas
