import './App.css';
import { Testimonio } from './componentes/Testimonio'
import data from './data/testimonio.json'

function App() {
  let testimonios = []
          data.forEach(element => {
            testimonios.push(<Testimonio 
              nombre={element["nombre"]}
              pais={element["pais"]}
              imagen={element["imagen"]}
              cargo={element["cargo"]}
              empresa={element["empresa"]}
              testimonio={element["testimonio"]}/>)
          })
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {
          testimonios
        }
        </div>
    </div>
  );
}

export default App;
