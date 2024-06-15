// Importamos el logo de la aplicación desde un archivo SVG.
import logo from './logo.svg';
// Importamos los estilos CSS para la aplicación.
import './App.css';
// Importamos los componentes que vamos a utilizar en nuestra aplicación.
import ListClientsComponent from './components/ListClientsComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// Importamos componentes de react-router-dom para manejar las rutas en la aplicación.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddClientComponent from './components/AddClientComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  {/*Configuramos el enrutador de la aplicación.*/}
        <HeaderComponent/>
        .<div>
          <Routes>{/*Definimos las rutas de la aplicación dentro de un contenedor de rutas.*/}
            <Route exact path='/' element={<ListClientsComponent/>}></Route>{/*Definimos una ruta que renderiza ListClientesComponent cuando la URL es '/'*/}
            <Route exact path='/Clientes' element={<ListClientsComponent/>}></Route>{/*Definimos otra ruta que también renderiza ListClientesComponent cuando la URL es '/Clientes' */}
            <Route exact path='/add-client' element={<AddClientComponent/>}></Route>
            <Route exact path='/edit-client/:id' element={<AddClientComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
