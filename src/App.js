import './App.css';
import Mensaje from './Mensaje.js'


const Descripcion = () => {
  return <p>Esta es la APP del curso fullstack bootcamp</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color='red' menssage='Estamos trabajando' />
      <Mensaje color='blue' menssage='En un curso' />
      <Mensaje color='green' menssage='De React' />
      <Descripcion />
    </div>
  );
}

export default App;
