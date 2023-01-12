import { useState, useEffect } from 'react';
import Error from './Error';
import { generarId } from '../helpers';

const CrearNota = ({notas, setNotas, nota, setNota}) => {

    const [titulo, setTitulo] = useState('');
    const [fecha, setFecha] = useState('');
    const [cuerpo, setCuerpo] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=>{
        if( Object.keys(notas).length > 0){
            setTitulo(nota.titulo)
            setFecha(nota.fecha)
            setCuerpo(nota.cuerpo)
        }
    }, [nota])

    const handleSubmit = (e) => {
        e.preventDefault();

        if([titulo,fecha,cuerpo].includes('')){

            console.log('Faltan llenar campos.');
      
            setError(true);

        }else{
        
            setError(false);

            //OBJETO DE NOTA
            const objetoNota = {
                titulo,
                fecha,
                cuerpo,
            }

            if(nota.id){

                console.log('Editando');

                objetoNota.id = nota.id

                const notasActualizadas = notas.map( notaState => notaState.id === nota.id ? objetoNota : notaState)

                setNotas(notasActualizadas);

            }else{

                console.log('Agregando');

                objetoNota.id = generarId()

                setNotas([...notas, objetoNota]);
            }

            

            //REINICIAR FORMULARIO
            setTitulo('');
            setFecha('');
            setCuerpo('');

        }
    }



    return (
    <div className='mb-10'>

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <form onSubmit={handleSubmit} className=''>

        <div className="mb-5">
            <label htmlFor="title" className='text-white text-2xl mb-2'>Título</label>
            <input value={titulo} onChange={(e)=> setTitulo(e.target.value)} id="title" type="text" placeholder="Título" className="p-2 border-2 border-indigo-600 w-full mt-2 placeholder-gray-400 rounded-md" 
            />
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className='text-white text-2xl mb-2'>Fecha</label>
          <input value={fecha} onChange={(e)=> setFecha(e.target.value)} id="fecha" type="date" className="p-2 border-2 border-indigo-600 w-full mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
            <label htmlFor="title" className='text-white text-2xl mb-2'>Escribí tu nota</label>
            <textarea value={cuerpo} onChange={(e)=> setCuerpo(e.target.value)} id="title" type="textarea" placeholder="Nota" className="p-2 border-2 border-indigo-600 w-full h-60 mt-2 placeholder-gray-400 rounded-md" 
            />
        </div>

        <input type="submit" value={nota.id ? 'Editar nota' : 'Crear nota'} className='mb-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg rounded-md hover:bg-indigo-500 cursor-pointer ease-in-out duration-300'/>

        </form>

    </div>
    )
}

export default CrearNota
