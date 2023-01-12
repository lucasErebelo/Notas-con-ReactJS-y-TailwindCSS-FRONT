import { useState} from 'react'
import Header from "./components/Header";
import CrearNota from './components/CrearNota';
import ListaNotas from './components/ListaNotas';

function App() {

  const [notas, setNotas] = useState([]);

  const [nota, setNota] = useState({});

  const eliminarNota = (id) => {
    const notasNoEliminadas = notas.filter(nota => nota.id !== id)

    setNotas(notasNoEliminadas);
  }

  return (
    <div className="container mx-auto mt-1">
      <Header/>
      <CrearNota 
        notas={notas}
        setNotas={setNotas}
        nota={nota}
        setNota={setNota}
      />
      <ListaNotas
        notas={notas}
        setNotas={setNotas}
        nota={nota}
        setNota={setNota}
        eliminarNota={eliminarNota}
      />

    </div>
  )
}

export default App;
