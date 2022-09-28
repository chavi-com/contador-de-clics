
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import logoclik from './imagenes/logoclick.png';
import {useState} from 'react';


function App() {

  const [numClics,setNumClics] = useState(0);

  const manejarClic=()=>{
    setNumClics(numClics + 1);

  }
  const reiniciarContador=()=>{
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='reecodeamp-logo-contenedor'>
        <img className='freecodecamp-logo 'src={logoclik} > 

        </img>

      </div>
      <div className='contenedor-principal'>

        <Contador numClics={numClics} />


        <Boton texto='Clic'
        esBotonDeclic={true}
        manejarClic={manejarClic}
        />

        <Boton texto='Reiniciar'
        esBotonDeclic={false}
        manejarClic={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
