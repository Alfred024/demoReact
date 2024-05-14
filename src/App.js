import './App.css';
import { Navbar } from './components/Navbar';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Testimony
        image={'jesse-pinkman'}
        name={'Jesse Pinkman'}
        country={'México'}
        charge={'Ing. de Software'}
        company={'Los Pollos Hermanos'}
        testimony={'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'}
      />
      <Testimony
        image={'skyler'}
        name={'Skyler White'}
        country={'E.U.A'}
        charge={'Ing. de Software'}
        company={'Amazon'}
        testimony={'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'}
      />
      <Testimony
        image={'walter-white'}
        name={'Walter White'}
        country={'Alemania'}
        charge={'Ing. de Software'}
        company={'Los Pollos Hermanos'}
        testimony={'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'}
      />
    </div>
  );
}

export default App;
